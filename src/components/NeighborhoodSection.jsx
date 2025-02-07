import React from "react";
import Image1 from "../assets/section/location-10.jpg";
import Image2 from "../assets/section/location-11.jpg";
import Image3 from "../assets/section/location-12.jpg";
import Image4 from "../assets/section/location-13.jpg";
import Image5 from "../assets/section/location-14.jpg";
import Image6 from "../assets/section/location-15.jpg";
import Image7 from "../assets/section/location-16.jpg";
import Image8 from "../assets/section/location-17.jpg";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const NeighborhoodSection = () => {
  const locationData = [
    { image: Image1, name: "Downtown", properties: 120 },
    { image: Image2, name: "Uptown", properties: 95 },
    { image: Image3, name: "Midtown", properties: 150 },
    { image: Image4, name: "Suburban", properties: 80 },
    { image: Image5, name: "Seaside", properties: 60 },
    { image: Image6, name: "Hillside", properties: 45 },
    { image: Image7, name: "Greenfield", properties: 110 },
    { image: Image8, name: "Sunset Valley", properties: 75 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
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

  return (
    <div className="text-center p-4">
      <div className="mb-6">
        <h1 className="text-5xl font-semibold">
          {splitText("Explore The Neighborhoods")}
        </h1>
        <p className="text-gray-600 mt-2">
          {splitText(
            "Discover beautiful locations and their property options."
          )}
        </p>
      </div>
      <div className="w-full">
        <Slider {...sliderSettings}>
          {locationData.map((location, index) => (
            <motion.div
              key={index}
              className="relative p-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={location.image}
                alt={location.name}
                className="w-full h-56 object-cover rounded-lg hover:border hover:border-primary hover:shadow-md"
              />
              <div className="absolute inset-0  bg-opacity-40 flex justify-between items-end px-10 bottom-5 p-4 rounded-lg text-white">
                <h3 className="text-2xl font-semibold">{location.name}</h3>
                <button className="text-xm font-semibold border flex items-center transition-all duration-500 border-paragraph bg-white/20 hover:bg-primary px-4 py-2 rounded-md">
                  {location.properties} Properties <IoIosArrowForward />
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NeighborhoodSection;
