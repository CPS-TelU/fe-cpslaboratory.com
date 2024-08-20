"use client";

import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { didactGothic, poppins } from "@/styles/font";

interface Post {
    id: number;
    title: string;
    desc: string;
    img: string;
    date: string;
    content: string;
    author: string;
}

interface DetailBlogProps {
    post: Post | null;
    relatedPosts: Post[];
}

const DetailBlog: React.FC<DetailBlogProps> = ({ post, relatedPosts }) => {

    if (!post) {
        return <p>Post not found.</p>; // Render a message if the post is not found
    }

    return (
        <div className={poppins.className} style={{ marginTop: '50px', color: '#333' }}>
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <header>
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <p>{new Date(post.date).toLocaleDateString()} | {post.author}</p>
                </header>

                <div style={{ margin: '20px 0' }}>
                    <Image 
                        src={post.img} 
                        alt={post.title}
                        width={800}
                        height={450}
                        style={{ borderRadius: '8px' }}
                    />
                </div>

                <section>
                    <p>{post.desc}</p>
                    <p>{post.content}</p>
                </section>
            </article>

            <section style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
                <div className="gradient-text text-3xl font-semibold mt-[10px]">Related Posts</div>
                <div style={{ display: 'flex', gap: '50px', marginTop: '20px' }}>
                    {relatedPosts.map((relatedPost) => (
                        <Link href={`/posts/${relatedPost.id}`} key={relatedPost.id}>
                            <div style={{ flex: 1 }}>
                                <Image
                                    src={relatedPost.img}
                                    alt={relatedPost.title}
                                    width={368}
                                    height={405}
                                    style={{ borderRadius: '8px' }}
                                    className="w-full h-auto object-cover"
                                />
                                <span className="block text-gray-600 text-sm mt-4">{new Date(relatedPost.date).toLocaleDateString()}</span>
                                <h1 className="mt-2 text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">{relatedPost.title}</h1>
                                <p className="mt-2 text-[14px]">{relatedPost.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    try {
        const response = await axios.get(`${STRAPI_URL}/api/blogs/${id}?populate=relatedPosts,thumbnail`, {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
        });

        const postData = response.data.data.attributes;

        const post: Post = {
            id: response.data.data.id,
            title: postData.title || 'No Title',
            desc: postData.description || 'No Description Available',
            img: postData.thumbnail?.data?.attributes?.url ? `${STRAPI_URL}${postData.thumbnail.data.attributes.url}` : '/default-image.jpg',
            date: postData.time_stamp || 'No Date',
            content: postData.content || 'No Content Available',
            author: postData.author || 'unknown author'
        };

        const relatedPosts = postData.relatedPosts?.data.map((relatedPost: any) => ({
            id: relatedPost.id,
            title: relatedPost.attributes.title || 'No Title',
            desc: relatedPost.attributes.description || 'No Description Available',
            img: relatedPost.attributes.thumbnail?.data?.attributes?.url ? `${STRAPI_URL}${relatedPost.attributes.thumbnail.data.attributes.url}` : '/default-image.jpg',
            date: relatedPost.attributes.time_stamp || 'No Date',
        })) || [];

        return {
            props: {
                post,
                relatedPosts,
            },
        };
    } catch (error) {
        console.error('Error fetching post from Strapi:', error);

        return {
            props: {
                post: null,
                relatedPosts: [],
            },
        };
    }
}

export default DetailBlog;
