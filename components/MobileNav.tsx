"use client"; // Pastikan ini ada di bagian atas file
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { dmSans } from "../styles/font";

const MobileNav = () => {
  const pathname = usePathname(); // Gunakan usePathname untuk mendapatkan path saat ini
  const [navOpen, setNavOpen] = useState(false); // State untuk mengontrol buka/tutup navigasi

  const handleNavigationClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setNavOpen(false); // Menutup navigasi setelah klik
  };

  return (
    <header className={`${dmSans.className} z-[99999] fixed -top-3 w-full`}>
      <nav
        className="md:hidden mx-auto w-[350px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavigationClick("/", e)}>
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
          {/* Hamburger button */}
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-red-600 hover:border-red-600"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } space-x-7 items-center mt-4`}
        >
          <Link
            href="/"
            onClick={(e) => handleNavigationClick("/", e)}
            className={`font-medium ${
              pathname === "/"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            } text-[14px]`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={(e) => handleNavigationClick("/about", e)}
            className={`font-medium ${
              pathname === "/about"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            } text-[14px] `}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            onClick={(e) => handleNavigationClick("/blog", e)}
            className={`font-medium ${
              pathname === "/blog"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            } text-[14px]`}
          >
            Blog
          </Link>
          <div className="relative group">
            <span
              className={`font-medium ${
                pathname.startsWith("/activity")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              } text-[14px] cursor-pointer`}
            >
              Activity
            </span>
            <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 text-[14px] group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href="https://cyberrecruitment.cpsrg.org/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Laboratory CPS
              </Link>
              <Link
                href="https://cyberrecruitment.cpsrg.org/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cyber Academy
              </Link>
              <Link
                href="https://cyberrecruitment.cpsrg.org/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cyber Recruitment
              </Link>
            </div>
          </div>
        </div>

        {/* Right side links */}
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } ml-auto space-x-8 items-center mt-4 `}
        >
          <Link
            href="/contact"
            onClick={(e) => handleNavigationClick("/contact", e)}
            className={`font-medium ${
              pathname === "/contact"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            } text-[14px] `}
          >
            Contact
          </Link>
          <a
            href="https://rhnworks.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white text-[14px]  px-4 py-2 rounded-full hover:bg-red-700"
          >
            e-Learning
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
