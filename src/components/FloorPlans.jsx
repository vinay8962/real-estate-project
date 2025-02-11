import React, { useState } from "react";
import { motion } from "framer-motion";
import FloorImage from "../assets/section/floor.jpg";
import { LuBath } from "react-icons/lu";
import { IoMdBed } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FloorPlans = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (floor) => {
    setActiveAccordion(activeAccordion === floor ? null : floor);
  };

  return (
    <div className="w-full mx-auto my-8 p-10 max-w-4xl">
      <div className="flex justify-start">
        {" "}
        <h1 className="text-3xl font-bold text-center mb-8">Floor Plans</h1>
      </div>
      {/* First Floor Accordion */}
      <div className="border w-full rounded-lg shadow-md mb-6">
        <button
          className="w-full p-4 flex justify-between items-center text-black font-semibold bg-white hover:bg-gray-100 rounded-t-lg"
          onClick={() => toggleAccordion("firstFloor")}
        >
          <span>First Floor</span>
          <div className="flex gap-4 items-center">
            <p className="flex items-center gap-2 text-gray-600">
              <IoMdBed /> 2 Bedrooms
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <LuBath /> 2 Bathrooms
            </p>
            {activeAccordion === "firstFloor" ? (
              <FiChevronUp className="text-2xl" />
            ) : (
              <FiChevronDown className="text-2xl" />
            )}
          </div>
        </button>
        {activeAccordion === "firstFloor" && (
          <motion.div
            className="p-4 bg-gray-50 border-t flex justify-center items-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={FloorImage}
              alt="First Floor Plan"
              className="rounded-lg"
            />
          </motion.div>
        )}
      </div>

      {/* Second Floor Accordion */}
      <div className="border rounded-lg shadow-md">
        <button
          className="w-full p-4 flex justify-between items-center text-black font-semibold bg-white hover:bg-gray-100 rounded-t-lg"
          onClick={() => toggleAccordion("secondFloor")}
        >
          <span>Second Floor</span>
          <div className="flex gap-4 items-center">
            <p className="flex items-center gap-2 text-gray-600">
              <IoMdBed /> 2 Bedrooms
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <LuBath /> 2 Bathrooms
            </p>
            {activeAccordion === "secondFloor" ? (
              <FiChevronUp className="text-2xl" />
            ) : (
              <FiChevronDown className="text-2xl" />
            )}
          </div>
        </button>
        {activeAccordion === "secondFloor" && (
          <motion.div
            className="p-4 bg-gray-50 border-t flex justify-center items-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={FloorImage}
              alt="Second Floor Plan"
              className="rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FloorPlans;
