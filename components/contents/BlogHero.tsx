"use client";
import { useState } from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { motion } from "framer-motion";

// Define the fadeInUp animation variants outside the component for better readability and reusability
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BlogHero = () => {

  return (
    <section
      className={`relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1200px] lg:h-[600px] ${poppins.className}`}
      // Apply the animation to the entire section
    >
      <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>

      <Image
        src="/blogh.jpg"
        alt="BlogHero Image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        
      />

      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <p
          className="text-white text-xl sm:text-4xl font-semibold"
           
        >
          Blog
        </p>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2"
          
        >
          <span className="gradient-text">CYBER PHYSICAL SYSTEM LAB</span>
        </h1>
      </div>
    </section>
  );
};

export default BlogHero;
