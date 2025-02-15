import React, { useState } from "react";
import { CiBookmark, CiLocationOn, CiZoomIn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import House1 from "../assets/section/box-house-10.jpg";
import House2 from "../assets/section/box-house-11.jpg";
import House4 from "../assets/section/box-house-13.jpg";
import House5 from "../assets/section/box-house-14.jpg";
import House6 from "../assets/section/box-house-15.jpg";
import House7 from "../assets/section/box-house-16.jpg";
import House8 from "../assets/section/box-house-17.jpg";
import House9 from "../assets/section/box-house-18.jpg";
import House3 from "../assets/section/box-house-19.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Listing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "For rent", "For sale"];

  const allProperties = [
    {
      image: House1,
      title: "Elegant Studio Flat",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      details: "3 Bed 3 Bath 4,043 Sqft",
      price: 8900,
      type: "For rent",
    },
    {
      image: House2,
      title: "Modern Family Home",
      location: "45 Sunset Blvd, Los Angeles, CA 90026",
      details: "4 Bed 2 Bath 3,200 Sqft",
      price: 12000,
      type: "For rent",
    },
    {
      image: House3,
      title: "Cozy Countryside Cottage",
      location: "78 Greenfield Lane, Vermont, VT 05401",
      details: "2 Bed 1 Bath 1,500 Sqft",
      price: 7500,
      type: "For rent",
    },
    {
      image: House4,
      title: "Luxury Penthouse",
      location: "500 5th Ave, New York, NY 10036",
      details: "5 Bed 4 Bath 5,500 Sqft",
      price: 25000,
      type: "For sale",
    },
    {
      image: House5,
      title: "Spacious Suburban Home",
      location: "300 Maple St, Springfield, IL 62704",
      details: "4 Bed 3 Bath 4,000 Sqft",
      price: 15000,
      type: "For rent",
    },
    {
      image: House6,
      title: "Charming Victorian House",
      location: "200 Pine Ave, Boston, MA 02110",
      details: "3 Bed 2 Bath 3,500 Sqft",
      price: 13500,
      type: "For sale",
    },
    {
      image: House7,
      title: "Contemporary Urban Loft",
      location: "600 River Rd, Austin, TX 78701",
      details: "2 Bed 1 Bath 2,200 Sqft",
      price: 11000,
      type: "For sale",
    },
    {
      image: House9,
      title: "Secluded Mountain Retreat",
      location: "50 High Point Dr, Denver, CO 80203",
      details: "3 Bed 2 Bath 3,000 Sqft",
      price: 17000,
      type: "For rent",
    },
    {
      image: House8,
      title: "Beachside Bungalow",
      location: "700 Ocean Ave, Miami, FL 33139",
      details: "2 Bed 2 Bath 2,800 Sqft",
      price: 14500,
      type: "For sale",
    },
  ];

  const filteredProperties =
    activeTab === "All"
      ? allProperties
      : allProperties.filter((property) => property.type === activeTab);

  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h1 className="font-semibold text-4xl">Listing</h1>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-lg font-medium focus:outline-none transition-all border-b-2 ${
                activeTab === tab
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-gray-500 hover:text-primary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-1">
        {filteredProperties.map((property, index) => (
          <div key={index} className="p-4 group">
            <div className="border rounded-2xl shadow-md relative overflow-hidden">
              {/* Image Section */}
              <div className="w-full h-48 relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-2 rounded-md">
                  Featured
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-3 py-2 rounded-md">
                  For Sale
                </div>

                {/* Hover Icons */}
                <div className="h-full absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="bg-white text-primary p-3 rounded-full m-2 hover:bg-paragraph shadow-md">
                    <CiBookmark size={24} />
                  </button>
                  <button className="bg-white text-primary p-3 rounded-full m-2 hover:bg-paragraph shadow-md">
                    <CiZoomIn size={24} />
                  </button>
                </div>
              </div>

              {/* Property Info */}
              <div className="mt-4 p-6">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="flex items-center text-sm text-gray-600 font-semibold">
                  <CiLocationOn className="mr-1" /> {property.location}
                </p>
                <p className="text-sm mt-1 font-semibold">{property.details}</p>
              </div>
              <hr className="w-full" />
              <div className="mt-2 flex justify-between p-4 items-center">
                <h2 className="text-xl font-bold text-primary flex items-center">
                  <FaDollarSign className="mr-1" /> {property.price}
                </h2>
                <button
                  className="w-1/3 h-12 font-semibold text-primary hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border border-primary rounded-xl"
                  onClick={() => navigate("/property-details")}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
