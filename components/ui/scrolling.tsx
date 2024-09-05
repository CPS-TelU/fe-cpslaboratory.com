"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollingCardsProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function ScrollingCards({
  children,
  direction ,
  speed = "slow",
  pauseOnHover = true,
  className,
}: ScrollingCardsProps) {
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
      for (let i = 0; i < 3; i++) {
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
    if (scrollerRef.current) {
      const scrollerWidth = scrollerRef.current.scrollWidth;
      const containerWidth = containerRef.current?.offsetWidth || 0;

      if (direction === "right") {
        scrollerRef.current.style.transform = `translateX(0)`;
      } else {
        scrollerRef.current.style.transform = `translateX(0)`;
      }

      // Set animation direction using keyframes
      containerRef.current?.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast"
          ? "20s"
          : speed === "normal"
          ? "40s"
          : "300s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 lg:max-w-full  max-w-[300px] overflow-hidden",
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
        style={{
          animationDirection:
            direction === "left" ? "forward" : "reverse",
        }}
      >
        {children}
      </ul>
    </div>
  );
}
