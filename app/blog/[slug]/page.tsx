"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { poppins } from "@/styles/font";
import axios from "axios";
import { SkeletonDetailBlog } from "@/components/ui/SkeletonCard";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  date: string;
  content: string;
  author: string;
}

const DetailBlog: React.FC = () => {
  const { slug } = useParams(); 
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const ALLBLOGS_API_URL = `${API_BASE_URL}`;
  const BLOG_API_URL = `${API_BASE_URL}/${slug}`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(BLOG_API_URL, {
          headers: {
            Accept: "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.data;
        if (data) {
          const fetchedPost = {
            id: data.id,
            title: data.title || "No Title",
            author: data.author || "Unknown Author",
            desc: data.description || "No Description Available",
            content: data.content || "No Content Available",
            img: data.image_0 || "/default-image.jpg",
            date: data.create_at || "No Date",
          };
          setPost(fetchedPost);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error fetching post from API: ${err.message}`);
        } else {
          setError("An unknown error occurred.");
        }
        console.error("Error fetching post from API:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get(ALLBLOGS_API_URL, {
          headers: {
            Accept: "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = response.data;
        if (data && Array.isArray(data)) {
          console.log("Original data:", data);  // Debugging: cek data yang didapatkan

          // Urutkan post berdasarkan tanggal terbaru
          const sortedPosts = data.sort((a: any, b: any) => new Date(b.create_at).getTime() - new Date(a.create_at).getTime());

          // Filter post yang sedang ditampilkan dan ambil 3 post terbaru
          const filteredPosts = sortedPosts
            .filter((p: Post) => p.id !== slug) // Pastikan post saat ini tidak termasuk dalam related posts
            .slice(0, 3)
            .map((post) => ({
              id: post.id,
              title: post.title || "No Title",
              author: post.author || "Unknown Author",
              desc: post.description || "No Description Available",
              content: post.content || "No Content Available",
              img: post.image_0 || "/default-image.jpg",
              date: post.create_at || "No Date",
            }));

          console.log("Filtered related posts:", filteredPosts); // Debugging: cek hasil filtering
          setRelatedPosts(filteredPosts);
        } else {
          setError("No related posts found");
        }

      } catch (err) {
        if (err instanceof Error) {
          setError(`Error fetching related posts from API: ${err.message}`);
        } else {
          setError("An unknown error occurred.");
        }
        console.error("Error fetching related posts from API:", err);
      }
    };

    fetchPost();
    fetchRelatedPosts();
  }, [slug]);

  if (loading) return <SkeletonDetailBlog />; 
  if (error) return <p className="flex space-x-2 justify-center items-center h-screen">{error}</p>;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className={` ${poppins.className}`} style={{ marginTop: "130px", color: "#333" }}>
      <article style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <header>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="flex items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {new Date(post.date).toLocaleDateString()} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-12 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            {post.author}
          </p>
        </header>
        <div style={{ margin: "20px 0" }}>
          <img
            src={post.img}
            alt={post.title}
            width={1200}
            height={700}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <section className="max-w-[1300px] margin-auto">
          <p>{post.desc}</p>
          <br />
          <p>{post.content}</p>
        </section>
      </article>



      {/* Section for Related Posts */}
      <section style={{ maxWidth: "1200px", margin: "50px auto" }}>
        <h2 className="text-4xl text-red-600 font-semibold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer ">
              <Link href={`/blog/${relatedPost.id}`}>
              <img
                src={relatedPost.img}
                alt={relatedPost.title}
                style={{ borderRadius: "8px", marginBottom: "15px" }}
                className="object-cover w-full h-[200px]"
              />
              <h3 className="text-xl font-bold mb-2">{relatedPost.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(relatedPost.date).toLocaleDateString()} | {relatedPost.author}
              </p>
              <p className="text-sm text-gray-700">{relatedPost.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default DetailBlog;
