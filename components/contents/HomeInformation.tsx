'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from "@/styles/font";
import { SkeletonHomeInformation } from "@/components/ui/SkeletonCard"; // Import a skeleton component or create one if you don't have it

const Information = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return (
      <section
        className={`py-20 text-center ${poppins.className}`}
        ref={sectionRef}
      >
        <SkeletonHomeInformation />
      </section>
    );
  }
  return (
    <section className={`py-20 text-center ${poppins.className}`} ref={sectionRef}>
      <h2
        className="text-[7vw] md:text-[5vw] lg:text-[40px] xl:text-[50px] sm:text-[5vw] font-semibold gradient-text mb-4"
        
      >
        What We Do
      </h2>
      <p
        className="text-[4vw] md:text-[3vw] lg:text-[22px] xl:text-[25px] text-gray-700 mb-2"
      >
        In Cyber Physical System Laboratory
      </p>
      <p
        className="text-[4vw] md:text-[3vw] lg:text-[22px] xl:text-[25px] text-gray-700 mb-10"
      >
        We focus on many things such as:
      </p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-3">
        <div
          className="bg-white w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] xl:w-[300px] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] xl:h-[15vw] rounded-lg shadow-lg overflow-hidden"
        
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[28vw] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw] xl:h-[10vw]">
            <Image
              src="/network.jpg"
              alt="Network"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[40px] font-semibold gradient-text">Network</h3>
          </div>
        </div>

        <div
          className="bg-white  w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] xl:w-[300px] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] xl:h-[15vw] rounded-lg shadow-lg overflow-hidden"
         
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[30vw] xl:w-[300px] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw] xl:h-[10vw]">
            <Image
              src="/softdev.jpg"
              alt="Software Development"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2 sm:p-3 ">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[35px] font-semibold gradient-text">Software Dev</h3>
          </div>
        </div>

        <div
          className="bg-white  w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] xl:w-[300px] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] xl:h-[15vw] rounded-lg shadow-lg overflow-hidden"
          
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[30vw] xl:w-[300px] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw] xl:h-[10vw]">
            <Image
              src="/iot.jpg"
              alt="IOT"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[40px] font-semibold gradient-text">IoT</h3>
          </div>
        </div>

        <div
          className="bg-white  w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] xl:w-[300px] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] xl:h-[15vw] rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[30vw] xl:w-[300px] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw] xl:h-[10vw]">
            <Image
              src="/machine-learning.jpg"
              alt="ML"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2 pt-3">
            <h3 className="text-center items-center text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[30px] font-semibold gradient-text">Machine Learning</h3>
          </div>
        </div>
      </div>

      <Link
        href="/about"
        className="text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw] xl:text-[1vw]  bg-red-600 text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );
};

export default Information;
