import React from "react";
import Slider from "react-slick";
const WorkTogetherSection = () => {
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
    <div>
      <div>
        <h1>Let's Work Together</h1>
        <p>
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      <div>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
           
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default WorkTogetherSection;
