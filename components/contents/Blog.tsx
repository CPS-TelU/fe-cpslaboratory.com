"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { poppins } from "@/styles/font";

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

    const NEWS_API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-20&sortBy=publishedAt";
    const NEWS_API_KEY = "fb312606d99b4b1f9c1d1a92176546fa"; // Replace with your actual API key

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(NEWS_API_URL, {
                    headers: {
                        Authorization: `Bearer ${NEWS_API_KEY}`,
                    },
                });
                console.log(response.data);

                if (response.data) {
                    const fetchedPosts = response.data.articles.map((article: any, index: number) => {
                        return {
                            id: index.toString(),
                            title: article.title || 'No Title',
                            author: article.author || 'Unknown Author',
                            desc: article.description || 'No Description Available',
                            content: article.content || 'No Content Available',
                            img: article.urlToImage || '/default-image.jpg',
                            date: article.publishedAt || 'No Date',
                            href: article.url || '#',
                        };
                    });
                    setPosts(fetchedPosts);

                    if (fetchedPosts.length === 0) {
                        setError("No blog posts available.");
                    }
                } else {
                    setError("No data found");
                }
            } catch (error) {
                setError("Error fetching posts from NewsAPI");
                console.error('Error fetching posts from NewsAPI:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [NEWS_API_URL, NEWS_API_KEY]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={`py-12 ${poppins.className} `}>
            <div className="w-[1258px] mx-auto px-4 md:px-8 relative">
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((item) => (
                        <li className="w-full mx-auto group sm:max-w-sm" key={item.id}>
                            <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={item.img}
                                        loading="lazy"
                                        alt={item.title}
                                        className=" rounded-lg mx-auto w-[368px] h-[237px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
                                    />
                                </div>
                                <div className="mt-3 space-y-2">
                                    <span className="block text-gray-600 text-sm">
                                        {new Date(item.date).toLocaleDateString()} {item.author && ` || ${item.author}`}
                                    </span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-red-600 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm duration-150 group-hover:text-gray-800">
                                        {item.desc}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export { BlogPosts };
