import React from "react";
import { motion } from "framer-motion";
import blogOne from "../assets/blog/blog-grid-1.jpg";
import blogTwo from "../assets/blog/blog-grid-2.jpg";
import blogThree from "../assets/blog/blog-grid-3.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

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

const OpinionSection = () => {
  return (
    <div className="w-full px-6 py-10 md:px-12 md:py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-semibold mb-4">Insight & Opinion</h1>
        <p className="text-paragraph max-w-xl mx-auto">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>

      {/* Blog Grid */}
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
              transition: { delay: index * 0.2, duration: 0.6, type: "spring" },
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
  );
};

export default OpinionSection;
