import React, { useState } from "react";
import Slider from "react-slick";

import logo1 from "../assets/Company Logo/logo_1-removebg-preview.png";
import logo2 from "../assets/Company Logo/logo_3-removebg-preview.png";
import logo3 from "../assets/Company Logo/logo_4-removebg-preview.png";
import logo4 from "../assets/Company Logo/logo_5-removebg-preview.png";
import logo5 from "../assets/Company Logo/logo_6-removebg-preview.png";
import logo6 from "../assets/Company Logo/logo_7-removebg-preview.png";

const imageData = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];

const WorkTogetherSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Let's Work Together</h1>
        <p className="text-gray-600">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <Slider {...sliderSettings}>
          {imageData.map((image, index) => (
            <div
              key={index}
              className="p-4"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={image}
                alt={`Company Logo ${index + 1}`}
                className={`mx-auto w-36 h-36 object-contain gap-1 rounded-lg hover:border hover:border-primary hover:shadow-md ${
                  hoverIndex !== null && hoverIndex !== index
                    ? "blur-sm opacity-60"
                    : "blur-0 opacity-100"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
