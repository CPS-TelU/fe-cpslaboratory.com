import { poppins } from "@/styles/font";
import Link from "next/link";
import React from "react";

const FullForm = () => {
  return (
    <main
      className={`${poppins.className} marker:relative flex flex-col items-center justify-center px-12 !z-[999] pt-60 pb-44`}
    >
      <div className="flex items-center justify-center h-full flex-col">
        <span className="text-m px-3.5 py-1 rounded-md bg-gradient-to-br from-red-500 custom-shadow">
          Registration Closed
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-5">
          Thank You for Your Interest!
        </h1>
        <p className="text-base text-neutral-400 font-medium mt-5 text-center mx-auto max-w-xl">
          Registration is currently closed. We sincerely appreciate your interest and support. If you would like to stay updated or have further questions, feel free to
          <Link className="hover:text-red-600" href="/contact">
            <b> contact us</b>
          </Link>
          . See you at the next opportunity!
        </p>
        <Link
          href="/"
          target="_self"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded-md mt-5 hover:bg-red-700"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
};

export default FullForm;
