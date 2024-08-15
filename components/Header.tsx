"use client"; // Pastikan ini ada di bagian atas file
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import { dmSans } from "../styles/font";

const Header = () => {
  const pathname = usePathname(); // Gunakan usePathname untuk mendapatkan path saat ini

  const handleNavigationClick = (href: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`${dmSans.className} z-[99999] sticky top-0 w-full`}>
      <nav
        className="mx-auto hidden md:flex max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center gap-8">
          {/* Logo and left navigation */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavigationClick("/", e)}>
              <Image src="/logocps.png" alt="logo" width={130} height={50} />
            </Link>
          </div>
          <div className="bg-gray-200 h-10 w-[0.125rem] rounded-full hidden sm:block" />
          <div className="hidden md:flex space-x-7 lg:space-x-8 items-center">
            <Link
              href="/"
              onClick={(e) => handleNavigationClick("/", e)}
              className={`font-medium ${
                pathname === "/"
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              } text-[14px] lg:text-[15px]`}
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
              } text-[14px] lg:text-[15px]`}
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
              } text-[14px] lg:text-[15px]`}
            >
              Blog
            </Link>
            <div className="relative group">
              <span
                className={`font-medium ${
                  pathname.startsWith("/activity")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                } text-[14px] lg:text-[15px] cursor-pointer`}
              >
                Activity
              </span>
              <div className="absolute left-0 mt-2 w-44 lg:w-48 bg-white shadow-lg rounded-md opacity-0 text-[14px] lg:text-[15px] group-hover:opacity-100 transition-opacity duration-300">
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
        </div>
        <div className="ml-auto flex space-x-8 items-center">
          <Link
            href="/contact"
            onClick={(e) => handleNavigationClick("/contact", e)}
            className={`font-medium ${
              pathname === "/contact"
                ? "text-red-600"
                : "text-gray-700 hover:text-red-600"
            } text-[14px] lg:text-[15px]`}
          >
            Contact
          </Link>
          <a
            href="https://rhnworks.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white text-[14px] lg:text-[15px] px-4 py-2 rounded-full hover:bg-red-700"
          >
            e-Learning
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
