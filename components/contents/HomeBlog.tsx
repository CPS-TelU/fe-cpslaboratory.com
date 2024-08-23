import React from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  desc?: string;
  img: string;
  date?: string;
  author: string;
  href: string;
}

const posts: Post[] = [
  {
    title: "Probox",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.",
    img: "/wallpaper.jpg",
    date: "June 27, 2024",
    author:"CPS LABORATORY",
    href: "javascript:void(0)",
  },
  {
    title: "Pengabdian Masyarakat di SMA Negeri 1 Dayeuhkolot",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.",
    img: "/iot.jpg",
    date: "May 16, 2004",
    author:"CPS LABORATORY",
    href: "javascript:void(0)",
  },
  {
    title: "Magang Asisten Baru Cyber Physical System Laboratory 23/24",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.",
    img: "/softdev.jpg",
    date: "May 16, 2004",
    author:"CPS LABORATORY",
    href: "javascript:void(0)",
  },
  {
    title: "Open Recruitment Assistant Cyber Physical System Laboratory 2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.",
    img: "/network.jpg",
    date: "May 16, 2004",
    author:"CPS LABORATORY",
    href: "javascript:void(0)",
  },
];

const Blog: React.FC = () => {
  return (
    <section className={`py-12 text-center ${poppins.className}`}>
    <h2 className="text-[50px] font-semibold gradient-text mb-8 text-left px-4 sm:px-8 lg:px-16">
      Blog
    </h2>
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16 max-width-[1200px]">
        <div className="col-span-2 rounded-lg  overflow-hidden cursor-pointer">
          <Image
            src={posts[0].img}
            alt={posts[0].title}
            width={800}
            height={500}
            className="object-cover w-full h-[400px] rounded-lg"
          />
          <div className="text-left p-4">
            <span className="text-sm text-black opacity-90 mb-1">{posts[0].date} | {posts[0].author}</span>
            <h3 className="text-[40px] sm:text-[40px] font-semibold text-black mb-2">
              {posts[0].title}
            </h3>
            <p className="text-[18px] sm:text-[20px] text-gray-700">
              {posts[0].desc}
            </p>
          </div>
        </div>

      
          <div className="grid grid-rows-3 gap-8">
            {posts.slice(1).map((post, index) => (
          <div key={index} className="relative group">
            <Image
              src={post.img}
              alt={post.title}
              width={400}
              height={200}
              className="object-cover w-full h-[200px] rounded-lg"
            />
            <div className="text-left absolute inset-0 flex flex-col justify-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="justify-end transform transition-all duration-300 ease-in-out group-hover:translate-y-[-20px]">
                <div className="translate-y-[100px] transform transition-all duration-500 ease-in-out group-hover:translate-y-[-10px]">
                <span className="text-sm text-white opacity-90 mb-1">
                  {post.date} | {post.author}
                </span>
                <h3 className="text-lg font-semibold text-white translate-y-0">
                  {post.title}
                </h3>
                </div>
                <p className="text-sm text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {post.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      

      </div>
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

export { Blog };
