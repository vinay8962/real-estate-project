import React from "react";
import background from "../assets/section/page-title-2.jpg";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

const HeroSection = () => {
  const Heading = "Your Way Home Starts Here";
  const Text =
    "Thousands of luxury home enthusiasts just like you visit our website.";

  const letterAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.1,
        ease: "easeOut",
      },
    }),
  };

  const textAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.05,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white bg-black/50 p-6">
        {/* Animated Heading */}
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-8">
          {Heading.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={letterAnimation}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Subtext */}
        <p className="text-lg md:text-2xl tracking-wide mb-8">
          {Text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={textAnimation}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="w-32 h-12 font-bold py-2 px-4 bg-white text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-2xl">
            For Rent
          </button>
          <button className="w-32 h-12 font-bold py-2 px-4 bg-white text-black hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-2xl">
            For Sale
          </button>
        </div>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-4/5">
          <div className=" md:flex gap-4">
            <input
              type="text"
              placeholder="Address, City, ZIP..."
              className="col-span-2 p-3 border rounded w-full"
            />
            <select className="p-3 border rounded w-full text-Text1">
              <option>Property Type</option>
              <option>Bungalow</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
            <select className="p-3 border rounded w-full text-Text1">
              <option>Location</option>
              <option>India</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Agra</option>
            </select>
            <div className="flex justify-end  ">
              <button className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-2xl">
                Search <IoSearch className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
