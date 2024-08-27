"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { poppins } from "@/styles/font";
import { motion } from "framer-motion"

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

const BlogPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [limit, setLimit] = useState<number>(6); // Initial limit of 6 posts

    const NEWS_API_URL = "https://be-cps-laboratory.vercel.app/apiv1/allBlogs";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(NEWS_API_URL, {
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = response.data;
                console.log(data);
                

                if (data) {
                    const fetchedPosts = data.slice(0, limit).map((item: any, index: number) => ({
                        id: index.toString(),
                        title: item.title || 'No Title',
                        author: item.author ||  'Unknown Author',
                        desc: item.description || 'No Description Available',
                        content: item.content || 'No Content Available',
                        img: item.image_0 || '/default-image.jpg',
                        date: item.create_at || 'No Date',
                        href: item.url || '#',
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
                console.error('Error fetching posts from API:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [limit]);

    const loadMorePosts = () => {
        setLimit((prevLimit) => prevLimit + 6);
    };

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={`py-12 ${poppins.className}`}>
            <div className="w-full px-4 sm:px-8 lg:px-16 mx-auto max-w-[1330px]">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((item) => (
                        <li className="relative group cursor-pointer" key={item.id}>
                            <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                <div className="relative">
                                    <img
                                        src={item.img}
                                        loading="lazy"
                                        alt={item.title}
                                        className="object-cover w-full h-[300px] rounded-lg"
                                        onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <div className="justify-end transform transition-all duration-300 ease-in-out group-hover:translate-y-[-20px]">
                                            <div className="absolute bottom-0 left-0 transform transition-all duration-600 ease-in-out group-hover:translate-y-[-10px] group-hover:relative pt-2">
                                                <span className="text-sm text-white opacity-90 mb-1 block">
                                                    {new Date(item.date).toLocaleDateString()} {item.author && ` || ${item.author}`}
                                                </span>
                                                <h3 className="text-lg font-semibold text-white translate-y-0">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                {item.desc.length > 100 ? `${item.desc.substring(0, 255)}...` : item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                {posts.length > 0 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMorePosts}
                            className="mt-8 text-xl bg-red-600 text-white py-2 px-6 rounded-2xl hover:bg-red-700 transition-colors duration-300"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export { BlogPosts };
