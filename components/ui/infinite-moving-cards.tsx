"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone the content multiple times to ensure infinite scrolling effect
      for (let i = 0; i < 3; i++) {  // Adjust the number based on how smooth you want the loop
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 2xl:max-w-[1600px] xl:max-w-[1500px] lg:max-w-[1000px] md:max-w-[800px] sm:max-w-[650px] max-w-[400px] overflow-hidden",

        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] md:w-[450px] lg:w-[600px] h-[200px] md:h-[250px] lg:h-[300px]  max-w-full relative rounded-2xl overflow-hidden flex-shrink-0 shadow-lg"
            key={idx}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 sm:p-6 flex flex-col justify-end">
              <h3 className="text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white mb-2 text-left max-w-[190px] sm:max-w-[190px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] break-words whitespace-normal">
                {item.title}
              </h3>
              <div className="flex justify-between items-start">
                <p className="text-xs sm:text-sm md:text-base text-white mb-4 text-justify max-w-[60%] sm:max-w-[70%]">
                  {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm rounded-full hover:bg-red-700 transition inline-block"
                >
                  Find More
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
