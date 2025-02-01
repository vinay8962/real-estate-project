import React from "react";
import { IoSearch } from "react-icons/io5";
import Agent1 from "../assets/section/agent-item-1.jpg";
import Agent2 from "../assets/section/agent-item-2.jpg";
import Agent3 from "../assets/section/agent-item-3.jpg";
import Agent4 from "../assets/section/agent-item-4.jpg";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";

const LocalAgent = () => {
  return (
    <div className="w-full bg-white py-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4">Choose Your Local Agent</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo.
        </p>
      </div>

      {/* Agent Cards Section */}
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto w-10/12">
        {/* Agent 1 */}
        <div className="bg-white p-2 transition-shadow group">
          {/* Agent Card Container: Hover Effect applied to entire card */}
          <div className="w-full h-96 overflow-hidden rounded-xl mb-4 relative group">
            <motion.img
              whileHover={{ scale: 1.1, duration: 0.3 }}
              src={Agent1}
              alt="Agent 1"
              className="w-full h-full object-cover"
            />

            {/* Hover Box with Social Icons */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: -100 }} // Start from above
              whileHover={{ y: 0 }} // Slide to center when hovered
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex bg-black w-8/12 h-14 mb-10 rounded-xl items-center justify-center gap-4 text-white text-2xl">
                <a href="#" className="hover:text-primary">
                  <IoLogoLinkedin />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoTwitter />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoInstagram />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Agent Info */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                Leslie Alexander
              </h2>
              <p className="text-gray-500">Sales Agent</p>
            </div>
            <div className="flex gap-4 text-lg">
              <IoMdCall className="cursor-pointer" />
              <GrMail className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Agent 2 */}
        <div className="bg-white p-2 transition-shadow group">
          <div className="w-full h-96 overflow-hidden rounded-xl mb-4 relative group">
            <motion.img
              whileHover={{ scale: 1.1, duration: 0.3 }}
              src={Agent2}
              alt="Agent 2"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: -100 }}
              whileHover={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex bg-black w-8/12 h-14 mb-10 rounded-xl items-center justify-center gap-4 text-white text-2xl">
                <a href="#" className="hover:text-primary">
                  <IoLogoLinkedin />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoTwitter />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoInstagram />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                Leslie Alexander
              </h2>
              <p className="text-gray-500">Sales Agent</p>
            </div>
            <div className="flex gap-4 text-lg">
              <IoMdCall className="cursor-pointer" />
              <GrMail className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Agent 3 */}
        <div className="bg-white p-2 transition-shadow group">
          <div className="w-full h-96 overflow-hidden rounded-xl mb-4 relative group">
            <motion.img
              whileHover={{ scale: 1.1, duration: 0.3 }}
              src={Agent3}
              alt="Agent 3"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: -100 }}
              whileHover={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex bg-black w-8/12 h-14 mb-10 rounded-xl items-center justify-center gap-4 text-white text-2xl">
                <a href="#" className="hover:text-primary">
                  <IoLogoLinkedin />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoTwitter />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoInstagram />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                Leslie Alexander
              </h2>
              <p className="text-gray-500">Sales Agent</p>
            </div>
            <div className="flex gap-4 text-lg">
              <IoMdCall className="cursor-pointer" />
              <GrMail className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Agent 4 */}
        <div className="bg-white p-2 transition-shadow group">
          <div className="w-full h-96 overflow-hidden rounded-xl mb-4 relative group">
            <motion.img
              whileHover={{ scale: 1.1, duration: 0.3 }}
              src={Agent4}
              alt="Agent 4"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ y: -100 }}
              whileHover={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex bg-black w-8/12 h-14 mb-10 rounded-xl items-center justify-center gap-4 text-white text-2xl">
                <a href="#" className="hover:text-primary">
                  <IoLogoLinkedin />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoTwitter />
                </a>
                <a href="#" className="hover:text-primary">
                  <IoLogoInstagram />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                Leslie Alexander
              </h2>
              <p className="text-gray-500">Sales Agent</p>
            </div>
            <div className="flex gap-4 text-lg">
              <IoMdCall className="cursor-pointer" />
              <GrMail className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <p className="text-gray-600 font-semibold w-8/12 mx-auto mb-6">
          Explore Property agents are here to help with all your buying,
          renting, and selling goals. Find the home of your dreams with an
          expert you can trust. Let’s chat!
        </p>
        <button className="bg-primary w-72 text-white justify-center font-bold py-3 px-6 rounded-xl flex items-center mx-auto hover:bg-primary-dark transition-colors">
          Find your local agent <IoSearch className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LocalAgent;
