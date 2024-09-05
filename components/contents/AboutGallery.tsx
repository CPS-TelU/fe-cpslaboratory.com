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
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
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
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      CPS TUJUH BELASAN
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Teamworks make a dream work
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonSeven = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonEight = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Startup or Coporate?
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Cung, siapa yang disini bingung mau intern di start up atau corporate?🤔☝🏻

Yuk sini-sini merapat💫 ada bang Reyhan yang membagikan pengalamannya intern di kedua jenis company tersebut loh, Cytizen!🤩

Jadi gimana kalian mau apply intern kemana nih, Cytizen? Bisikin mimin dong🫣

        </p>
      </div>
    );
  };
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-3 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-2", 
    thumbnail:"/gallery1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-2",
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
    className: "col-span-1 lg:col-span-2 md:col-span-3 sm:col-span-1 xl:col-span-2" ,
    thumbnail:"/gallery5.png",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-2 lg:col-span-1 md:col-span-5 sm:col-span-1 xl:col-span-2",
    thumbnail:"/ion.png",
  },

];