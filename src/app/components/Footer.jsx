"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/course" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
    },
    {
      icon: <FaXTwitter />,
      href: "https://x.com",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com",
    },
  ];

  return (
    <footer className="bg-red-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Corps Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Nigerian Army Cadet Corps
            </h3>

            <p className="mb-3 text-gray-100">
              FSTC Yaba, 68 Nigerian Army Reference Hospital, Myhoung Barracks,
              Lagos State, Nigeria.
            </p>

            <p className="mb-2">
              <strong>Phone:</strong> +234 906 666 9288
            </p>

            <p className="mb-4 break-all">
              <strong>Email:</strong> nigerianarmycadetocoy@gmail.com
            </p>

            <div className="flex gap-4 text-xl">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-yellow-300 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>

            <p className="mb-4 text-gray-100">
              Subscribe to receive updates on training, leadership development,
              activities, and national events.
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-md text-black outline-none"
              />

              <button
                type="submit"
                className="bg-black hover:bg-gray-900 px-4 py-3 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-red-500 mt-10 pt-6 text-center">
          <p>
            © {currentYear} <strong>Nigerian Army Cadet Corps</strong>. All
            Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Designed and Maintained by{" "}
            <strong>Directorate of training, NACC</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
