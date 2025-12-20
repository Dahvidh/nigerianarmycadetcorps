"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-1 bg-white shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="./assets/oe.png"
          alt="Nigeria army cadet corps"
          className="h-16"
        />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

      {/* Navigation Links for desktop */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-green-700">
          About
        </Link>
        <Link href="/course" className="hover:text-green-700">
          Courses
        </Link>
        {/*<Link href="/hierachy" className="hover:text-green-700">
          Command
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

      {/* Buttons for desktop */}
      <div className="hidden md:flex space-x-4">
        <Link href="/checkpoint">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-green-700">
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
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-red-800 text-white z-50 p-6 space-y-4"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <img
                  src="./assets/oe.png"
                  alt="Nigeria army cadet corps"
                  className="h-16"
                />
                <button onClick={() => setMenuOpen(false)}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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

              <Link
                href="/"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/course"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
              {/*<Link
                href="/hierachy"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Command
              </Link>*/}
              <Link
                href="/news"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/gallery"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Photos
              </Link>
              <Link
                href="/contact"
                className="block hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              <Link href="/checkpoint">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md w-full hover:bg-blue-700">
                  Portal
                </button>
              </Link>
              <Link href="/recruitment-info">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
                  Join Our Ranks
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
