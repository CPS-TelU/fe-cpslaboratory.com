import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dmSans } from '../styles/font';

const Header = () => {
  return (
    <header className={`${dmSans.variable} z-[99999] relative`}>
      <nav className="mx-auto flex max-w-[1284px] items-center justify-between p-6 rounded-full bg-white shadow-lg" style={{ transform: 'translateY(25%)' }}>
        <div className="flex items-center gap-8">
          {/* Logo and left navigation */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logocps.png" alt="logo" width={150} height={50} />
            </Link>
          </div>
          <div className="bg-gray-200 h-10 w-[0.125rem] rounded-full hidden sm:block"/>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-red-600 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-red-600">About Us</Link>
            <Link href="/blog" className="text-gray-700 font-medium hover:text-red-600">Blog</Link>
            <div className="relative group">
              <span className="text-gray-700 font-medium hover:text-red-600 cursor-pointer">Activity</span>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
                <Link href="/activity/event1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Event 1</Link>
                <Link href="/activity/event2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Event 2</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto flex space-x-8 items-center">
          <Link href="/contact" className="text-gray-700 font-medium hover:text-red-600">Contact</Link>
          <Link href="/e-learning" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">e-Learning</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
