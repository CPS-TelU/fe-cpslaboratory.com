"use client"; // Pastikan ini ada di bagian atas file
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { dmSans } from "../styles/font";
import Navbar from "./MobileNav";

const Header = () => {
  const pathname = usePathname(); // Gunakan usePathname untuk mendapatkan path saat ini
  const [isActivityOpen, setIsActivityOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside

  const handleNavigationClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleActivityDropdown = () => {
    setIsActivityOpen(!isActivityOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsActivityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`${dmSans.className} z-[99999] fixed top-0 w-full`}>
      <nav
        className="mx-auto hidden lg:flex max-w-[1200px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center gap-8">
          {/* Logo and left navigation */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={(e) => handleNavigationClick("/", e)}
            >
              <Image src="/logocps.png" alt="logo" width={130} height={50} />
            </Link>
          </div>
          <div className="bg-gray-200 h-10 w-[0.125rem] rounded-full hidden sm:block" />
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              onClick={(e) => handleNavigationClick("/", e)}
              className={`font-medium ${
                pathname === "/"
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
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
              }`}
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
              }`}
            >
              Blog
            </Link>
            <div className="relative" ref={dropdownRef}>
              <span
                className={`font-medium cursor-pointer ${
                  pathname.startsWith("/activity")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleActivityDropdown} // Toggle dropdown on click
              >
                Activity
              </span>
              {isActivityOpen && ( // Conditionally render dropdown
                <div className="absolute left-0 mt-6 w-40 bg-white shadow-lg rounded-md">
                  <Link
                    href="https://bit.ly/OpenLabCPS2024"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Laboratory
                  </Link>
                  <Link
                    href="https://cyberrecruitment.cpsrg.org/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CyberAcademy
                  </Link>
                  <Link
                    href="https://cyberrecruitment.cpsrg.org/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CyberRecruitment
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="ml-auto flex space-x-8 items-center">
          <Link
            href="/contact"
            onClick={(e) => handleNavigationClick("/contact", e)}
            className={`font-medium ${
              pathname === "/contact"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            Contact
          </Link>
          <a
            href="https://lms.cpslaboratory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
          >
            e-Learning
          </a>
        </div>
      </nav>
      <Navbar />
    </header>
  );
};

export default Header;
