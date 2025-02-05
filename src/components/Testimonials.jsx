import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import testimonialOne from "../assets/avatar/testimonials-1.jpg";
import testimonialTwo from "../assets/avatar/testimonials-2.jpg";
import testimonialThree from "../assets/avatar/testimonials-3.jpg";
import testimonialFour from "../assets/avatar/testimonials-4.jpg";

const testimonials = [
  {
    img: testimonialOne,
    name: "John Doe",
    position: "CEO, Real Estate Corp",
    feedback:
      "Great service and amazing support! Highly recommend to anyone looking for luxury properties.",
    rating: 5,
  },
  {
    img: testimonialTwo,
    name: "Jane Smith",
    position: "Marketing Manager, HomeHub",
    feedback:
      "Exceptional experience with a professional team that understands customer needs.",
    rating: 4,
  },
  {
    img: testimonialThree,
    name: "Robert Brown",
    position: "Investor",
    feedback:
      "Their insight into the market helped me find the perfect investment property.",
    rating: 5,
  },
  {
    img: testimonialFour,
    name: "Emily Johnson",
    position: "Home Buyer",
    feedback:
      "Absolutely love my new property! The team was helpful and responsive throughout.",
    rating: 4,
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 3,
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

  return (
    <div className="w-full px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">What Our Clients Say</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hear from our happy clients who found their dream homes with our
          expert services.
        </p>
      </div>

      {/* Testimonials Slider */}
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white border rounded-2xl min-h-[350px] hover:shadow-md p-6 flex flex-col items-center">
              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Position */}
              <h2 className="text-2xl font-bold text-gray-800">
                {testimonial.name}
              </h2>
              <p className="text-primary text-sm font-medium mb-3">
                {testimonial.position}
              </p>

              {/* Feedback */}
              <p className="text-gray-600 text-center mb-4">
                {testimonial.feedback}
              </p>

              {/* Star Ratings */}
              <div className="flex items-center justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
