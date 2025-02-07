import React from "react";
import Logo from "../assets/logo/logo-3@2x.png";
import { IoCall, IoMail } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-Secondary text-white py-12 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Top Section: Logo and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-10 border-b border-white/10 space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="w-36">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-start md:items-center">
              <IoCall className="text-4xl text-primary mr-4" />
              <div className="border-l border-gray-500 px-2">
                <h5 className="font-semibold text-lg">Call us</h5>
                <p>(603) 555-0123</p>
              </div>
            </div>
            <div className="flex items-start md:items-center">
              <IoMail className="text-4xl text-primary mr-4" />
              <div className="border-l border-gray-500 px-2">
                <h5 className="font-semibold text-lg">Need live help?</h5>
                <p>proty-support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-10 border-b border-white/10">
          {/* About Us */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl mb-4">About Us</h4>
            <ul className="space-y-3 text-[#a8abae]">
              <li>Contact</li>
              <li>Why Choose Us?</li>
              <li>Customer Reviews</li>
              <li>Our Team</li>
              <li>Careers with Realty</li>
              <li>Work with Us</li>
            </ul>
          </div>

          {/* Popular House Types */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl mb-4">Popular House</h4>
            <ul className="space-y-3 text-[#a8abae]">
              <li>#Penthouses</li>
              <li>#Villa</li>
              <li>#Smart Home</li>
              <li>#Apartments</li>
              <li>#Office</li>
              <li>#Bungalow</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3 text-[#a8abae]">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Our Services</li>
              <li>Contact Support</li>
              <li>Pricing Plans</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl mb-4">Newsletter</h4>
            <p className="mb-4">
              Sign up to receive the latest articles and updates.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                className="p-3 w-full rounded-lg bg-transparent border border-gray-400 text-xl text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <button className="p-3 w-full bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-sm space-y-4 md:space-y-0">
          <p className="text-[#a8abae] text-lg font-semibold">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <h5 className="text-lg font-semibold">Follow us</h5>
            <div className="border w-10 h-10 rounded-full border-white hover:bg-primary transition-all duration-500 flex justify-center items-center">
              <FaFacebookF />
            </div>
            <div className="border w-10 h-10 rounded-full border-white hover:bg-primary transition-all duration-500 flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className="border w-10 h-10 rounded-full border-white hover:bg-primary transition-all duration-500 flex justify-center items-center">
              <FaLinkedinIn />
            </div>
            <div className="border w-10 h-10 rounded-full border-white hover:bg-primary transition-all duration-500 flex justify-center items-center">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
