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
    <header className={`${dmSans.className} z-[99999] sticky -top-3 w-full`}>
      <nav
        className="md:hidden mx-auto w-[350px] items-center justify-between p-4 rounded-full bg-white shadow-lg"
        style={{ transform: "translateY(40%)" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => handleNavigationClick("/", e)}
          >
            <Image src="/logocps.png" alt="logo" width={130} height={50} />
          </Link>
          {/* Hamburger button */}
          {/* <button
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
          </button> */}
          <div className="drawer md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content"></div>
            <label
              htmlFor="my-drawer"
              className="flex items-center px-3 py-2 rounded text-gray-700 hover:text-red-600 cursor-pointer -ml-2 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                  className="transition-colors duration-300 ease-in-out"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                  className="transition-colors duration-300 ease-in-out"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Overlay */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 space-y-3 w-56 min-h-full text-base-content md:w-80 md:space-y-5"
            style={{
              background: "#f4f4f4",
              color: "#231f20",
            }}
          >
            <li className="font-semibold text-[17px] md:text-[18px]">
              <Link href="/" onClick={(e) => handleNavigationClick("/", e)}>
                Home
              </Link>
            </li>
            <li className="font-semibold text-[17px] md:text-[18px] md:hidden">
              <Link
                href="/about"
                onClick={(e) => handleNavigationClick("/", e)}
              >
                About
              </Link>
            </li>
            <li className="hidden md:block font-semibold text-[17px] md:text-[18px]">
              <Link href="/blog" onClick={(e) => handleNavigationClick("/", e)}>
                About
              </Link>
            </li>
            <li className="font-semibold text-[17px] md:text-[18px]">
              <Link
                href="/contact"
                onClick={(e) => handleNavigationClick("/", e)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* {navOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
            onClick={() => setNavOpen(false)}
          ></div>
        )} */}

        {/* Sidebar */}
        {/* <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-[10000]`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image src="/logocps.png" alt="logo" width={100} height={40} />
            <button
              className="text-gray-700 hover:text-red-600"
              onClick={() => setNavOpen(false)}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
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
              <div className="ml-4 space-y-2 mt-2">
                <Link
                  href="https://cyberrecruitment.cpsrg.org/"
                  className="block text-gray-700 hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Laboratory CPS
                </Link>
                <Link
                  href="https://cyberrecruitment.cpsrg.org/"
                  className="block text-gray-700 hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cyber Academy
                </Link>
                <Link
                  href="https://cyberrecruitment.cpsrg.org/"
                  className="block text-gray-700 hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cyber Recruitment
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              onClick={(e) => handleNavigationClick("/contact", e)}
              className={`font-medium ${
                pathname === "/contact"
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              } text-[14px]`}
            >
              Contact
            </Link>
            <a
              href="https://rhnworks.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-[14px] px-4 py-2 rounded-full hover:bg-red-700"
            >
              e-Learning
            </a>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default MobileNav;
