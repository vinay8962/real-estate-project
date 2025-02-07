import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import Slider from "react-slick";
import House1 from "../assets/section/box-house-10.jpg";
import House2 from "../assets/section/box-house-11.jpg";
import House4 from "../assets/section/box-house-13.jpg";
import House5 from "../assets/section/box-house-14.jpg";
import House6 from "../assets/section/box-house-15.jpg";
import House7 from "../assets/section/box-house-16.jpg";
import House8 from "../assets/section/box-house-17.jpg";
import House9 from "../assets/section/box-house-18.jpg";
import House3 from "../assets/section/box-house-19.jpg";

const PopularSearch = () => {
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
      title: "Luxury Penthouse",
      location: "500 5th Ave, New York, NY 10036",
      details: "5 Bed 4 Bath 5,500 Sqft",
      price: 25000,
    },
    {
      image: House6,
      title: "Luxury Penthouse",
      location: "500 5th Ave, New York, NY 10036",
      details: "5 Bed 4 Bath 5,500 Sqft",
      price: 25000,
    },
    {
      image: House7,
      title: "Luxury Penthouse",
      location: "500 5th Ave, New York, NY 10036",
      details: "5 Bed 4 Bath 5,500 Sqft",
      price: 25000,
    },
    {
      image: House9,
      title: "Modern Family Home",
      location: "45 Sunset Blvd, Los Angeles, CA 90026",
      details: "4 Bed 2 Bath 3,200 Sqft",
      price: 12000,
    },
    {
      image: House8,
      title: "Cozy Countryside Cottage",
      location: "78 Greenfield Lane, Vermont, VT 05401",
      details: "2 Bed 1 Bath 1,500 Sqft",
      price: 7500,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 my-10">
      <div className="text-center mb-4">
        <h1 className="text-5xl font-semibold mb-4">Popular Searches</h1>
        <p className="text-paragraph text-gray-600">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 w-3/4 sm:grid-cols-3 md:grid-cols-5 gap-1">
          <button className="w-9/12 h-12 font-semibold text-Text1 hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border rounded-xl">
            Beachfront Villas
          </button>
          <button className="w-9/12 h-12 font-semibold text-Text1 hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border rounded-xl">
            Mountain Homes
          </button>
          <button className="w-9/12 h-12 font-semibold text-Text1 hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border rounded-xl">
            Urban Apartments
          </button>
          <button className="w-9/12 h-12 font-semibold text-Text1 hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border rounded-xl">
            Countryside Estates
          </button>
          <button className="w-9/12 h-12 font-semibold text-Text1 hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border rounded-xl">
            Luxury Penthouses
          </button>
        </div>
      </div>
      <div className="my-4">
        <Slider {...sliderSettings} className="property-slider">
          {propertyCards.map((property, index) => (
            <div key={index} className="p-4">
              <div className="border rounded-2xl  shadow-md">
                <div className="w-full h-48 overflow-hidden rounded-t-xl ">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-50"
                  />
                </div>
                <div className="mt-4 p-6">
                  <h2 className="text-xl font-semibold">{property.title}</h2>
                  <p className="flex items-center text-sm text-Text1 font-semibold">
                    <CiLocationOn className="mr-1" /> {property.location}
                  </p>
                  <p className="text-sm mt-1 font-semibold">
                    {property.details}
                  </p>
                </div>
                <hr className="w-full" />
                <div className="mt-2 flex justify-between p-4 items-center">
                  <h2 className="text-xl font-bold text-primary flex items-center">
                    <FaDollarSign className="mr-1" /> {property.price}
                  </h2>
                  <button className="w-1/3 h-12 font-semibold text-primary hover:bg-primary text-base hover:text-white hover:font-bold focus:bg-primary focus:text-white focus:font-bold border border-primary rounded-xl">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularSearch;
