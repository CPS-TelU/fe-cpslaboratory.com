import React from "react";
import { poppins } from "@/styles/font";
import Link from "next/link";

const Practicum = () => {
  return (
    <div className={`${poppins.className} min-h-screen flex flex-col items-center py-8`}>
      {/* Container Utama */}
      <div className="w-full p-8 max-w-[1200px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              <span className="bg-gradient-to-r from-[#000000] to-[#BA2025] text-transparent bg-clip-text">
                Practicum
              </span>{" "}
              Division
            </h1>
            <h2 className="text-sm font-medium text-gray-500 mt-1 mb-6">
              CYBER RECRUITMENT (Laboratory)
            </h2>
          </div>

          {/* Tombol */}
          <div className="flex mt-2 mb-6 space-x-4">
            <button className="px-6 py-2 bg-red-600 text-white font-medium rounded-full shadow-md hover:bg-red-700 transition duration-300">
              APPLY NOW <span className="ml-1">&rarr;</span>
            </button>
            <Link href="/recruitment" passHref>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-full shadow-md hover:bg-gray-300 transition duration-300">
              BACK
            </button>
            </Link>
          </div>
        </div>

        {/* Garis Bawah */}
        <div className="w-full p-2 mb-8 border-b border-gray-300"></div>

        {/* Grid Layout: Job Description, Requirements, Benefit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl border border-gray-300">
          {/* Kolom Kiri */}
          <div className="p-4 space-y-8">
            {/* Job Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-300">
                Job Description
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The Practicum Division Assistant is responsible for organizing and{" "}
                <span className="text-red-600 font-semibold">managing hands-on learning experiences</span>{" "}
                in the <span className="text-red-600 font-semibold">laboratory</span>. This role includes assisting
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
    </div>
  );
};

export default Practicum;
