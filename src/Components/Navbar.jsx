import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close buttons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" px-10 py-3 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <a href="/">
          <img src="/Logo.png" className="w-16 ml-5" />
        </a>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <FiMenu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        {/* Links for Larger Screens */}
        <ul className="hidden ml-12 md:flex space-x-10 font-medium text-[#171717]">
          <li>
            <a
              href="#home"
              className="text-gray-700 border-b-2 border-transparent hover:border-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 border-b-2 border-transparent hover:border-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              className="text-gray-700 border-b-2 border-transparent hover:border-white"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="text-gray-700 border-b-2 border-transparent hover:border-white"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-gray-700 border-b-2 border-transparent hover:border-white"
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 border rounded-full bg-[#171717] text-white font-semibold"
        >
          Contact Us
        </a>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed z-[999] top-0 right-0 w-64 bg-[#171717] text-white h-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX size={28} onClick={toggleMenu} className="cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center space-y-6 py-6 ">
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="border-b border-white pb-1"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="border-b border-white pb-1"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              onClick={toggleMenu}
              className="border-b border-white pb-1"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#events"
              onClick={toggleMenu}
              className="border-b border-white pb-1"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={toggleMenu}
              className="border-b border-white pb-1"
            >
              Blog
            </a>
          </li>
          <li>
            <button
              onClick={toggleMenu}
              className="mt-4 px-4 py-2 border rounded-full bg-white text-black font-semibold"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
