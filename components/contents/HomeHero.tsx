"use client";
import { useState } from "react";
import { didactGothic, poppins } from "@/styles/font";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      className={`relative w-[340px] h-[250px] sm:w-[600px] sm:h-[365px] md:w-[700px] md:h-[350px] lg:w-[1000px] xl:w-[1180px] lg:h-[570px] ${poppins.className}`}
    >
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

      <div className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-4 sm:p-8 lg:p-12">
        <p className="text-white text-[9px] sm:text-[15px] md:text-[18px] lg:text-[25px] xl:text-[30px] font-medium">
          Cyber Physical System Laboratory
        </p>
        <h1 className="text-[13px] sm:text-2xl md:text-[29px] lg:text-[40px] xl:text-5xl font-semibold text-white mt-2">
          <span className="gradient-text">CONNECT THE NODE,</span> CONNECT THE
          WORLD
        </h1>
      </div>
    </section>
  );
};

export default Hero;
