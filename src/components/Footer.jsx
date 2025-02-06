import React from "react";
import Logo from "../assets/logo/logo-3@2x.png";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-Secondary text-white py-16 px-16">
      <div className="container mx-auto px-6">
        {/* Top Section: Logo and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="w-36 mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="w-full" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center">
              <IoCall className="text-5xl text-primary mr-4" />
              <div className="border-l border-gray-500 px-2">
                <h5 className="font-semibold text-lg">Call us</h5>
                <p>(603) 555-0123</p>
              </div>
            </div>
            <div className="flex items-center">
              <IoMail className="text-5xl text-primary mr-4" />
              <div className="border-l border-gray-500 px-2">
                <h5 className="font-semibold text-lg">Need live help?</h5>
                <p>proty-support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl mb-4">About Us</h4>
            <ul className="space-y-3">
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
            <ul className="space-y-3">
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
            <ul className="space-y-3">
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
            <div className="flex">
              <input
                type="email"
                className="p-3 w-2/3 rounded-l-lg bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
              <button className="p-3 w-1/3 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between text-sm mt-8">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
          <div className="flex">
            <h5>Follow us</h5>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
