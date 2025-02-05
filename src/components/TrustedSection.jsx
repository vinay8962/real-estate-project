import React from "react";
import ImageOne from "../assets/items/section-trusted-1.png";
import ImageTwo from "../assets/items/section-trusted-2.png";
import { GrMapLocation } from "react-icons/gr";
import { motion } from "framer-motion";

const TrustedSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[850px] h-auto  w-full py-28 bg-subPrimary1 overflow-hidden">
      {/* Left Section */}
      <div className=" md:w-1/2 w-full mx-auto ">
        <div className="flex flex-col items-center justify-center px-2 md:px-16">
          <h1 className="text-5xl font-semibold mb-4">
            Trusted By 100+ Million Buyers
          </h1>
          <p className="text-paragraph">
            We connect you directly to the person that knows the most about a
            property for sale, the listing agent
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative px-2 md:px-16 md:py-2">
          <div className="flex items-start h-56 bg-white p-4 mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="">
              <div className="flex gap-2 items-center">
                <div className="w-16 h-12 flex justify-center items-center rounded-xl bg-subPrimary2">
                  <GrMapLocation className="text-primary w-8 h-8 flex-shrink-0" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Explore Great Neighborhoods
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sollicitudin ipsum eu massa.
              </p>
              <button className="text-primary font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-start h-56 bg-white p-4 mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="">
              <div className="flex gap-2 items-center">
                <div className="w-16 h-12 flex justify-center items-center rounded-xl bg-subPrimary2">
                  <GrMapLocation className="text-primary w-8 h-8 flex-shrink-0" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Find the Best Agent for You
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sollicitudin ipsum eu massa.
              </p>
              <button className="text-primary font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-start h-56 bg-white p-4 mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="">
              <div className="flex gap-2 items-center">
                <div className="w-16 h-12 flex justify-center items-center rounded-xl bg-subPrimary2">
                  <GrMapLocation className="text-primary w-8 h-8 flex-shrink-0" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Find highly rated apartments
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sollicitudin ipsum eu massa.
              </p>
              <button className="text-primary font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-start h-56 bg-white p-4 mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="">
              <div className="flex gap-2 items-center">
                <div className="w-16 h-12 flex justify-center items-center rounded-xl bg-subPrimary2">
                  <GrMapLocation className="text-primary w-8 h-8 flex-shrink-0" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Search Recent Property Sales
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sollicitudin ipsum eu massa.
              </p>
              <button className="text-primary font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 hidden  relative md:flex justify-start items-center">
        <motion.div
          className="absolute z-10 right-52 top-1 bottom-0 "
          initial={{
            x: 400,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            type: "spring",
            stiffness: 120, // Controls the bounciness
            damping: 50, // Reduces oscillation
            duration: 1.2, // Optional for fine-tuning
          }}
        >
          {" "}
          <img src={ImageOne} alt="ImageOne" className=" h-auto" />
        </motion.div>
        <motion.div
          className="absolute z-0 right-6 top-12"
          initial={{
            x: 400,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            type: "spring",
            stiffness: 120, // Controls the bounciness
            damping: 50, // Reduces oscillation
            duration: 1.2, // Optional for fine-tuning
          }}
        >
          <img src={ImageTwo} alt="ImageTwo" className=" " />
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedSection;
