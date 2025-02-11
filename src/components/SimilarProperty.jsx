import React from "react";
import { CiBookmark, CiZoomIn, CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import House1 from "../assets/section/box-house-10.jpg";
import House2 from "../assets/section/box-house-11.jpg";
import House3 from "../assets/section/box-house-13.jpg";

const SimilarProperty = () => {
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
  ];

  return (
    <div className="py-10 ">
      <div className="text-start mb-8 ml-10">
        <h1 className="text-4xl font-bold text-black">Similar Properties</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {propertyCards.map((property, index) => (
          <div key={index} className="group">
            <div className="border rounded-2xl shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative w-full h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">
                  Featured
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-md">
                  For Sale
                </div>

                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <button className="bg-white text-primary p-3 rounded-full m-2 hover:bg-gray-200 shadow-md">
                    <CiBookmark size={24} />
                  </button>
                  <button className="bg-white text-primary p-3 rounded-full m-2 hover:bg-gray-200 shadow-md">
                    <CiZoomIn size={24} />
                  </button>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{property.title}</h2>
                <p className="flex items-center text-sm text-gray-600 font-semibold mb-1">
                  <CiLocationOn className="mr-1" /> {property.location}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {property.details}
                </p>
              </div>

              <hr />

              {/* Price and Details Button */}
              <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold text-primary flex items-center">
                  <FaDollarSign className="mr-1" /> {property.price}
                </h2>
                <button className="w-1/3 py-2 font-semibold text-primary hover:bg-primary hover:text-white border border-primary rounded-xl transition">
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

export default SimilarProperty;
