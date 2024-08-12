"use client";
import { useState } from "react";
import { didactGothic, poppins } from "@/styles/font";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={`relative w-[350px] h-[200px] sm:h-[500px] md:w-[700px] md:h-[350px] lg:w-[1200px] lg:h-[570px] ${poppins.className}`}>
      <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>

      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
      )}

      <Image
        src="/fotocps2122.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        onLoadingComplete={() => setIsLoading(false)}
      />

      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-6 sm:p-8 lg:p-12">
        <p className="text-white text-xl sm:text-2xl font-medium">
          Cyber Physical System Laboratory
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2">
          <span className="gradient-text">CONNECT THE NODE,</span> CONNECT THE WORLD
        </h1>
      </div>
    </section>
  );
};

export default Hero;
