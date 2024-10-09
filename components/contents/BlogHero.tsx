"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { motion } from "framer-motion";
import { SkeletonBlogHero } from "@/components/ui/SkeletonCard";



const BlogHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Simulate loading delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  if (isLoading) {
    return (
        <SkeletonBlogHero /> 
    );
  }

  return (
    <section
      className={`relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1000px] lg:h-[400px] xl:w-[1100px] xl:h-[500px] ${poppins.className}`}
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
