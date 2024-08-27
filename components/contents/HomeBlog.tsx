"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

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
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(6); // Initial limit of 6 posts

  const NEWS_API_URL = "https://be-cps-laboratory.vercel.app/apiv1/allBlogs";

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
          const fetchedPosts = data.slice(0, limit).map((item: any, index: number) => ({
            id: index.toString(),
            title: item.title || "No Title",
            author: item.author || "Unknown Author",
            desc: item.description || "No Description Available",
            content: item.content || "No Content Available",
            img: item.image_0 || "/default-image.jpg",
            date: item.create_at || "No Date",
            href: item.url || "#",
          }));
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-[50px] font-semibold gradient-text mb-8 text-left px-4 sm:px-8 lg:px-16">
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16 max-width-[1200px]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-2 rounded-lg overflow-hidden cursor-pointer"
        >
          <img
            src={posts[0].img}
            alt={posts[0].title}
            width={800}
            height={500}
            className="object-cover w-full h-[400px] rounded-lg"
          />
          <div className="text-left p-4">
            <span className="text-sm text-black opacity-90 mb-1">
              {posts[0].date} | {posts[0].author}
            </span>
            <h3 className="text-[40px] sm:text-[40px] font-semibold text-black mb-2">
              {posts[0].title}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-gray-700">
              {posts[0]?.desc && posts[0].desc.length > 100
                ? `${posts[0].desc.substring(0, 255)}...`
                : posts[0]?.desc}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={inView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-rows-3 gap-8"
        >
          {posts.slice(1, 4).map((post, index) => (
            <div key={index} className="relative group">
              <img
                src={post.img}
                alt={post.title}
                width={400}
                height={200}
                className="object-cover w-full h-[200px] rounded-lg"
              />
              <div className="text-left absolute inset-0 flex flex-col justify-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="justify-end transform transition-all duration-300 ease-in-out group-hover:translate-y-[-10px]">
                  <div className="translate-y-[60px] transform transition-all duration-500 ease-in-out group-hover:translate-y-[-10px]">
                    <span className="text-xs text-white opacity-90 mb-1">
                      {post.date} | {post.author}
                    </span>
                    <h3 className="text-base font-semibold text-white translate-y-0">
                      {post.title}
                    </h3>
                  </div>
                  {post.desc && (
                    <p className="text-xs text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      {post.desc.length > 100
                        ? `${post.desc.substring(0, 255)}...`
                        : post.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <Link
        href="/blog"
        className="text-xl bg-red-600 text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );
};

export  { Blog };
