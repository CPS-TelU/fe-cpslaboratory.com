"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { SkeletonCardHome } from "../ui/SkeletonCard";

interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  date: string;
  href: string;
  content: string;
  author: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(6); // Initial limit of 6 posts

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const ALLBLOGS_API_URL = `${API_BASE_URL}`;

  useEffect(() => {
    const fetchPosts = async () => {
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

        if (data) {
          const fetchedPosts = data
            .map((item: any, index: number) => ({
              id: index.toString(),
              title: item.title || "No Title",
              author: item.author || "Unknown Author",
              desc: item.description || "No Description Available",
              content: item.content || "No Content Available",
              img: item.image_0 || "/default-image.jpg",
              date: item.create_at || "No Date",
              href: `/blog/${item.id}`,
            }))
            .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date
            .slice(0, limit);

          setPosts(fetchedPosts);

          if (fetchedPosts.length === 0) {
            setError("No news articles available.");
          }
        } else {
          setError("No data found");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(`Error fetching posts from API: ${err.message}`);
        } else {
          setError("An unknown error occurred.");
        }
        console.error("Error fetching posts from API:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  if (loading) {
    return <SkeletonCardHome />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-3xl sm:text-4xl font-semibold gradient-text mb-8 text-left px-4 sm:px-8 lg:px-16">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16">
        <div className="col-span-2 rounded-lg overflow-hidden cursor-pointer">
          <Link href={posts[0].href} passHref>
            <img
              src={posts[0].img}
              alt={posts[0].title}
              width={800}
              height={500}
              className="object-cover w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg"
            />
            <div className="text-left p-4">
              <span className="text-sm text-black opacity-90 mb-1">
                {new Date(posts[0].date).toLocaleDateString()} | {posts[0].author}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-2">
                {posts[0].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                {posts[0]?.desc && posts[0].desc.length > 255
                  ? `${posts[0].desc.substring(0, 255)}...`
                  : posts[0]?.desc}
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-3 gap-4 md:gap-6 lg:gap-8">
          {posts.slice(1, 4).map((post, index) => (
            <Link href={post.href} passHref key={index}>
              <div className="relative group">
                <img
                  src={post.img}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-[150px] sm:h-[175px] md:h-[200px] rounded-lg"
                />
                <div className="text-left absolute inset-0 flex flex-col justify-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="transform transition-all duration-300 ease-in-out group-hover:translate-y-[-10px]">
                    <span className="text-xs sm:text-sm text-white mb-1">
                      {new Date(post.date).toLocaleDateString()} | {post.author}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {post.title}
                    </h3>
                    {post.desc && (
                      <p className="hidden sm:block text-xs text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        {post.desc.length > 100
                          ? `${post.desc.substring(0, 100)}...`
                          : post.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/blog"
        className="text-lg sm:text-xl bg-red-600 text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );
};

export { Blog };
