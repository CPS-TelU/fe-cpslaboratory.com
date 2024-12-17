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
        ProBox: Tempat Penyimpanan dengan Keamanan Cerdas Menggunakan Teknologi RFID
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        ProBox bukan hanya sekedar kotak keamanan, tetapi juga kumpulan teknologi canggih yang dirancang untuk memberikan tingkat keamanan tertinggi serta kemudahan penggunaan.
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
          Explore the World of Technology
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Here in CPS Laboratory we explore expand and dive into the unknown world of technology
        </p>
      </div>
    );
  };
  const SkeletonNine = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          BOOSTIFY: Inovasi Absensi yang Membawa Kebahagiaan ke Tempat Kerja
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Combining Machine Learning, Internet of Things and Software Dev. Boostify is one of our recent Research Project
        </p>
      </div>
    );
  };
  const SkeletonTen = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Integrity and Values
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Reflects the Laboratory's dedication to ethical practices and maintaining high standards in every action.
        </p>
      </div>
    );
  };
  const SkeletonTwelve = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Empowering Through Knowledge
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Knowledge fuels progress. We equip people with the skills they need to build, innovate, and make a difference.
        </p>
      </div>
    );
  };
  const SkeletonThirteen = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Empowering Visionaries, Inspiring Leaders
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We foster a culture where ideas thrive, turning vision into reality and creating opportunities for leadership at every level.
        </p>
      </div>
    );
  };const SkeletonFourteen = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Challenges Drive Us, Resilience Defines Us
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Change is our ally, and every obstacle is an opportunity to grow stronger and smarter in everything we do.
        </p>
      </div>
    );
  };const SkeletonElev = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        Together, We Achieve More
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Unity and collaboration are the pillars of our success. Together, we turn ambitious goals into remarkable achievements.
        </p>
      </div>
    );
  };
  const SkeletonFifteen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Continuous Learning
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Technology evolves every day, and so do we. Growth comes from staying curious and embracing lifelong learning.
      </p>
    </div>
  );
};
const SkeletonSixteen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Passion and Purpose
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      What drives us is not just what we do, but why we do it. We are committed to making a difference through purposeful work.
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
    className: "col-span-3 md:col-span-5 sm:col-span-1 lg:col-span-2 xl:col-span-2",
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
    thumbnail:"/probox-image2.jpg",
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
    thumbnail:"/MFT-oplab.JPG",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "col-span-3 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-3", 
    thumbnail:"/boostify.JPG",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-3",
    thumbnail: "/IBE-oplab.JPG",
  },
  {
    id: 11,
    content: <SkeletonElev />,
    className: "col-span-2 lg:col-span-2 md:col-span-5 sm:col-span-1 xl:col-span-2",
    thumbnail:"/audience.JPG",
  },
  {
    id: 12,
    content: <SkeletonTwelve />,
    className: "col-span-3 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-2", 
    thumbnail:"/AWP-oplab.JPG",
  },
  {
    id: 13,
    content: <SkeletonThirteen />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail: "/pal.JPG",
  },
  {
    id: 14,
    content: <SkeletonFourteen />,
    className: "col-span-2 lg:col-span-1 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail:"/AWP2.JPG",
  },
  {
    id: 15,
    content: <SkeletonFifteen />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail: "/IBE2-oplab.JPG",
  },
  {
    id: 16,
    content: <SkeletonSixteen />,
    className: "col-span-2 lg:col-span-1 md:col-span-3 sm:col-span-1 xl:col-span-2",
    thumbnail:"/JIN.JPG",
  },

];