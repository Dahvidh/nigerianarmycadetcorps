"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 py-1 bg-white shadow-md relative z-50">
      {/* Logo */}{" "}
      <div className="flex items-center">
        {" "}
        <img
          src="/assets/oe.png"
          alt="Nigerian Army Cadet Corps"
          className="h-16"
        />{" "}
      </div>
      ```
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-gray-700">
        <Link href="/" className="hover:text-green-700">
          Home
        </Link>

        <Link href="/about" className="hover:text-green-700">
          About
        </Link>

        {/* Courses Dropdown */}
        <div className="relative group">
          <button className="flex items-center hover:text-green-700">
            Courses
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="absolute left-0 top-full mt-2 w-80 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="px-4 py-2 font-semibold text-green-700 border-b">
              Training & Courses
            </div>

            <Link href="/course" className="block px-4 py-2 hover:bg-gray-100">
              Leadership and Development Training
            </Link>

            <div className="border-t my-1"></div>

            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
              Specialist Courses
            </div>

            <Link
              href="/department/cadet-police"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Cadet Police Course
            </Link>

            <Link
              href="/department/Medical"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Medical Course
            </Link>

            <Link
              href="/department/Signals"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Signals Course
            </Link>

            <Link
              href="/department/Intelligence"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Intelligence Course
            </Link>

            <Link
              href="/department/Logistics"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Logistics Course
            </Link>

            <Link
              href="/department/drill"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Drill Course
            </Link>

            <Link
              href="/department/Fieldcraft"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Fieldcraft Course
            </Link>

            <Link
              href="/department/Engineering"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Engineering Course
            </Link>

            <Link
              href="/department/Leadership"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Leadership Course
            </Link>

            <Link
              href="/department/Band"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Band Course
            </Link>

            <Link
              href="/department/Finance"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Finance Course
            </Link>
          </div>
        </div>

        {/*<Link href="/hall-of-fame" className="hover:text-green-700">
          Hall of fame
        </Link>*/}

        <Link href="/news" className="hover:text-green-700">
          News
        </Link>

        <Link href="/gallery" className="hover:text-green-700">
          Photos
        </Link>

        <Link href="/contact" className="hover:text-green-700">
          Contact
        </Link>
      </nav>
      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link href="/checkpoint">
          <button className="bg-white border text-blue-600 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white">
            Portal
          </button>
        </Link>

        <Link href="/recruitment-info">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Join Our Ranks
          </button>
        </Link>
      </div>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-red-800 text-white z-50 p-6 overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <img src="/assets/oe.png" alt="NACC" className="h-16" />

                <button onClick={closeMenu}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <Link href="/" className="block py-1" onClick={closeMenu}>
                  Home
                </Link>

                <Link href="/about" className="block py-1" onClick={closeMenu}>
                  About
                </Link>

                {/* Mobile Courses */}
                <div>
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className="flex justify-between items-center w-full"
                  >
                    <span>Courses</span>

                    <svg
                      className={`w-4 h-4 transition-transform ${
                        coursesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {coursesOpen && (
                    <div className="ml-4 mt-3 space-y-2 text-sm">
                      <Link href="/course" onClick={closeMenu}>
                        Leadership and Development Training
                      </Link>

                      <div className="pt-2 text-gray-300 font-semibold">
                        Specialist Courses
                      </div>

                      <Link
                        href="/department/cadet-police"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Cadet Police Course
                      </Link>

                      <Link
                        href="/department/Medical"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Medical Course
                      </Link>

                      <Link
                        href="/department/Signals"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Signals Course
                      </Link>

                      <Link
                        href="/department/intelligence"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Intelligence Course
                      </Link>

                      <Link
                        href="/department/Logistics"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Logistics Course
                      </Link>

                      <Link
                        href="/department/drill"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Drill Course
                      </Link>

                      <Link
                        href="/department/Fieldcraft"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Fieldcraft Course
                      </Link>

                      <Link
                        href="/department/Engineering"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Engineering Course
                      </Link>

                      <Link
                        href="/department/Leadership"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Leadership Course
                      </Link>

                      <Link
                        href="/department/Band"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Band Course
                      </Link>

                      <Link
                        href="/department/Finance"
                        className="block py-1"
                        onClick={closeMenu}
                      >
                        Finance Course
                      </Link>
                    </div>
                  )}
                </div>

                {/*<Link
                  href="/hall-of-fame"
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Hall of Fame
                </Link>*/}

                <Link href="/news" className="block py-1" onClick={closeMenu}>
                  News
                </Link>

                <Link
                  href="/gallery"
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Photos
                </Link>

                <Link
                  href="/contact"
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-3">
                  <Link href="/checkpoint">
                    <button className="w-full bg-white text-blue-600 py-2 rounded-md">
                      Portal
                    </button>
                  </Link>

                  <Link href="/recruitment-info">
                    <button className="w-full bg-green-700 text-white py-2 rounded-md">
                      Join Our Ranks
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
