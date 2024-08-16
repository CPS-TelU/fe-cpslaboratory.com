"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Post {
    id: number;
    title: string;
    desc: string;
    img: string;
    date: string;
    href: string;
}

const BlogPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${STRAPI_URL}/api/blogs`, {  // Updated endpoint
                    headers: {
                        Authorization: `Bearer ${STRAPI_TOKEN}`,
                    },
                });
                const fetchedPosts = response.data.data.map((post: any) => ({
                    id: post.id,
                    title: post.attributes.title,
                    desc: post.attributes.description,
                    img: `${STRAPI_URL}${post.attributes.image.url}`,
                    date: post.attributes.publishedAt,
                    href: `/posts/${post.id}`, // Linking to the detail page using post id
                }));
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching posts from Strapi:', error);
            }
        };

        fetchPosts();
    }, [STRAPI_URL, STRAPI_TOKEN]);

    return (
        <section className="py-32">
            <div className="w-[1258px] mx-auto px-4 md:px-8">
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((item) => (
                        <li className="w-full mx-auto group sm:max-w-sm" key={item.id}>
                            <Link href={item.href}>
                                <img src={item.img} loading="lazy" alt={item.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-indigo-600 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
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
