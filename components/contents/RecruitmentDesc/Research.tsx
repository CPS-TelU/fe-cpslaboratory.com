"use client";

import React, { useState } from "react";
import { poppins } from "@/styles/font";
import Link from "next/link";
import RecruitmentFormResearch from "../RecruitmentFormResearch";
import { Button } from "@/components/ui/button";

const Research = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className={`${poppins.className} flex flex-col items-center py-4`}>
      {/* Container Utama */}
      <div className="w-full p-8 max-w-[1200px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              <span className="gradient-text-2 to-[#BA2025] text-transparent bg-clip-text">
                Research Division
              </span>{" "}
            </h1>
          </div>

          {/* Tombol */}
          <div className="flex mt-2 mb-6 mx-2 space-x-2 ">
            <Button 
              onClick={openForm}
              className="relative rounded-full px-5 py-2.5 overflow-hidden group bg-[#BA2025] relative hover:bg-gradient-to-r hover:from-[#ba2025] hover:to-red-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-600 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Apply Now <span className="ml-1">&rarr;</span></span>
            </Button>
            <Link href="/recruitment" passHref>
              <Button className="px-6 py-2 bg-white text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300">
                Back
              </Button>
            </Link>
          </div>
        </div>

        {/* Garis Bawah */}
        <div className="w-full p-2 mb-8 border-b border-gray-300"></div>

        {/* Grid Layout: Job Description, Requirements, Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl border border-gray-300">
          {/* Kolom Kiri */}
          <div className="p-4 space-y-8 ">
            {/* Job Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
                Job Description
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The Research Group Assistant will collaborate in organizing and
                <span className="gradient-text-2 text-transparent bg-clip-text"> conducting impactful research activities.</span>{" "}
                This role includes
                assisting in preparing research proposals, conducting
                experiments, analyzing data, and ensuring that all research
                objectives are achieved efficiently. You will work closely with
                mentors and peers to foster a collaborative and innovative
                research environment.
              </p>
            </div>

            {/* Benefit */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
                Benefits
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                By joining the Research Group, you will enhance your analytical
                and problem-solving skills, gain hands-on experience in advanced
                research techniques, and have the opportunity to collaborate
                with leading researchers. You will also strengthen your
                professional network and develop a deeper understanding of your
                field of study, giving you a competitive edge in your academic
                and professional journey.
              </p>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="p-4">
            {/* Requirements */}
            <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">Requirements</h3>
            <ul className="list-decimal list-inside text-gray-600 mt-4 space-y-1 leading-relaxed">
            <li><span className="font-semibold text-[#ba2025]">Essay</span> - Choose one of the following topics:
                <ul className="mt-2 ml-10 list-disc">
                  <li>The Internet of Things and Its Role in Transforming Modern Industries.</li>
                  <li>Advancing Artificial Intelligence Through Machine Learning Applications.</li>
                  <li>inovations in Web Development for Enhanced User Experiences.</li>
                </ul>
              </li>
              <li><span className="font-semibold text-[#ba2025]">CV ATS</span> - ATS Curriculum Vitae (CV) reflecting your educational background, experience, and skills.</li>
              <li><span className="font-semibold text-[#ba2025]">Full Body Photo</span> - A recent full body photo that clearly shows your appearance.</li>
              <li><span className="font-semibold text-[#ba2025]">KHS</span> - The latest semester transcript should include detailed course grades and formal proof of the student's academic performance.</li>
              <li><span className="font-semibold text-[#ba2025]">Commitment Letter</span> - Your commitment to participating in Cyber Recruitment.</li>
              <li><span className="font-semibold text-[#ba2025]">Student of Telkom University</span> - Only for 2022, 2023, 2024.</li>
            </ul>
          </div>
        </div>
      </div>

      {isFormOpen && <RecruitmentFormResearch onClose={closeForm} />}
    </div>
  );
};

export default Research;
