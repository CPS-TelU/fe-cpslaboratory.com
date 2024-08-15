import React from "react";
import Image from "next/image";
import MapEmbed from "../ui/MapEmbed";
import { didactGothic, poppins } from "@/styles/font";

const AboutHero: React.FC = () => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 w-full xl:w-[1200px] h-auto xl:h-[570px] ${poppins.className}`}
    >
      {/* Left Side - Text and Map */}
      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-6 items-center md:items-start w-full">
        <h1 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-semibold gradient-text-about text-center md:text-left">
          Hi Cytizen!
        </h1>
        <p className="w-10/12 md:w-[340px] lg:w-6/12 text-[13px] sm:text-[15px] md:text-[15px] lg:text-[19px] md:-ml-1 lg:ml-0 font-light mx-auto lg:mx-0 text-center md:text-left">
          Cyber Physical System Laboratory is a lab that focuses its research on
          the fields of Network, Internet of Things, and Software Development.
        </p>
        {/* Flex container for Map and Image */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full md:pt-10">
          <div className="w-full md:w-1/2 flex justify-center md:-mt-4 lg:mt-0 sm:-ml-6 md:ml-0 sm:justify-center md:justify-start">
            <MapEmbed />
          </div>
          <div className="hidden sm:block w-[480px] md:w-6/12 mt-4 md:-mt-52 lg:w-6/12 lg:ml-40 lg:-mt-72">
            <Image
              src="/LogoAbout.png"
              alt="Cyber Physical System Laboratory Logo"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
