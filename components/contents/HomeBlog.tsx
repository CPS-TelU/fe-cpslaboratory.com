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

  const NEWS_API_URL = "https://be-cps-laboratory-git-main-junaidi-rahmats-projects.vercel.app/api/blogs";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(NEWS_API_URL, {
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
            .sort((a : Post, b : Post) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date
            .slice(0, limit);

          setPosts(fetchedPosts);

          if (fetchedPosts.length === 0) {
            setError("Sorry theres no articles available.");
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
    <section className={`py-0 top-[0px] text-center ${poppins.className}`}>
      <h2 className="text-center lg:text-left md:text-center sm:text-center text-[12vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-semibold text-red-600 mb-8 text-left px-4 sm:px-8 lg:px-32">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-4 sm:px-8 lg:px-32">
        <div className="col-span-2 rounded-lg overflow-hidden cursor-pointer">
          <Link href={posts[0].href} passHref key={posts[0].id}>
            <img
              src={posts[0].img}
              alt={posts[0].title}
              width={800}
              height={500}
              className="object-cover w-full sm:w-full md:w-[100vw] lg:w-[50vw] h-[50vw] sm:h-[40vw] md:h-[30vw] lg:h-[25vw] rounded-lg"
            />
            <div className="text-left p-4 ">
              <span className="text-sm text-black opacity-90 mb-1">
                {new Date(posts[0].date).toLocaleDateString()} | {posts[0].author}
              </span>
              <h3 className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold text-black mb-2">
                {posts[0].title}
              </h3>
              <p className="lg:w-[50vw]  text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-gray-700">
                {posts[0]?.desc && posts[0].desc.length > 100
                  ? `${posts[0].desc.substring(0, 100)}...`
                  : posts[0]?.desc}
              </p>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-3 gap-8 justify-center w-[83vw] sm:w-full md:w-[100vw] lg:w-[32vw]">
          {posts.slice(1, 4).map((post, index) => (
            <Link href={post.href} passHref key={post.id}>
              <div key={index} className="relative group ">
                <img
                  src={post.img}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-[200px] rounded-lg"
                />
                <div className="text-left absolute inset-0 flex flex-col justify-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="justify-end transform transition-all duration-300 ease-in-out group-hover:translate-y-[-10px]">
                    <div className="translate-y-[30px] transform transition-all duration-500 ease-in-out group-hover:translate-y-[-10px]">
                      <span className="text-m text-white mb-1">
                        {new Date(post.date).toLocaleDateString()} | {post.author}
                      </span>
                      <h3 className="text-base font-semibold text-white translate-y-0">
                        {post.title}
                      </h3>
                    </div>
                    {post.desc && (
                      <p className="text-xs text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        {post.desc.length > 100
                          ? `${post.desc.substring(0, 50)}...`
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
        className="text-xl bg-red-600 text-white py-2 px-6 rounded-2xl mt-4 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );  
};

export { Blog };
