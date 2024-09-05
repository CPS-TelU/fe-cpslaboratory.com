"use client";

import { useState, useEffect } from "react";
import { didactGothic, poppins } from "@/styles/font";
import Image from "next/image";
import { SkeletonHomeHero } from "@/components/ui/SkeletonCard"; // import SkeletonHomeHero


const Hero = () => {
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
        <SkeletonHomeHero /> 
    );
  }

 
  return (
    <section
      className={`relative w-[385px] h-[200px] sm:h-[400px] md:w-[700px] lg:w-[1000px] xl:h-[500px] md:h-[350px] sm:w-[610px] xl:w-[1100px] lg:h-[500px] ${poppins.className}`}
    >
      <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>

      <div className="relative w-full h-full">
        <Image
          src="/heroimage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          onLoadingComplete={() => setIsLoading(false)}
          
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <p className="text-white text-[2vw] sm:text-[18px] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-medium">
          Cyber Physical System Laboratory
        </p>
        <h1 className="relative text-[3vw] sm:text-[23px] md:text-[3vw] lg:text-[3vw] xl:text-[2vw] font-semibold text-white mt-2">
          <span className="gradient-text">CONNECT THE NODE,</span> CONNECT THE
          WORLD
        </h1>
      </div>
    </section>
  );
};

export default Hero;
