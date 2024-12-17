'use client';

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { poppins } from "@/styles/font";
import { Skeleton } from "@/components/ui/skeleton"; 
import { SkeletonActivity } from "../ui/SkeletonCard";

interface Item {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Activity = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const activityItems = [
    {
      image: "/Oplab.jpg",
      title: "Open Laboratory CPS 2025",
      description: "Ini kesempatan kalian untuk mengenal lebih dalam melalui acara OPEN LABORATORY CYBER PHYSICAL SYSTEM 2024!",
      link: "https://bit.ly/OpenLabCPS2024",
    },
    {
      image: "/cyber-academy.jpg",
      title: "Cyber Academy 2025",
      description: "Berminat untuk mempelajari lebih dalam tentang LINUX, IOT & WEB DEV❓ Yuk kita belajar bareng di CYBER ACADEMY!",
      link: "https://cyberacademy.cpsrg.org/",
    },
    {
      image: "/ComingSoon_Cyber Recruitment_SG.jpg",
      title: "Cyber Recruitment",
      description: " OPEN RECRUITMENT ASSISTANT OF CYBER PHYSICAL SYSTEM. Let’s join our journey for anyone who wants to give their best! ",
      link: "https://cyberrecruitment.cpsrg.org/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setItems(activityItems);
      setLoading(false);
    }, 500); // Simulasi delay 500ms sebelum loading selesai
  }, []);

  if (loading) {
    return (
     <SkeletonActivity/>
    );
  }

  return (
    <section className={`py-12 text-center ${poppins.className}`}>
      <h2 className="text-[9vw] xl:text-[50px] lg:text-[4vw] md:text-[9vw] sm:text-[40px] font-semibold gradient-text mb-2 px-4 sm:px-8 lg:px-16">
        Activity
      </h2>
      <div className="h-[15rem] sm:h-[20rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={items} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default Activity;
