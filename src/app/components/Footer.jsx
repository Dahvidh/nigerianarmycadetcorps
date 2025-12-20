import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-black-900 p-6 text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold">Nigerian Army Cadet Corps</h3>
            <p>
              FSTC Yaba, 68 Nigerian Army Reference Hospital, Myhoung Barracks,
              Lagos State, Nigeria.
            </p>
            <p>
              <strong>Phone:</strong> +23490 6666 9288
            </p>
            <p>
              <strong>Email:</strong> nigerianarmycadetocoy@gmail.com
            </p>
            <div className="flex justify-center space-x-3 mt-2">
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Useful Links</h3>
            <ul>
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/course" className="text-white">
                  Course
                </a>
              </li>
              {/*<li>
                <a href="#" className="text-white">
                  Directorates
                </a>
              </li>*/}
              {/*<li>
                <a href="/hierachy" className="text-white">
                  Command
                </a>
              </li>*/}
              <li>
                <a href="/news" className="text-white">
                  News
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white">
                  Photos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Our Newsletter</h3>
            <p>
              Subscribe to get daily tips on Security, Nation's building etc.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black"
            />
            <button className="bg-black text-white p-2 rounded-md ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <br /> <br />
      &copy; Copyright 2025 <strong>Nigerian Army Cadet Corps</strong>. All
      Rights Reserved
      <br />
      Designed by <strong>Cyber Operations Unit, Oscar Company, NACC. </strong>
    </footer>
  );
};

export default Footer;
