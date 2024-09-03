import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { poppins } from "@/styles/font";

const Activity = () => {
  const items = [
    {
      image: "/image.png",
      title: "Open Laboratory CPS 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://cyberacademy.cpsrg.org/",
    },
    {
      image: "/image.png",
      title: "Cyber Academy 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://cyberacademy.cpsrg.org/",
    },
    {
      image: "/image.png",
      title: "Cyber Recruitment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://cyberrecruitment.cpsrg.org/",
    },
  ];

  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-3xl font-semibold gradient-text mb-8 px-4 sm:px-8 lg:px-16">
        Activity
      </h2>
      <div className="h-[15rem] sm:h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={items} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default Activity;
