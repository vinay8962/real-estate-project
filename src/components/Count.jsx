import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../assets/section/section-realty.jpg";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Count = () => {
  const [inView, setInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 100 }}
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

  return (
    <div className="relative w-full h-auto py-12 px-4 md:px-16">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      <div
        ref={countRef}
        className="relative z-10 text-center text-white py-12"
      >
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {splitText("Market Your Property With Realty")}
          </h1>
          <p className="text-sm md:text-lg text-gray-300">
            No obligation market appraisal for your property today. Our virtual
            options are still available if you prefer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-48 h-48 md:w-72 md:h-72 rounded-full">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={26} duration={3} /> : "0"}+
            </h1>
            <p className="text-sm md:text-lg text-gray-300">Year of Business</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-48 h-48 md:w-72 md:h-72 rounded-full">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={4130} duration={3} /> : "0"}
            </h1>
            <p className="text-sm md:text-lg text-gray-300">Properties Sold</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-48 h-48 md:w-72 md:h-72 rounded-full">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={98} duration={3} /> : "0"}%
            </h1>
            <p className="text-sm md:text-lg text-gray-300">Happy Customers</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-48 h-48 md:w-72 md:h-72 rounded-full">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={1780} duration={3} /> : "0"}
            </h1>
            <p className="text-sm md:text-lg text-gray-300">
              Transactions Handled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
