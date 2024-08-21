"use client";

import React, { useEffect, useState } from 'react';
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

    const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API;

    useEffect(() => {
        if (!STRAPI_API_URL) {
            setError("STRAPI API URL is not defined");
            setLoading(false);
            return;
        }

        const fetchPosts = async () => {
            try {
                const response = await fetch(STRAPI_API_URL);
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const data = await response.json();
                console.log(data);
    
                if (data.data) {
                    const fetchedPosts = data.data.map((item: any) => {
                        const { id, attributes } = item;
                        return {
                            id: id.toString(),
                            title: attributes.title || 'No Title',
                            author: attributes.author || 'Unknown Author',
                            desc: attributes.description || 'No Description Available',
                            content: attributes.Content.map((contentItem: any) => contentItem.children.map((child: any) => child.text).join('')).join('\n') || 'No Content Available',
                            img: attributes.image?.url ,
                            date: attributes.publishedAt || 'No Date',
                            href: attributes.url || '#',
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
                setError("Error fetching posts from API");
                console.error('Error fetching posts from API:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPosts();
    }, [STRAPI_API_URL]);
    
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={`py-12 ${poppins.className}`}>
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
                                        className="rounded-lg mx-auto w-[368px] h-[237px] transition-transform duration-300 ease-in-out group-hover:scale-110"
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
