import React, { useState } from "react";
import CTASection from "../components/CTASection";
import { GrSort } from "react-icons/gr";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaDollarSign, FaListUl } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import House1 from "../assets/section/box-house-10.jpg";
import House2 from "../assets/section/box-house-11.jpg";
import House4 from "../assets/section/box-house-13.jpg";
import House5 from "../assets/section/box-house-14.jpg";
import House6 from "../assets/section/box-house-15.jpg";
import House7 from "../assets/section/box-house-16.jpg";
import House8 from "../assets/section/box-house-17.jpg";
import House9 from "../assets/section/box-house-18.jpg";
import House3 from "../assets/section/box-house-19.jpg";
import { CiBookmark, CiLocationOn, CiZoomIn } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const PropertyList = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const navigate = useNavigate();
  const propertyCards = [
    {
      image: House1,
      title: "Elegant Studio Flat",
      location: "102 Ingraham St, Brooklyn, NY 11237",
      details: "3 Bed 3 Bath 4,043 Sqft",
      price: 8900,
    },
    {
      image: House2,
      title: "Modern Family Home",
      location: "45 Sunset Blvd, Los Angeles, CA 90026",
      details: "4 Bed 2 Bath 3,200 Sqft",
      price: 12000,
    },
    {
      image: House3,
      title: "Cozy Countryside Cottage",
      location: "78 Greenfield Lane, Vermont, VT 05401",
      details: "2 Bed 1 Bath 1,500 Sqft",
      price: 7500,
    },
    {
      image: House4,
      title: "Luxury Penthouse",
      location: "500 5th Ave, New York, NY 10036",
      details: "5 Bed 4 Bath 5,500 Sqft",
      price: 25000,
    },
    {
      image: House5,
      title: "Spacious Suburban Home",
      location: "300 Maple St, Springfield, IL 62704",
      details: "4 Bed 3 Bath 4,000 Sqft",
      price: 15000,
    },
    {
      image: House6,
      title: "Charming Victorian House",
      location: "200 Pine Ave, Boston, MA 02110",
      details: "3 Bed 2 Bath 3,500 Sqft",
      price: 13500,
    },
    {
      image: House7,
      title: "Contemporary Urban Loft",
      location: "600 River Rd, Austin, TX 78701",
      details: "2 Bed 1 Bath 2,200 Sqft",
      price: 11000,
    },
    {
      image: House9,
      title: "Secluded Mountain Retreat",
      location: "50 High Point Dr, Denver, CO 80203",
      details: "3 Bed 2 Bath 3,000 Sqft",
      price: 17000,
    },
    {
      image: House8,
      title: "Beachside Bungalow",
      location: "700 Ocean Ave, Miami, FL 33139",
      details: "2 Bed 2 Bath 2,800 Sqft",
      price: 14500,
    },
  ];
  return (
    <>
      <div className="w-full my-20 px-4 md:px-10">
        {/* Breadcrumb Section */}
        <div className="w-full flex">
          <div className="w-full py-4 px-4 md:px-12 text-sm text-gray-700">
            <p className="gap-3 flex">
              <span className="text-primary font-bold">Home</span> &gt;
              <span className="font-bold text-paragraph">Property Listing</span>
            </p>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-8 gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Property listing
          </h1>

          {/* Control Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-primary    hover:bg-primary hover:text-white"
              onClick={() => setIsFilterModalOpen(true)}
            >
              Filter <GrSort className="" />
            </button>

            <button className="flex items-center gap-2 border  hover: text-primary border-gray-300 px-3 py-3 rounded-md hover:bg-primary hover:text-white">
              <BsGrid3X3Gap />
            </button>

            <button className="flex items-center border border-gray-300 text-primary px-3 py-3 rounded-md border-gray-300 px-3 py-3 rounded-md hover:bg-primary hover:text-white">
              <FaListUl />
            </button>

            <select className="border border-gray-300 px-4 py-2 rounded-md">
              <option value="default">Sort by (Default)</option>
              <option value="oldest">Oldest</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Filter Modal */}
        {isFilterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl relative">
              <div className="space-y-6">
                {/* Title Section */}
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold">Advanced Search</h4>
                  <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => setIsFilterModalOpen(false)}
                  >
                    <RxCross1 />
                  </button>
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">Price</span>
                    <div className="text-sm text-gray-500">
                      <span>From: </span>
                      <span className="font-semibold" id="slider-range-value1">
                        $100
                      </span>
                      <span> to </span>
                      <span className="font-semibold" id="slider-range-value2">
                        $545,970
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded relative">
                    <div className="absolute bg-blue-500 h-2 rounded-l w-2/3"></div>
                  </div>
                </div>

                {/* Size Range */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium">Size Range</span>
                    <div className="text-sm text-gray-500">
                      <span>From: </span>
                      <span className="font-semibold" id="slider-range-value01">
                        0
                      </span>
                      <span> to </span>
                      <span className="font-semibold" id="slider-range-value02">
                        1,000
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded relative">
                    <div className="absolute bg-blue-500 h-2 rounded-l w-1/5"></div>
                  </div>
                </div>

                {/* Select Dropdowns */}
                <div className="grid grid-cols-2 gap-4">
                  <select className="border border-gray-300 rounded-md p-2 w-full">
                    <option>Province / States</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Florida</option>
                    <option>New York</option>
                  </select>

                  <select className="border border-gray-300 rounded-md p-2 w-full">
                    <option>Rooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>

                  <select className="border border-gray-300 rounded-md p-2 w-full">
                    <option>Bath: Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>

                  <select className="border border-gray-300 rounded-md p-2 w-full">
                    <option>Beds: Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>

                {/* Amenities Checkboxes */}
                <div>
                  <h5 className="text-base font-medium mb-2">Amenities:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Bed linens",
                      "Carbon alarm",
                      "Check-in lockbox",
                      "Coffee maker",
                      "Fireplace",
                      "Extra pillows",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-blue-600"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick={() => setIsFilterModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {propertyCards.map((property, index) => (
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
      <div className="w-full">
        <hr />
      </div>
      {/* Pagination Section */}
      <div className="max-w-6xl text-xl mx-auto flex flex-col md:flex-row justify-between items-center my-16 gap-4">
        <div>
          <p className="text-base text-paragraph">Showing 1-8 of 42 results.</p>
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="arrow">
              <Link
                to="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white font-bold text-2xl"
              >
                <IoIosArrowBack />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                ...
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                20
              </Link>
            </li>
            <li className="arrow">
              <Link
                to="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white text-2xl"
              >
                <IoIosArrowForward />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default PropertyList;
