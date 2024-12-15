"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { poppins } from "@/styles/font";
 
export function Gallery() {
  return (
    <div  className={`${poppins.className} h-screen py-20 w-full`}>
      <h2 className="gradient-text-about text-[10vw] lg:text-[4vw] md:text-[9vw] sm:text-[40px] font-semibold  text-center px-4 sm:px-8 lg:px-16">
          Our Gallery
        </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}
 
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Research Division
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Explore the cutting-edge innovations and breakthroughs achieved by our Research Division. Witness the passion and dedication driving progress forward.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Open Recruitment
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Join our team and become part of an inspiring journey. Discover exciting opportunities, unlock your potential, and shape the future with us.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      CPS Celebrations
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the vibrant spirit of CPS with our celebratory events, fostering camaraderie, creativity, and shared achievements.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Teamwork Makes the Dream Work
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Collaboration is at the heart of our success. Join hands with like-minded individuals and achieve greatness together.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          A Visionary Path
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Embark on a journey of innovation and discovery with our team. Together, we create a legacy of excellence.
        </p>
      </div>
    );
  };
  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Building Future Technologies
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Dive into the world of advanced technology and innovation as we shape the solutions of tomorrow.
        </p>
      </div>
    );
  };
  const SkeletonSeven = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Cultivating Excellence
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Discover the dedication, passion, and expertise that drive our pursuit of excellence across all projects.
        </p>
      </div>
    );
  };
  const SkeletonEight = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Startup or Corporate?
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Are you debating between joining a startup or a corporate environment? Hear inspiring insights and advice to help you decide your future path.
        </p>
      </div>
    );
  };
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-3 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-3", 
    thumbnail:"/gallery1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-5",
    thumbnail: "/gallery2.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2 lg:col-span-1 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail:"/gallery3.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-3 md:col-span-5 sm:col-span-1 lg:col-span-2 xl:col-span-4",
    thumbnail:"/gallery4.png",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-2 lg:col-span-2 md:col-span-5 sm:col-span-1 xl:col-span-2",
    thumbnail:"/heroimage.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail:"/probox-logo.png",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-4" ,
    thumbnail:"/gallery5.png",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-2 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-2",
    thumbnail:"/ion.png",
  },

];