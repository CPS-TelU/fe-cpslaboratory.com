"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
}

const DetailBlog: React.FC = () => {
    const [post, setPost] = useState<Post | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const router = useRouter();
    const { id } = router.query;

    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;

            try {
                const response = await axios.get(`${STRAPI_URL}/api/blogs/${id}?populate=relatedPosts,image`, {
                    headers: {
                        Authorization: `Bearer ${STRAPI_TOKEN}`,
                    },
                });

                const postData = response.data.data.attributes;
                setPost({
                    id: response.data.data.id,
                    title: postData.title,
                    desc: postData.description,
                    img: `${STRAPI_URL}${postData.image.url}`,
                    date: postData.publishedAt,
                    content: postData.content,
                });

                const related = postData.relatedPosts.data.map((relatedPost: any) => ({
                    id: relatedPost.id,
                    title: relatedPost.attributes.title,
                    desc: relatedPost.attributes.description,
                    img: `${STRAPI_URL}${relatedPost.attributes.image.url}`,
                    date: relatedPost.attributes.publishedAt,
                }));

                setRelatedPosts(related);

            } catch (error) {
                console.error('Error fetching post from Strapi:', error);
            }
        };

        fetchPost();
    }, [id, STRAPI_URL, STRAPI_TOKEN]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div className={poppins.className} style={{ marginTop: '50px', color: '#333' }}>
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <header>
                    <h1 className='text-3xl font-bold'>{post.title}</h1>
                    <p>{new Date(post.date).toLocaleDateString()} | CPS Research Group</p>
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

export default DetailBlog;
