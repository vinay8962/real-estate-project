import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Seller from "../assets/avatar/seller.jpg";

const ContactSellers = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white  rounded-2xl border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Sellers</h2>

      {/* Seller Info Section */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={Seller}
          alt="Seller"
          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Shara Conner</h2>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <IoCallOutline className="mr-2 text-primary" /> 1-333-345-6868
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <MdOutlineMail className="mr-2 text-primary" /> xyz@gmail.com
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="How can an agent help"
            rows="4"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>
        <button className="w-full py-3 text-white font-semibold bg-primary hover:bg-primary-dark rounded-xl">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactSellers;
