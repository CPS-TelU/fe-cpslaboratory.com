import React from "react";
import Image from "next/image";
import MapEmbed from "../ui/MapEmbed";
import { didactGothic, poppins } from "@/styles/font";

const AboutHero: React.FC = () => {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 w-full xl:w-[1200px] h-auto xl:h-[570px] ${poppins.className}`}
    >
      {/* Left Side - Text and Map */}
      <div className="flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left items-center lg:items-start w-full">
        <h1 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-semibold gradient-text-about">
          Hi Cytizen!
        </h1>
        <p className="w-10/12 lg:w-6/12 text-[13px] md:text-[21px] sm:text-lg lg:text-[19px] font-light mx-auto lg:mx-0">
          Cyber Physical System Laboratory is a lab that focuses its research on
          the fields of Network, Internet of Things, and Software Development.
        </p>
        {/* Flex container for Map and Image */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full md:pt-10">
          <div className="w-full md:w-1/2 flex justify-center sm:justify-center md:justify-start">
            <MapEmbed />
          </div>
          <div className="hidden md:block w-full md:w-[330px] mt-4 md:mt-0 lg:w-1/2 lg:ml-40 lg:-mt-72">
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
