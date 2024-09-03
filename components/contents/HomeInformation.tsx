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
    <section className={`py-12 text-center ${poppins.className}`} ref={sectionRef}>
      <motion.h2
        className="text-4xl sm:text-5xl font-semibold gradient-text mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp} // Use fadeInUp for heading
      >
        What We Do
      </motion.h2>
      <motion.p
        className="text-lg sm:text-2xl text-gray-700 mb-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp} // Use fadeInUp for subheading
      >
        In Cyber Physical System Laboratory
      </motion.p>
      <motion.p
        className="text-lg sm:text-2xl text-gray-700 mb-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp} // Use fadeInUp for subheading
      >
        we focus on many things such as:
      </motion.p>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8">
        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft} // Use fadeInLeft for Network
        >
          <Image
            src="/network.jpg"
            alt="Network"
            width={400}
            height={300}
            className="object-cover w-full h-40 sm:h-48"
          />
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-semibold gradient-text">Network</h3>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp} // Use fadeInUp for Software Dev
        >
          <Image
            src="/softdev.jpg"
            alt="Software Development"
            width={400}
            height={300}
            className="object-cover w-full h-40 sm:h-48"
          />
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-semibold gradient-text">Software Dev</h3>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight} // Use fadeInRight for IOT
        >
          <Image
            src="/iot.jpg"
            alt="IOT"
            width={400}
            height={300}
            className="object-cover w-full h-40 sm:h-48"
          />
          <div className="p-4">
            <h3 className="text-xl sm:text-2xl font-semibold gradient-text">IOT</h3>
          </div>
        </motion.div>
      </div>

      <Link
        href="/about"
        className="text-lg sm:text-xl bg-red-600 text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-700 transition-colors duration-300"
      >
        More
      </Link>
    </section>
  );
};

export default Information;
