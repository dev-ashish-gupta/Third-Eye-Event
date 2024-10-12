import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"; // Importing social icons

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 relative">
            About Us
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
          </h2>
          <p className="mb-4">
            Connect with your site visitors on a personal level and make sure
            that your site becomes a regular stop in their daily browsing.
          </p>
          <p className="text-sm">© 2015 Fresh, All Rights Reserved</p>
        </div>

        <div className="hidden md:block">
          <h2 className="text-xl font-semibold mb-4 relative">
            Services
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Product Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Design & Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                UX/UI Strategy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Software Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Business Analysis
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4 relative">
            Social Links
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-yellow-400"></span>
          </h2>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaYoutube size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
      </div>

      {/* Bottom navigation bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-white font-bold text-xl px-3 py-2 rounded">
            LOGO
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
