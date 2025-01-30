import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/logo-3.1@2x.png";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={` w-full h-20 flex justify-between items-center px-5   fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar
          ? "translate-y-0 bg-white"
          : "-translate-y-full bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="pt-4 pb-4">
        <img src={Logo} alt="Logo" className="w-[136px] h-auto" />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex justify-between gap-12 font-semibold">
          <li className="text-lg">Home</li>
          <li className="text-lg">List</li>
          <li className="text-lg">Pages</li>
          <li className="text-lg">Blog</li>
          <li className="text-lg">Contact</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-center">
        <IoCallOutline size={25} className="text-primary" />
        <p className="font-bold text-lg ml-2">+(233) 232-0233</p>
      </div>
    </div>
  );
};

export default Navbar;
