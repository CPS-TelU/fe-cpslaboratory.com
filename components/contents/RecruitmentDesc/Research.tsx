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
    <div
      className={`${poppins.className} flex flex-col items-center py-4 px-2 sm:px-4 md:px-6 lg:px-8`}
    >
      {/* Container Utama */}
      <div className="w-full max-w-[1200px] p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center sm:text-left">
            <span className="gradient-text-2 to-[#BA2025] text-transparent bg-clip-text">
              Research Division
            </span>
          </h1>

          {/* Tombol */}
          <div className="flex flex-wrap justify-center sm:justify-end space-x-2">
            <Button
              onClick={openForm}
              className="rounded-full px-4 py-2 text-sm md:text-base bg-[#BA2025] text-white hover:bg-red-600 transition duration-300"
            >
              Apply Now <span className="ml-1">&rarr;</span>
            </Button>
            <Link href="/recruitment" passHref>
              <Button className="px-4 py-2 text-sm md:text-base bg-white text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300">
                Back
              </Button>
            </Link>
          </div>
        </div>

        {/* Garis Bawah */}
        <div className="w-full my-6 border-b border-gray-300"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl border border-gray-300">
          {/* Kolom Kiri */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Job Description */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Job Description
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                The Research Group Assistant will play a key role in exploring
                emerging technologies, including Internet of Things (IoT)
                for transforming industries, Web Development for building
                innovative platforms, and Machine Learning for data analysis
                and automation. This involves preparing research proposals,
                conducting experiments, analyzing data, and fostering a
                collaborative environment to drive impactful research outcomes.
              </p>
            </div>

            {/* Benefit */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Benefits
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                Enhance your skills, collaborate with professionals, and gain a
                competitive edge in advanced research fields. Strengthen your
                resume and professional network through valuable experiences.
              </p>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="p-4 sm:p-6">
            {/* Requirements */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              Requirements
            </h3>
            <ul className="list-decimal list-inside text-gray-600 mt-4 text-sm md:text-base space-y-2">
              <li>
                <span className="font-semibold text-[#ba2025]">Essay</span> -
                Choose one of the following topics and ensure it is 2 pages long
                :
                <ul className="ml-6 list-disc mt-2">
                  <li>
                    Internet of Things and Its Role in Transforming Modern
                    Industries.
                  </li>
                  <li>
                    Advancing Artificial Intelligence Through Machine Learning.
                  </li>
                  <li>
                    Innovations in Web Development for Enhanced User
                    Experiences.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">CV ATS</span> -
                Your background, experience, and skills.
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  Formal Photo 4x6
                </span>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">KHS</span> -
                Academic performance transcript.
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  Commitment Letter
                </span>
              </li>
              <li>
                <span className="font-semibold text-[#ba2025]">
                  Telkom University Students
                </span>{" "}
                - Batch 2022, 2023, 2024.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {isFormOpen && <RecruitmentFormResearch onClose={closeForm} />}
    </div>
  );
};

export default Research;
