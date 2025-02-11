import React from "react";
import CTASection from "../components/CTASection";
import ContactSellers from "../components/ContactSellers";
import MoreAboutForm from "../components/MoreAboutForm";
import PropertyImage1 from "../assets/section/property-detail.jpg";
import { FaPlay } from "react-icons/fa";
import ImagePropertyDetails from "../components/ImagePropertyDetails";
import {
  CiHeart,
  CiShare2,
  CiLocationOn,
  CiHome,
  CiCrop,
  CiRuler,
} from "react-icons/ci";
import { IoArrowDownCircleOutline } from "react-icons/io5";

import { LuArrowRightLeft } from "react-icons/lu";

import { IoHammerOutline } from "react-icons/io5";

import { PiGarageLight } from "react-icons/pi";
import { IoMdBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { SlPrinter } from "react-icons/sl";
import { motion } from "framer-motion";
import GetDirection from "../components/GetDirection";
import FloorPlans from "../components/FloorPlans";
import LoanCalculator from "../components/LoanCalculator";
import SimilarProperty from "../components/SimilarProperty";

const PropertyDetails = () => {
  const PropertyDetails = [
    { icon: <CiHome />, label: "ID", value: "2297" },
    { icon: <LuArrowRightLeft />, label: "Type", value: "House" },
    { icon: <PiGarageLight />, label: "Garages", value: "1" },
    { icon: <IoMdBed />, label: "Bedrooms", value: "2 rooms" },
    { icon: <GiBathtub />, label: "Bathrooms", value: "2" },
    { icon: <CiCrop />, label: "Land Size", value: "2,000 SqFt" },
    {
      icon: <IoHammerOutline />,
      label: "Year Built",
      value: "2024",
    },
    { icon: <CiRuler />, label: "Size", value: "900 SqFt" },
  ];

  const propertyData = [
    { label: "ID", value: "#1234" },
    { label: "Price", value: "$7,500" },
    { label: "Size", value: "150 sqft" },
    { label: "Rooms", value: "9" },
    { label: "Baths", value: "3" },
    { label: "Beds", value: "7.328" },
    { label: "Year Built", value: "2022" },
    { label: "Type", value: "Villa" },
    { label: "Status", value: "For sale" },
    { label: "Garage", value: "1" },
  ];
  return (
    <>
      <div className="w-full my-20 px-4 md:px-10">
        {/* Breadcrumb Section */}
        <div className="w-full flex">
          <div className="w-full py-4 px-4 md:px-12 text-sm text-gray-700">
            <p className="flex gap-3">
              <span className="text-primary font-bold cursor-pointer hover:underline">
                Home
              </span>
              &gt;
              <span className="font-bold text-paragraph">Property Listing</span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <ImagePropertyDetails />
        </div>
        {/* Property Details Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          {/* Left Section - Image Details */}
          <div className="col-span-2">
            <div className="w-full p-6 bg-white shadow-lg rounded-xl">
              {/* Title and Price Section */}
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-semibold">Elegant Studio Flat</h1>
                <div className="flex items-center">
                  <h1 className="text-primary text-4xl font-bold">$250,00</h1>
                  <span className="ml-1 text-lg text-black">/month</span>
                </div>
              </div>

              <hr className="my-4" />

              {/* Location and Features Section */}
              <div className="flex justify-between items-start my-10">
                <div>
                  <p className="flex items-center text-gray-600 mb-2">
                    <CiLocationOn className="mr-1 text-primary text-lg" />
                    102 102 Ingraham St, Brooklyn, NY 11237
                  </p>
                  <p className="text-gray-700">3 Bed · 3 Bath · 4,043 Sqft</p>
                </div>

                {/* Action Buttons Section */}
                <div className="flex gap-4">
                  <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
                    <CiHeart className="text-xl" />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
                    <FaArrowRightArrowLeft className="text-xl" />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
                    <SlPrinter className="text-xl" />
                  </div>
                  <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-primary hover:text-white">
                    <CiShare2 className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Property Specifications Section */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10">
                {/* Individual property info */}
                {PropertyDetails.map(({ icon, label, value }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-start  gap-4 md:gap-2 p-2"
                  >
                    <div className="w-14 h-14 border rounded-lg flex justify-center items-center bg-gray-50 shadow-md">
                      {React.cloneElement(icon, {
                        className: "text-3xl text-primary",
                      })}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 flex flex-col leading-tight">
                      <span className="font-medium">{label}:</span>
                      <span className="font-semibold text-black">{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-start">
                <button className=" bg-primary px-10 py-4 font-bold text-white rounded-2xl">
                  Ask a question
                </button>
              </div>
            </div>
            {/* Video */}
            <div className="my-8">
              {/* Title */}
              <h1 className="text-2xl font-bold mb-4">Video</h1>

              {/* Video/Image Wrapper */}
              <div className="relative group w-full p-4 md:p-8 mx-auto">
                {/* Image */}
                <img
                  src={PropertyImage1}
                  alt="Property Video"
                  className="w-full h-full  object-cover rounded-xl"
                />

                {/* Ripple Animated Play Button */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex justify-center items-center cursor-pointer ripple">
                    <FaPlay className="text-primary text-3xl" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* property Details */}
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
              <motion.h1
                className="text-2xl font-bold text-black mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Property Details
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-gray-700 mb-8"
              >
                3 Units in North Hollywood with upside potential through
                construction of an ADU (buyer to verify). Unit mix consists of
                (3) 3+1 bath units. The building is a total of 2,660 square feet
                and situated on a 6,001 square foot lot. Easy access to the 101,
                170, and 134 freeways. The building is separately metered for
                gas and electricity.
              </motion.p>
              <p className="text-primary flex items-center gap-2 font-bold">
                Read More <IoArrowDownCircleOutline className="text-xl" />
              </p>
              <motion.ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {propertyData.map((detail, index) => (
                  <motion.li
                    key={index}
                    className="flex  gap-4 justify-start text-center "
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <p className="font-bold w-20 flex justify-start">
                      {detail.label}
                    </p>{" "}
                    <p>{detail.value}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Amenities And Features */}
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
              <h1 className="text-2xl font-bold text-black mb-6">
                Amenities And Features
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Smoke alarm
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Carbon
                    monoxide alarm
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> First aid kit
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Self check-in
                    with lockbox
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Security
                    cameras
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Hangers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Bed linens
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Extra pillows
                    & blankets
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Iron
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> TV with
                    standard cable
                  </li>
                </ul>

                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Refrigerator
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Microwave
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Dishwasher
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✔</span> Coffee maker
                  </li>
                </ul>
              </div>
            </div>

            {/* Get Direction */}
            <div>
              <GetDirection />
            </div>

            {/* Floor Plans */}
            <div>
              <FloorPlans />
            </div>

            <div>
              <LoanCalculator />
            </div>
          </div>

          {/* Right Section - Contact Forms */}
          <div className="col-span-1 space-y-8">
            <div className="sticky top-10 space-y-8">
              <ContactSellers />
              <MoreAboutForm />
            </div>
          </div>
        </div>

        <div>
          <SimilarProperty />
        </div>
      </div>

      {/* Call to Action Section */}
      <CTASection />
    </>
  );
};

export default PropertyDetails;
