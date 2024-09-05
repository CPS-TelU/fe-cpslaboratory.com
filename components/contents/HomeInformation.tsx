"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { poppins } from "@/styles/font";

// Variants for different animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Information = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  });

  return (
    <section className={`py-20 text-center ${poppins.className}`} ref={sectionRef}>
      <motion.h2
        className="text-[7vw] md:text-[5vw] lg:text-[3vw] sm:text-[5vw] font-semibold gradient-text mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        What We Do
      </motion.h2>
      <motion.p
        className="text-[4vw] md:text-[3vw] lg:text-[1.5vw] text-gray-700 mb-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        In Cyber Physical System Laboratory
      </motion.p>
      <motion.p
        className="text-[4vw] md:text-[3vw] lg:text-[1.5vw] text-gray-700 mb-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        We focus on many things such as:
      </motion.p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-3">
        <motion.div
          className="bg-white w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[28vw] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw]">
            <Image
              src="/network.jpg"
              alt="Network"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold gradient-text">Network</h3>
          </div>
        </motion.div>

        <motion.div
          className="bg-white  w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[30vw] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw]">
            <Image
              src="/softdev.jpg"
              alt="Software Development"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2 sm:p-3 ">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold gradient-text">Software Dev</h3>
          </div>
        </motion.div>

        <motion.div
          className="bg-white  w-full sm:w-[30vw] md:w-[28vw] lg:w-[26vw] h-[40vw] sm:h-[22vw] md:h-[30vw] lg:h-[20vw] rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
        >
          <div className="relative w-full sm:w-[30vw] md:w-[28vw] lg:w-[30vw] h-[30vw] sm:h-[24vw] md:h-[22vw] lg:h-[15vw]">
            <Image
              src="/iot.jpg"
              alt="IOT"
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold gradient-text">IOT</h3>
          </div>
        </motion.div>
      </div>

      <Link
        href="/about"
        className="text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw]  bg-red-600 text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );
};

export default Information;
