import React from "react";
import { FaRegStar, FaSearch, FaStar } from "react-icons/fa"; // Import icons
import Image from "../assets/section/page-title-career.jpg";
import CTASection from "../components/CTASection";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";
import sectionBenefitsOne from "../assets/section/section-benefits-1.jpg";
import sectionBenefitsTwo from "../assets/section/section-benefits-2.jpg";
import { GiHeartPlus } from "react-icons/gi";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { MdFamilyRestroom } from "react-icons/md";
// import person3 from "../assets/section/person-3.png";
// import avatar18 from "../assets/avatar/avt-png18.png";

const Career = () => {
  // Updated Job List with Different Job Titles
  const jobs = [
    { PositionName: "Frontend Developer", Location: "New York", Package: 85 },
    {
      PositionName: "Backend Developer",
      Location: "San Francisco",
      Package: 95,
    },
    { PositionName: "UI/UX Designer", Location: "Los Angeles", Package: 75 },
    { PositionName: "Full Stack Developer", Location: "Chicago", Package: 105 },
    { PositionName: "Mobile App Developer", Location: "Seattle", Package: 90 },
    { PositionName: "Product Manager", Location: "Austin", Package: 120 },
    { PositionName: "DevOps Engineer", Location: "Boston", Package: 110 },
    {
      PositionName: "Data Scientist",
      Location: "Washington D.C.",
      Package: 130,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00000073]"></div>

        {/* Content */}
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            A Culture of Inclusivity and Belonging
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center gap-2 py-1 h-16">
            <input
              type="text"
              placeholder="Search for careers..."
              className="px-4 py-2 w-full h-full md:w-2/3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-primary h-full text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark transition">
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Job Section */}
      <div className="w-full py-10">
        <div className="w-full text-center mb-6">
          <h1 className="text-4xl font-bold">Best Job For You At Proty</h1>
          <p className="text-paragraph">
            We connect you directly to the person that knows the most about a
            property for sale, the listing agent.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="flex justify-center overflow-hidden">
          <div className=" grid w-full md:px-20 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center my-10">
          <button className="w-10/12 md:w-1/6 h-14 text-xl font-semibold hover:bg-[#2c2e33] rounded-2xl bg-primary text-white">
            Load more
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 ">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative my-10 md:my-1">
          <motion.img
            src={sectionBenefitsOne}
            alt="Benefit One"
            className="w-9/12 sm:w-8/12 md:w-1/2 lg:w-9/12 xl:w-5/12 h-auto rounded-lg shadow-2xl"
            initial={{ y: 50, opacity: 0, rotate: 5 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={sectionBenefitsTwo}
            alt="Benefit Two"
            className="absolute top-20 left-12 sm:left-20 md:left-24 lg:left-28 w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-auto rounded-lg shadow-xl z-10"
            initial={{ y: -50, opacity: 0, rotate: -5 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-800">
            Benefits when you work at Proty
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sollicitudin ipsum ullamcorper, pulvinar ipsum in, imperdiet ante.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Proin pharetra rhoncus maximus. Sed est dolor, consectetur eu
            sagittis.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Health Care */}
            <div className="flex flex-col items-center gap-2  border-r">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 flex justify-center items-center rounded-2xl">
                <GiHeartPlus className="text-3xl sm:text-4xl text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Health Care
              </h2>
            </div>

            {/* Salary & Bonus */}
            <div className="flex flex-col items-center gap-2  border-r">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 flex justify-center items-center rounded-2xl">
                <LiaPiggyBankSolid className="text-3xl sm:text-4xl text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Attractive Salary & Bonus
              </h2>
            </div>

            {/* Family Life */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 flex justify-center items-center rounded-2xl">
                <MdFamilyRestroom className="text-3xl sm:text-4xl text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Family Life
              </h2>
            </div>
          </div>

          {/* Join Team Button */}
          <div className="w-full flex justify-center md:justify-start mt-6">
            <button className="bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      {/* <div className="w-full flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 py-20"> */}
      {/* Left: Text Content */}
      {/* <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Reviews from employees working at Proty
          </h1>
          <p className="text-lg text-paragraph leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sollicitudin ipsum ullamcorper, pulvinar ipsum in, imperdiet ante.
            In feugiat tortor semper nibh rhoncus volutpat.
          </p>
          <p className="text-lg text-paragraph leading-relaxed">
            Proin pharetra rhoncus maximus. Sed est dolor, consectetur eu
            sagittis.
          </p>
          <div>
            <button className="bg-primary text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              More stories
            </button>
          </div>
        </div> */}

      {/* Right: Testimonial Section */}
      {/* <div className="w-full md:w-1/2 flex flex-col items-center gap-6 relative"> */}
      {/* Background Circle */}
      {/* <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4/5 h-96 bg-[#6bf9dd7d] rounded-full opacity-50 -z-10"></div> */}

      {/* Person Image */}
      {/* <div className="relative w-full flex justify-center">
            <img
              src={person3}
              alt="Person"
              className="object-cover w-40 md:w-48 lg:w-9/12 "
            /> */}

      {/* Right Side Star Ratings */}
      {/* <div className="absolute top-3 right-0 md:right-[-5%] w-24 bg-white shadow-xl flex justify-center items-center h-8 rounded-xl">
              <div className="flex text-yellow-500 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div> */}

      {/* Floating Profile Card */}
      {/* <div className="absolute top-[-10%] left-5 md:left-10 bg-white rounded-xl shadow-2xl flex items-center gap-3 w-40 md:w-44 h-16 md:h-20 p-2 md:p-3"> */}
      {/* Avatar Image */}
      {/* <img
              src={avatar18}
              alt="Cody Fisher"
              className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
            /> */}
      {/* Text Content */}
      {/* <div className="flex flex-col justify-center">
              <h2 className="text-sm md:text-base font-semibold text-gray-800">
                Cody Fisher
              </h2>
              <p className="text-xs md:text-sm font-medium text-gray-600">
                CEO, Real
              </p>
            </div>
          </div> */}

      {/* Testimonial Content */}
      {/* <div className="relative bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-start gap-3 max-w-sm md:max-w-md text-center"> */}
      {/* Star Ratings */}
      {/* <div className="flex justify-center text-yellow-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div> */}

      {/* Testimonial Text */}
      {/* <p className="text-gray-700 text-sm md:text-base leading-relaxed text-start">
              Vivamus at nisl ornare, vulputate turpis finibus, posuere metus.
              Donec in placerat felis. Praesent ante tellus, dignissim nec
              imperdiet ac.
            </p> */}

      {/* Profile Section */}
      {/* <div className="flex items-center justify-center gap-3"> */}
      {/* Avatar Image */}
      {/* <img
                src={avatar18}
                alt="Cody Fisher"
                className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
              /> */}

      {/* Text Content */}
      {/* <div className="flex flex-col text-center">
                <h2 className="text-sm md:text-base font-semibold text-gray-800">
                  Cody Fisher
                </h2>
                <p className="text-xs md:text-sm font-medium text-gray-600">
                  CEO, Real
                </p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default Career;
