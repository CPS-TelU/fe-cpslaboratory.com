import { poppins } from "@/styles/font";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const RecruitmentCard = () => {
  return (
    <div className={` ${poppins.className} p-4`}>
      <h2 className="text-3xl gradient-text font-semibold mb-4 lg:min-w-[1200px]">
        Opportunities Open for:
      </h2>

      <div className="space-y-6 mt-8">
        {/* Card 1 */}
        <Link href="/recruitment/practicum" passHref>
          <div className="group flex pl-4 items-center border-b pb-4 hover:bg-gray-200 hover:rounded-xl  transition-transform duration-300 cursor-pointer">
            <img
              src="/logocps.png"
              alt="Practicum Division Logo"
              className="w-24 h-20 object-contain"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-base text-black font-semibold">
                Assistant{" "}
                <span className="bg-gradient-to-r from-[#000000] to-[#BA2025] text-transparent bg-clip-text">
                  Practicum
                </span>{" "}
                Division
              </h3>
              <p className="text-sm text-gray-500">
                Be a part of our Practicum Division, where you'll help organize and lead practical sessions in our labs, shaping hands-on learning experiences for students.
              </p>
            </div>
            <div className="p-4 group-hover:scale-110 group-hover:text-red-600 transition-transform duration-300">
              <FiSearch className="text-xl" />
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/recruitment/research" passHref>
          <div className="group flex items-center pl-4 border-b pb-4 hover:bg-gray-200 hover:rounded-xl transition-transform duration-500 ease-in-out cursor-pointer">
            <img
              src="/logocps.png"
              alt="Research Division Logo"
              className="w-24 h-20 object-contain"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-base font-semibold">
                Assistant{" "}
                <span className="bg-gradient-to-r from-[#BA2025] to-[#000000] text-transparent bg-clip-text">
                  Research
                </span>{" "}
                Division
              </h3>
              <p className="text-sm text-gray-500">
                Join our Research Division to assist in conducting impactful research, preparing proposals, and fostering innovation within our labs.
              </p>
            </div>
            <div className="p-4 group-hover:scale-110 group-hover:text-red-600 transition-transform duration-300">
              <FiSearch className="text-xl" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecruitmentCard;
