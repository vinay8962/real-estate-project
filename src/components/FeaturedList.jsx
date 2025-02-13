import React from "react";
import box1 from "../assets/section/box-listing-1.jpg";
import box2 from "../assets/section/box-listing-2.jpg";
import box3 from "../assets/section/box-listing-3.jpg";
import box4 from "../assets/section/box-listing-4.jpg";
import box5 from "../assets/section/box-listing-5.jpg";

const FeaturedList = () => {
  const listData = [
    {
      image: box1,
      title: "Casa Lomas de Machalí Machas",
      details: "3 Bed | 3 Bath | 4,043 Sqft",
      price: "$720,000",
    },
    {
      image: box2,
      title: "Luxury Villa in California",
      details: "4 Bed | 5 Bath | 5,200 Sqft",
      price: "$1,250,000",
    },
    {
      image: box3,
      title: "Modern Apartment in NYC",
      details: "2 Bed | 2 Bath | 2,100 Sqft",
      price: "$850,000",
    },
    {
      image: box4,
      title: "Beachside House in Miami",
      details: "5 Bed | 6 Bath | 6,500 Sqft",
      price: "$2,100,000",
    },
    {
      image: box5,
      title: "Mountain Retreat in Colorado",
      details: "4 Bed | 4 Bath | 3,800 Sqft",
      price: "$950,000",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 border rounded-2xl py-6">
      <h1 className="text-3xl font-semibold mb-6 text-start text-gray-800">
        Featured Listings
      </h1>

      <div className="space-y-6">
        {listData.map((item, index) => (
          <div
            key={index}
            className="h-28 border-b  rounded-lg overflow-hidden flex hover:shadow-lg transition"
          >
            {/* Left Side - Image */}
            <div className="w-1/3 p-4 ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl   "
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-2/3 p-4 flex flex-col justify-center">
              <h3 className="text-base font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.details}</p>
              <p className="text-primary font-bold text-lg mt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
