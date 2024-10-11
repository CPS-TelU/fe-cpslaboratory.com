import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { dmSans } from "@/styles/font";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false); // State for Activity dropdown
  const [activePage, setActivePage] = useState(""); // Track active page
  const menuRef = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLDivElement>(null); // Ref for Activity dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleActivityDropdown = () => {
    setIsActivityOpen(!isActivityOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsActivityOpen(false); // Close Activity dropdown when closing menu
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) ||
      activityRef.current &&
      !activityRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isMenuOpen || isActivityOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isActivityOpen]);

  // Detect current page and set active page state
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Normalize the pathname by removing trailing slashes
      const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
      setActivePage(currentPath);
    }
  }, []);

  const handleLinkClick = (path: string) => {
    setActivePage(path);
    closeMenu();
  };

  return (
    <nav
      ref={menuRef}
      className={`${dmSans.className} bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 lg:block lg:hidden max-h-screen overflow-y-auto`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          onClick={() => handleLinkClick("/")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logocps.png"
            className="h-8 left-6"
            alt="Logo"
            width={110}
            height={50}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className="flex space-x-3 rtl:space-x-reverse">
          <a
            href="https://lms.cpslaboratory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white text-m px-4 py-2 rounded-full hover:bg-red-700"
            onClick={closeMenu}
          >
            e-Learning
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 sm:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 sm:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => handleLinkClick("/")}
                className={`block py-2 px-3 sm:ml-8 text-gray-900 rounded hover:bg-gray-100 lg:hover:text-red-700 hover:bg-transparent hover:text-red-700 md:p-0 sm:hover:bg-transparent sm:hover:text-red-700 sm:p-0 sm:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${
                  activePage === "/" ? "text-red-700" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => handleLinkClick("/about")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  hover:bg-transparent hover:text-red-700 md:p-0 sm:hover:bg-transparent sm:hover:text-red-700 sm:p-0 sm:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${
                  activePage === "/about" ? "text-red-700" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://medium.com/@cpslaboratory2324"
                onClick={() => handleLinkClick("/blog")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  hover:bg-transparent hover:text-red-700 md:p-0 sm:hover:bg-transparent sm:hover:text-red-700 sm:p-0 sm:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${
                  activePage === "/blog" ? "text-red-700" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  hover:bg-transparent hover:text-red-700 md:p-0 sm:hover:bg-transparent sm:hover:text-red-700 sm:p-0 sm:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${
                  activePage === "/contact" ? "text-red-700" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="relative">
              <span
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  hover:bg-transparent hover:text-red-700 md:hover:text-red-700 md:p-0 sm:hover:bg-transparent sm:hover:text-red-700 sm:p-0 sm:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                onClick={toggleActivityDropdown}
              >
                Activity
              </span>
              {isActivityOpen && (
                <div
                  ref={activityRef}
                  className="absolute left-28 bottom-[-5px] mt-2 ml-10 w-42 bg-white shadow-lg rounded-md transition-opacity duration-300"
                >
                  <Link
                    href="https://bit.ly/OpenLabCPS2024"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Laboratory CPS
                  </Link>
                  <Link
                    href="https://cyberrecruitment.cpsrg.org/"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CyberAcademy
                  </Link>
                  <Link
                    href="https://cyberrecruitment.cpsrg.org/"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CyberRecruitment
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
