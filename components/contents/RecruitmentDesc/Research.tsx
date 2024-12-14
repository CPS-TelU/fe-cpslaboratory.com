"use client";

import React, { useState } from "react";
import { poppins } from "@/styles/font";
import Link from "next/link";
import RecruitmentForm from "../RecruitmentForm";

const Research = () => {
const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);


  return (
    <div className={`${poppins.className} min-h-screen flex flex-col items-center py-8`}>
      {/* Container Utama */}
      <div className="w-full p-8 max-w-[1200px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              <span className="bg-gradient-to-r from-[#BA2025] to-[#00000] text-transparent bg-clip-text">
                Research
              </span>{" "}
              Division
            </h1>
            <h2 className="text-sm font-medium text-gray-500 mt-1 mb-6">
              CYBER RECRUITMENT (Laboratory)
            </h2>
          </div>

          {/* Tombol */}
          <div className="flex mt-2 mb-6 space-x-4">
            <button 
              onClick={openForm}
              className="relative rounded-full px-5 py-2.5 overflow-hidden group bg-[#BA2025] relative hover:bg-gradient-to-r hover:from-[#ba2025] hover:to-red-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-600 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Apply Now <span className="ml-1">&rarr;</span></span>
            </button>
            <Link href="/recruitment" passHref>
              <button className="px-6 py-2 bg-white text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300">
                Back
              </button>
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
                The Practicum Division Assistant is responsible for organizing and{" "}
                <span className="bg-gradient-to-r from-[#BA2025] to-[#000000] text-transparent bg-clip-text">managing hands-on learning experiences</span>{" "}
                in the laboratory. This role includes assisting
                in preparing materials, guiding students during practical sessions, ensuring proper use of
                equipment, and maintaining a safe and productive learning environment.
              </p>
            </div>

            {/* Benefit */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">Benefit</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Becoming a Practicum Assistant provides hands-on experience, enhances your communication and
                leadership skills, and boosts your resume. You’ll access advanced resources, network with peers
                and lecturers, and make a meaningful impact by guiding students in their learning journey.
              </p>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="p-4">
            {/* Requirements */}
            <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">Requirements</h3>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-1 leading-relaxed">
              <li>Iman kepada Allah SWT</li>
              <li>Iman kepada malaikat</li>
              <li>Iman kepada kitab</li>
              <li>Iman kepada rasul</li>
              <li>Iman kepada hari akhir</li>
              <li>Iman kepada qada dan qadar</li>
            </ul>
          </div>
        </div>
      </div>

      {isFormOpen && <RecruitmentForm onClose={closeForm} />}
    </div>
  );
};

export default Research;
