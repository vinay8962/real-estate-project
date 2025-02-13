import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/logo-3.1@2x.png";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`w-full h-20 flex justify-between items-center px-5 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0 bg-white" : "-translate-y-full"
      } shadow-md`}
    >
      {/* Logo Section */}
      <div className="pt-4 pb-4">
        <img src={Logo} alt="Logo" className="w-[136px] h-auto" />
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent md:items-center transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <Link to="/">
          <li className="text-lg font-semibold px-5 py-2 hover:text-primary">
            Home
          </li>
        </Link>
        <Link to="/property-list">
          <li className="text-lg font-semibold px-5 py-2 hover:text-primary">
            List
          </li>
        </Link>
        <li className="text-lg font-semibold px-5 py-2 hover:text-primary">
          Pages
        </li>
        <Link to="/blog">
          <li className="text-lg font-semibold px-5 py-2 hover:text-primary">
            Blog
          </li>
        </Link>
        <Link to="/contact">
          <li className="text-lg font-semibold px-5 py-2 hover:text-primary">
            Contact
          </li>
        </Link>
      </ul>

      {/* Contact Section */}
      <div className="hidden md:flex justify-center items-center">
        <IoCallOutline size={25} className="text-primary" />
        <p className="font-bold text-lg ml-2">+(233) 232-0233</p>
      </div>
    </div>
  );
};

export default Navbar;
