import React from "react";
import CTASection from "../components/CTASection";
import blogOne from "../assets/blog/blog-grid-1.jpg";
import blogTwo from "../assets/blog/blog-grid-2.jpg";
import blogThree from "../assets/blog/blog-grid-3.jpg";
import { motion } from "framer-motion";
import { CiCalendarDate, CiClock2, CiFolderOn, CiSearch } from "react-icons/ci";
import { IoArrowForwardCircleOutline, IoPersonOutline } from "react-icons/io5";
import AddReview from "../components/AddReview";
import ShowReview from "../components/ShowReview";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaRegComment,
  FaTwitter,
} from "react-icons/fa";
import BlogDetailsImage from "../assets/blog/blog-details.jpg";
import BlogDetailsImage1 from "../assets/blog/blog-details-1.jpg";
import BlogDetailsImage2 from "../assets/blog/blog-details-2.jpg";
import FeaturedList from "../components/FeaturedList";

const BlogDetails = () => {
  const blogs = [
    {
      img: blogOne,
      date: "26 August, 2024",
      title: "Building gains into housing stocks and how to trade them",
      category: "Real Estate",
      link: "#",
    },
    {
      img: blogTwo,
      date: "14 September, 2024",
      title: "The future of luxury homes: What you need to know",
      category: "Luxury Market",
      link: "#",
    },
    {
      img: blogThree,
      date: "3 October, 2024",
      title: "Investment strategies for high-value real estate",
      category: "Investment Tips",
      link: "#",
    },
  ];

  return (
    <>
      <div className="my-20 px-10 w-full">
        {/* Breadcrumb Section */}
        <div className="w-full flex ">
          <div className="w-10/12 py-4 px-12 text-sm text-gray-700">
            <p className="gap-3 flex">
              <span className="text-primary font-bold">Home</span> &gt;
              <span className="font-bold text-paragraph">Blog details</span>
            </p>
          </div>
        </div>

        <div className="mx-auto p-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
            <div className="md:col-span-2 w-full h-auto  md:px-6 py-0 ">
              <div className="p-6 md:p-10">
                {/* Title and Meta Info */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                    Building Gains into Housing Stocks and How to Trade the
                    Sector
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mt-3 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <IoPersonOutline className="text-lg text-gray-500" />
                      <p>Kathryn Murphy</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <CiFolderOn className="text-lg text-gray-500" />
                      <p>Furniture</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegComment className="text-lg text-gray-500" />
                      <p>0 Comments</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <CiCalendarDate className="text-lg text-gray-500" />
                      <p>26 August, 2024</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-5 border-gray-300" />

                {/* Blog Content */}
                <div className="space-y-5">
                  <p className="font-semibold text-gray-700">
                    The housing sector has long been a focal point for investors
                    seeking stability and growth. Understanding the dynamics of
                    housing stocks and effectively trading within this sector
                    can lead to substantial gains.
                  </p>

                  {/* Blog Image */}
                  <img
                    src={BlogDetailsImage}
                    className="w-full rounded-xl shadow-md"
                    alt="Housing Stocks"
                  />

                  {/* Understanding Housing Stocks */}
                  <div className="space-y-4 mt-5">
                    <h2 className="text-xl font-bold text-gray-800">
                      Understanding Housing Stocks
                    </h2>
                    <p className="text-gray-700">
                      Housing stocks encompass companies involved in various
                      aspects of the real estate industry, including
                      homebuilders, developers, and related service providers.
                      Factors influencing these stocks range from interest rates
                      and economic indicators to trends in homeownership rates.
                    </p>
                    <p className="text-gray-700">
                      Pay close attention to economic indicators such as
                      employment rates, GDP growth, and consumer confidence. A
                      strong economy often correlates with increased demand for
                      housing, benefiting related stocks.
                    </p>
                  </div>

                  {/* Highlighted Quote */}
                  <div className="bg-subPrimary1 border-l-4 border-primary text-gray-800 p-4 italic rounded-md">
                    “Lower rates can boost homebuying activity, benefiting
                    housing stocks, while higher rates may have the opposite
                    effect.”
                    <p className="text-gray-700 font-medium">
                      — Mike Fratantoni, MBA’s Chief Economist
                    </p>
                  </div>

                  <div className="space-y-6 p-6 ">
                    {/* Image Section */}
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src={BlogDetailsImage1}
                        className="rounded-2xl w-full object-cover"
                        alt="Trend 1"
                      />
                      <img
                        src={BlogDetailsImage2}
                        className="rounded-2xl w-full object-cover"
                        alt="Trend 2"
                      />
                    </div>

                    {/* Content Section */}
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Identify Emerging Trends
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Stay informed about emerging trends in the housing
                        market, such as the demand for sustainable homes,
                        technological advancements, and demographic shifts.
                        Companies aligning with these trends may present
                        attractive investment opportunities.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Take a long-term investment approach if you believe in
                        the stability and growth potential of the housing
                        sector. Look for companies with solid fundamentals and a
                        track record of success. For short-term traders,
                        capitalize on market fluctuations driven by economic
                        reports, interest rate changes, or industry-specific
                        news.
                      </p>
                    </div>

                    <hr className="border-gray-300" />

                    {/* Tags & Share Section */}
                    <div className="flex justify-between items-center">
                      {/* Tags */}
                      <div className="flex gap-2 text-gray-600">
                        <span className="font-semibold">Tags:</span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                          Personal
                        </span>
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                          Business
                        </span>
                      </div>

                      {/* Social Media Icons */}
                      <div className="flex gap-3 text-gray-600">
                        <span className="font-semibold">Share:</span>
                        <FaFacebook
                          className="text-blue-600 cursor-pointer hover:text-blue-800"
                          size={20}
                        />
                        <FaTwitter
                          className="text-blue-400 cursor-pointer hover:text-blue-600"
                          size={20}
                        />
                        <FaLinkedin
                          className="text-blue-700 cursor-pointer hover:text-blue-900"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-6xl mx-auto p-6  shadow-lg rounded-xl">
                <div className=" gap-8">
                  {/* Left: Show Reviews */}
                  <div className="p-6 ">
                    <ShowReview />
                  </div>
                  <hr />
                  {/* Right: Add Review */}
                  <div className="p-6 ">
                    <AddReview />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 space-y-8">
              <div className="sticky top-10 space-y-8">
                <div className="space-y-8 py-10 w-full">
                  {/* Search Blog */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                      Search Blog
                    </h2>
                    <div className="flex items-center border border-gray-300 rounded-2xl px-3 py-4">
                      <CiSearch className="text-gray-500 text-xl" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full ml-2 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug mb-4">
                      Categories
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        { name: "Market Updates", count: 50 },
                        { name: "Buying Tips", count: 69 },
                        { name: "Interior Inspiration", count: 69 },
                        { name: "Investment Insights", count: 25 },
                        { name: "Home Construction", count: 12 },
                        { name: "Legal Guidance", count: 12 },
                        { name: "Community Spotlight", count: 69 },
                      ].map((category, index) => (
                        <>
                          <li
                            key={index}
                            className="flex justify-between items-center p-2  rounded-lg cursor-pointer transition"
                          >
                            <span className="font-semibold text-lg hover:text-primary">
                              {category.name}
                            </span>
                            <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md">
                              {category.count}
                            </span>
                          </li>
                          <hr />
                        </>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <FeaturedList />
                  </div>

                  <div className=" p-6 space-y-6 text-center">
                    {/* Title */}
                    <h2 className="text-2xl text-start md:text-3xl font-bold text-gray-800 leading-snug">
                      Join Our Newsletter
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 text-sm text-start">
                      Signup to be the first to hear about exclusive deals,
                      special offers, and upcoming collections.
                    </p>

                    {/* Search / Signup Input */}
                    <div className="flex justify-center items-center">
                      <div className="flex w-full max-w-md items-center border rounded-lg px-2 py-1 bg-white shadow-sm">
                        {/* Input Field */}
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-grow px-3 py-2 outline-none text-gray-700"
                        />
                        {/* Submit Button */}
                        <button className="text-primary p-2 ">
                          <FaLocationArrow className="text-lg" />
                        </button>
                      </div>
                    </div>

                    {/* Popular Tags */}
                    <div className="text-gray-700">
                      <h3 className="text-lg font-semibold text-start">
                        Popular Tags
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {[
                          "Property",
                          "Office",
                          "Finance",
                          "Legal",
                          "Market",
                          "Invest",
                          "Renovate",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className=" px-4  py-2 border rounded-full text-sm cursor-pointer  hover:bg-primary hover:text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-10 my-10">
          <div className="my-4">
            <h2 className="text-2xl text-start md:text-3xl font-bold text-gray-800 leading-snug">
              Related posts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl h-96 overflow-hidden hover:shadow-2xl transition-shadow"
                custom={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={(index) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 1,
                    type: "spring",
                  },
                })}
              >
                {/* Blog Image with Hover Zoom */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
                    {blog.category}
                  </div>

                  {/* Blog Image */}
                  <motion.img
                    src={blog.img}
                    alt={`Blog ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-150"
                  />
                </motion.div>

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-sm text-paragraph font-semibold mb-2 flex items-center gap-1">
                    <CiClock2 /> {blog.date}
                  </p>
                  <h2 className="text-2xl font-bold mb-4 hover:text-primary">
                    {blog.title}
                  </h2>
                  <a
                    href={blog.link}
                    className="text-primary font-medium hover:underline flex items-center gap-2 font-bold"
                  >
                    Read more <IoArrowForwardCircleOutline size={"25px"} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default BlogDetails;
