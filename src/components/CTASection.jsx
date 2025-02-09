import React from "react";
import { IoSearch } from "react-icons/io5";
import CTA from "../assets/section/cta.png";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <div className="w-full bg-primary md:h-32 p-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
      {/* Image Section */}
      <div className="flex-shrink-0 w-24 md:w-32 mb-4 md:mb-14">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2, type: "spring" },
          }}
          src={CTA}
          alt="Call to Action"
          className="w-full h-auto hidden md:block"
        />
      </div>

      {/* Text Section */}
      <div className="text-white flex-1 text-center md:text-left">
        <h3 className="text-xl md:text-3xl font-semibold mb-2">
          Find a Local Real Estate Agent Today
        </h3>
        <p className="text-sm md:text-base">
          If you’re looking to buy or sell a home, we’ll help you make the most
          money possible.
        </p>
      </div>

      {/* Button Section */}
      <div className="w-full md:w-auto">
        <button className="flex items-center justify-center w-full md:w-60 h-12 bg-white text-primary font-bold rounded-2xl gap-2 hover:bg-paragraph hover:text-white transition-all duration-500">
          Find your local agent <IoSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default CTASection;
