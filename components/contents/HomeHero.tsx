"use client";

import { useState } from "react";
import { poppins } from "@/styles/font";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.section
      className={`relative w-full h-[280px] sm:h-[500px] md:h-[600px] lg:h-[750px] lg:w-[1300px] ${poppins.className}`}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>

      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
      )}

      <motion.div
        className="relative w-full h-full"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Image
          src="/heroimage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 z-20 flex flex-col items-start justify-start p-4 sm:p-6 md:p-8 lg:p-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.p
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
          variants={fadeInUp}
        >
          Cyber Physical System Laboratory
        </motion.p>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-2"
          variants={fadeInUp}
        >
          <span className="gradient-text">CONNECT THE NODE,</span> CONNECT THE
          WORLD
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
