import React from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";

interface Post {
  title: string;
  desc?: string;
  img: string;
  date?: string;
  href: string;
}

const posts: Post[] = [
  {
    title: "Probox",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum mauris quis massa eleifend, at dignissim leo accumsan. Integer varius mi vel mauris tincidunt sagittis. Donec ac elit non sapien dictum faucibus.",
    img: "/probox-image.jpg",
    href: "javascript:void(0)",
  },
  {
    title: "Pengabdian Masyarakat di SMA Negeri 1 Dayeuhkolot",
    img: "/iot.jpg",
    href: "javascript:void(0)",
  },
  {
    title: "Magang Asisten Baru Cyber Physical System Laboratory 23/24",
    img: "/softdev.jpg",
    href: "javascript:void(0)",
  },
  {
    title: "Open Recruitment Assistant Cyber Physical System Laboratory 2022",
    img: "/network.jpg",
    href: "javascript:void(0)",
  },
];

const Blog: React.FC = () => {
  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-[50px] font-semibold gradient-text mb-8 text-left px-4 sm:px-8 lg:px-16">
        Blog
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4 sm:px-8 lg:px-16">
        <div className="col-span-3 md:col-span-3 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col sm:flex-row items-center sm:items-start cursor-pointer">
          <Image
            src={posts[0].img}
            alt={posts[0].title}
            width={600}
            height={450}
            className="object-cover w-[600px] h-[400px] rounded-lg"
          />
          <div className="sm:ml-6 text-left mt-4 sm:mt-0">
            <h3 className="text-[50px] font-semibold gradient-text mb-2">
              {posts[0].title}
            </h3>
            <p className="text-[25px] text-gray-700">{posts[0].desc}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 cursor-pointer">
  {posts.slice(1).map((post, index) => (
    <div key={index} className="relative group"> {/* Add relative positioning to the parent div */}
      <Image
        src={post.img}
        alt={post.title}
        width={400}
        height={300}
        className="object-cover w-full h-[300px] rounded-lg"
      />
      <div className="absolute inset-0 flex items-end p-4 rounded-lg bg-black bg-opacity-50 opacity-70 group-hover:opacity-100 transition-opacity">
        {/* Title overlay with absolute positioning */}
        <h3 className="text-lg font-semibold text-white transform transition-all duration-300 ease-in-out group-hover:translate-y-[-10px]">
          {post.title}
        </h3>
      </div>
    </div>
  ))}
</div>



      <Link href="/blog" className="text-xl text-red-600 underline mt-8 block">
        More
      </Link>
    </section>
  );
};

export { Blog };
