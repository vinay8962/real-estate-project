import React from "react";
import { motion } from "framer-motion";
import appraisalImage from "../assets/section/section-appraisal.jpg";
import Person from "../assets/section/person-2.png";

// Function to split the text into an array of letters
const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.03, // Stagger the animation for each letter
        duration: 0.3,
      }}
    >
      {char}
    </motion.span>
  ));
};

const AppraisalSection = () => {
  return (
    <div className="w-full  relative hidden md:flex px-2 py-2 md:px-32 md:py-20  overflow-hidden">
      <img
        src={appraisalImage}
        alt="Appraisal Background"
        className="w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute top-0 left-36 right-0 bottom-0 flex flex-col justify-center items-start text-center text-white bg-opacity-50 p-8">
        <motion.h1 className="text-5xl font-semibold">
          {splitText("Are You Selling Or Renting Your Property?")}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          transition={{ delay: 0.3 }}
        >
          {splitText(
            "Thousands of luxury home enthusiasts just like you visit our website."
          )}
        </motion.p>

        <motion.button
          className="mt-6 py-2 px-4 bg-white text-primary font-bold rounded-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          transition={{ delay: 0.5 }}
        >
          Request your free appraisal
        </motion.button>
      </div>

      <motion.div className="absolute bottom-20 right-48 hidden md:flex">
        <motion.img
          src={Person}
          alt="Person"
          className="w-full h-full"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        />
      </motion.div>
    </div>
  );
};

export default AppraisalSection;
