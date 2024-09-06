"use client";

import React from "react";
import Image from "next/image";
import { poppins } from "@/styles/font";
import MapEmbed from "../ui/MapEmbed";
import { motion } from "framer-motion";

// Variants for zoomIn animation
const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const AboutHero: React.FC = () => {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 w-full xl:w-[1200px] h-auto xl:h-[570px] ${poppins.className}`}
    >
      <motion.div
        className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left items-center lg:items-start w-full"
        initial="hidden"
        animate="visible"
        variants={zoomIn} // Applying the zoomIn animation
      >
        <motion.h1
          className="text-[12vw] sm:text-[40px] md:text-[10vw] lg:text-[5vw] font-semibold gradient-text-about"
          variants={zoomIn} // Applying the zoomIn animation
        >
          Hi Cytizen!
        </motion.h1>
        <motion.p
          className="w-10/12 lg:w-6/12 text-[13px] md:text-[21px] sm:text-lg lg:text-[19px] font-light mx-auto lg:mx-0"
          variants={zoomIn} // Applying the zoomIn animation
        >
          Cyber Physical System Laboratory is a lab that focuses its research on
          the fields of Network, Internet of Things, and Software Development.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:pt-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center sm:justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={zoomIn} // Applying the zoomIn animation
          >
            <MapEmbed />
          </motion.div>
          <motion.div
            className="hidden md:block w-full md:w-[330px] mt-4 md:mt-0 lg:w-1/2 lg:ml-40  lg:-mt-72  lg:mr-24 xl:mr-32 "
            initial="hidden"
            animate="visible"
            variants={zoomIn} // Applying the zoomIn animation
          >
            <Image
              src="/LogoAbout.png"
              alt="Cyber Physical System Laboratory Logo"
              width={400}
              height={400}
              priority
              className="md:w-[400px] md:h-[200px] md:ml-14 lg:w-[600px] lg:h-[300px] xl:w-[700px] xl:h-[280px] lg:ml-0 mr-4 "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
