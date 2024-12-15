"use client";

import React, { useState } from "react";
import { poppins } from "@/styles/font";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RecruitmentFormPrac from "../RecruitmentFormPrac";

const Practicum = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className={`${poppins.className} flex flex-col items-center py-4 px-2 md:px-4 lg:px-6`}>
      {/* Container Utama */}
      <div className="w-full p-4 sm:p-6 md:p-8 max-w-[1200px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              <span className="gradient-text-2 text-transparent bg-clip-text">
                Practicum Division
              </span>
            </h1>
          </div>

          {/* Tombol */}
          <div className="flex flex-wrap mt-4 sm:mt-0 mb-6 space-x-2">
            <Button
              onClick={openForm}
              className="relative rounded-full px-4 py-2 md:px-5 md:py-2.5 bg-[#BA2025] text-white hover:bg-red-700 transition-all duration-300"
            >
              Apply Now <span className="ml-1">&rarr;</span>
            </Button>
            <Link href="/recruitment" passHref>
              <Button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300">
                Back
              </Button>
            </Link>
          </div>
        </div>

        {/* Garis Bawah */}
        <div className="w-full mb-8 border-b border-gray-300"></div>

        {/* Grid Layout: Job Description, Requirements, Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-xl border border-gray-300">
          {/* Kolom Kiri */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Job Description */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
                Job Description
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The Practicum Division Assistant is responsible for organizing
                and managing hands-on learning experiences in the laboratory.
                This role includes assisting in preparing materials, guiding
                students during practical sessions, ensuring proper use of
                equipment, and maintaining a safe and productive learning
                environment.
              </p>
            </div>

            {/* Benefit */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
                Benefit
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Becoming a Practicum Assistant provides hands-on experience,
                enhances your communication and leadership skills, and boosts
                your resume. Additionally, you will receive financial
                compensation for your teaching efforts, making it a rewarding
                opportunity both professionally and monetarily.
              </p>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="p-4 sm:p-6">
            {/* Requirements */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
              Requirements
            </h3>
            <ul className="list-decimal list-inside text-gray-600 mt-4 space-y-2 text-sm md:text-base leading-relaxed">
              <li>
                <span className="font-semibold text-[#ba2025]">Essay</span> -
                Choose one of the following topics and ensure it is 2 pages long :
                <ul className="mt-2 ml-6 list-disc space-y-1">
                  <li>5G Components and Their Integration with IMS.</li>
                  <li>Exploring Voice over Internet Protocol (VoIP).</li>
                  <li>Queueing Systems in Modern Networks.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">CV ATS</span> -
                Reflecting your educational background, experience, and skills.
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  Formal Photo 4x6
                </span>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">KHS</span> - The
                latest semester transcript.
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  Commitment Letter
                </span>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  S1 Telecommunication Engineering
                </span>{" "}
                - Batch 2022 and 2023.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {isFormOpen && <RecruitmentFormPrac onClose={closeForm} />}
    </div>
  );
};

export default Practicum;
