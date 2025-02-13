import React, { useEffect, useState } from "react";
import CTASection from "../components/CTASection";
import ContactImage from "../assets/section/section-contact-2.jpg";

import { TbMailFast, TbPhoneCalling } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [51.505, -0.09]; // Example coordinates
  const [scrollZoom, setScrollZoom] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        setScrollZoom(true);
      }
    };

    const handleKeyUp = () => {
      setScrollZoom(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div className="pt-20">
      <div className=" h-[80vh] w-full">
        {/* map use in width full */}
        <MapContainer
          center={position}
          zoom={13}
          className="h-full w-full"
          scrollWheelZoom={scrollZoom}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Selected Location</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="max-w-6xl mx-auto h-[600px] flex items-center justify-center bg-white px-8 py-2 rounded-lg shadow-md opacity-100">
        {/* Contact Heading */}
        <div className="w-full">
          {" "}
          {/* Adjusted the top spacing properly */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              We Would Love to Hear From You
            </h1>
            <p className="text-gray-600 mt-2">
              We'll get to know you to understand your selling goals, explain
              the selling process so you know what to expect.
            </p>
          </div>
          {/* Contact Form */}
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  What are you interested in?
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select</option>
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                  <option value="location">Location</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Contact our experts
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:px-28 rounded-lg shadow-lg">
        {/* bottom contect  */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            We provide the most suitable and quality real estate.
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Estimate your payment with our easy-to-use loan calculator. Then get
            pre-qualified to buy by a local lender.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <GrMapLocation className=" mr-3" size={40} />
              <div className="border-l pl-4">
                <p className="text-gray-500 font-semibold">Office Address</p>
                <p className="text-black">
                  102 Ingraham St, Brooklyn, NY 11237
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TbPhoneCalling className="mr-3" size={40} />
              <div className="border-l pl-4">
                <p className="text-gray-500 font-semibold">Office Number</p>
                <p className="text-black">(603) 555-0123</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TbMailFast className=" mr-3" size={40} />
              <div className="border-l pl-4">
                <p className="text-gray-500 font-semibold">Office Mail</p>
                <p className="text-black">themesflat@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-10/12 rounded-lg shadow-md"
          />
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default Contact;
