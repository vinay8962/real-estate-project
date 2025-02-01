import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../assets/section/section-realty.jpg";
import CountUp from "react-countup";

const Count = () => {
  // State to track if the element is in view
  const [inView, setInView] = useState(false);
  const countRef = useRef(null);

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger count animation when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );
    if (countRef.current) {
      observer.observe(countRef.current); // Observe the section
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      {/* Background Image with Fixed Position */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Count Section */}
      <div
        ref={countRef}
        className="relative z-10 text-center text-white py-16 px-4"
      >
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Market Your Property With Realty
          </h1>
          <p className="text-lg text-gray-300">
            No obligation market appraisal for your property today. Our virtual
            options are still available if you prefer.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-72 h-72 rounded-full">
            <h1 className="text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={26} duration={3} /> : "0"}+
            </h1>
            <p className="text-lg text-gray-300">Year of Business</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25 w-72 h-72  rounded-full">
            <h1 className="text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={4130} duration={3} /> : "0"}
            </h1>
            <p className="text-lg text-gray-300">Properties Sold</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25  w-72 h-72  rounded-full">
            <h1 className="text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={98} duration={3} /> : "0"}%
            </h1>
            <p className="text-lg text-gray-300">Happy Customers</p>
          </div>

          <div className="flex flex-col justify-center items-center max-w-xs border border-gray-100/25  w-72 h-72  rounded-full">
            <h1 className="text-7xl font-bold text-white mb-2">
              {inView ? <CountUp start={0} end={1780} duration={3} /> : "0"}
            </h1>
            <p className="text-lg text-gray-300">Transactions Handled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
