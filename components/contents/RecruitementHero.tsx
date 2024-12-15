import React from "react";
import Image from "next/image";
import { dmSans, poppins } from "@/styles/font";

export default function RecruitmentHero() {
  return (
    <section className="flex items-center justify-center py-8 px-4 ">
      <div className=" mx-auto text-center">
        <div className="relative w-full h-full items-center">
          <img
            src="/dummy-hero.jpg"
            alt="Recruitment Hero"
            className="rounded-lg lg:min-w-[1200px] lg:max-h-[330px] object-cover"
          />
        </div>
        <h1
          className={`mt-6 text-4xl font-extrabold gradient-text  ${poppins.className}`}
        >
          Cyber Recruitment
        </h1>
        <p
          className={`mt-4 text-lg font-light text-gray-700 max-w-4xl mx-auto ${poppins.className}`}
        >
          Ready to shape the future of technology? Join the Cyber Physical
          System Lab and dive into cutting-edge innovations in Networks, IoT,
          and Software Development. Collaborate on impactful projects, expand
          your skills, and be part of a visionary team. Don&apos;t miss this
          opportunity!!
        </p>

        <div className="mt-6 border-b-[3px] text-black rounded"></div>
      </div>
    </section>
  );
}
