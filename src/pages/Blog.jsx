import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import CTASection from "../components/CTASection";
import blogOne from "../assets/blog/blog-grid-1.jpg";
import blogTwo from "../assets/blog/blog-grid-2.jpg";
import blogThree from "../assets/blog/blog-grid-3.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Blog = () => {
  const [layout, setLayout] = useState("grid");

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
    {
      img: blogTwo,
      date: "15 November, 2024",
      title: "Tips for first-time home buyers in today's market",
      category: "Buying Guide",
      link: "#",
    },
    {
      img: blogThree,
      date: "22 December, 2024",
      title: "Understanding the impact of interest rates on real estate",
      category: "Finance",
      link: "#",
    },
    {
      img: blogOne,
      date: "5 January, 2025",
      title: "Eco-friendly homes: A guide to sustainable living",
      category: "Green Living",
      link: "#",
    },
    {
      img: blogTwo,
      date: "15 November, 2024",
      title: "Tips for first-time home buyers in today's market",
      category: "Buying Guide",
      link: "#",
    },
    {
      img: blogThree,
      date: "22 December, 2024",
      title: "Understanding the impact of interest rates on real estate",
      category: "Finance",
      link: "#",
    },
    {
      img: blogOne,
      date: "5 January, 2025",
      title: "Eco-friendly homes: A guide to sustainable living",
      category: "Green Living",
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
              <span className="font-bold text-paragraph">Blog</span>
            </p>
          </div>
        </div>
        {/* Blog Header Section */}
        <div className="w-full">
          <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-300">
            <h1 className="text-5xl font-bold mb-4 md:mb-0">Blogs</h1>

            {/* Layout Toggle Buttons */}
            <div className="flex gap-4">
              <button
                className={`p-2 border rounded-md ${
                  layout === "grid" ? "bg-primary text-white" : "bg-white"
                }`}
                onClick={() => setLayout("grid")}
              >
                <FiGrid size={20} />
              </button>
              <button
                className={`p-2 border rounded-md ${
                  layout === "list" ? "bg-primary text-white" : "bg-white"
                }`}
              >
                <FiList size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Blog Content Section */}
        <div
          className={`w-11/12 mx-auto p-6 grid gap-8 ${
            layout === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl h-96 overflow-hidden hover:shadow-2xl transition-shadow"
              custom={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={(index) => ({
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.2, duration: 1, type: "spring" },
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
                  Read more <IoArrowForwardCircleOutline size={25} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-full">
          <hr className="" />
        </div>
        {/* Pagination Section */}{" "}
        <div className="max-w-6xl text-xl mx-auto flex justify-center my-16">
          {" "}
          <ul className="flex gap-3">
            {" "}
            <li className="arrow">
              {" "}
              <Link
                href="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white font-bold text-2xl"
              >
                {" "}
                <IoIosArrowBack />
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#"
                className="px-3 py-1   rounded-md hover:bg-primary hover:text-white"
              >
                {" "}
                1{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#"
                className="px-3 py-1  rounded-md hover:bg-primary hover:text-white"
              >
                {" "}
                2{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#"
                className="px-3 py-1  rounded-md hover:bg-primary hover:text-white"
              >
                {" "}
                ...{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link
                href="#"
                className="px-3 py-1  rounded-md hover:bg-primary hover:text-white"
              >
                {" "}
                20{" "}
              </Link>{" "}
            </li>{" "}
            <li className="arrow">
              {" "}
              <Link
                href="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white   text-2xl"
              >
                <IoIosArrowForward />
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <CTASection />
    </>
  );
};

export default Blog;
