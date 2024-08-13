import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { didactGothic, poppins } from "@/styles/font";


const Footer = () => {
  return (
    <footer className={`${poppins.className} py-8 shadow-lg`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-12 lg:px-24 space-y-6 md:space-y-0">
        <div className="flex flex-col items-start">
          <Image src="/logocps.png" alt="logo" width={150} height={50} />
          <p className="mt-4 text-sm text-gray-700">
            Telkom University Landmark Tower (13.12)
          </p>
          <p className="text-sm text-gray-700">Bandung, Jawa Barat</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold mb-4">Contact Us</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/cpslaboratory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/cpslaboratory/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-red-600"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24">
        <p className="text-sm text-gray-600">
          &copy; 2024 Cyber Physical System
        </p>
        <div className="flex flex-row space-x-4">
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Terms of Service
          </span>
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Privacy Policy
          </span>
          <span className="text-sm text-gray-600 hover:text-red-600 cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
