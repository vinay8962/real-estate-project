import React from "react";
import CTASection from "../components/CTASection";
import ContactSellers from "../components/ContactSellers";
import MoreAboutForm from "../components/MoreAboutForm";
import ImagePropertyDetails from "../components/ImagePropertyDetails";
import {
  CiHeart,
  CiShare2,
  CiLocationOn,
  CiHome,
  CiCrop,
  CiRuler,
} from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";

import { IoHammerOutline } from "react-icons/io5";

import { PiGarageLight } from "react-icons/pi";
import { IoMdBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { SlPrinter } from "react-icons/sl";

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
          </div>

          {/* Right Section - Contact Forms */}
          <div className="flex flex-col gap-8">
            <ContactSellers />
            <MoreAboutForm />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <CTASection />
    </>
  );
};

export default PropertyDetails;
