import React from "react";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import Agent1 from "../assets/section/agent-item-1.jpg";
import AgentContactForm from "../components/AgentContactForm";
import {
  IoCallOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import FeaturedList from "../components/FeaturedList";
import { CiLocationArrow1, CiLocationOn, CiMail } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";
import Listing from "../components/Listing";

const AgentDetails = () => {
  return (
    <>
      <div className="w-full my-20 px-4 md:px-10">
        {/* Breadcrumb Section */}
        <div className="w-full flex py-4 px-4 md:px-12 text-sm text-gray-700">
          <p className="flex gap-3">
            <Link to="/" className="text-primary font-bold hover:underline">
              Home
            </Link>
            &gt;
            <span className="font-bold text-paragraph">Agent Details</span>
          </p>
        </div>

        <div className=" mx-auto p-1 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
            {/* Left Side - Agent Details */}
            <div className="md:col-span-2 w-full h-auto  md:px-6 py-0 ">
              <div className="flex flex-col md:flex-row gap-6 min-h-[450px] bg-white shadow-xl py-1 px-2 md:py-10 md:px-6 rounded-2xl">
                {/* Agent Image */}
                <div className="w-full md:w-2/5 overflow-hidden  rounded-xl relative group h-[300px] md:h-[450px] flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.1, duration: 0.3 }}
                    src={Agent1}
                    alt="Agent 1"
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Box with Social Icons */}
                  <motion.div
                    className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 0 }}
                    whileHover={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex bg-black w-8/12 h-14 mb-10 rounded-xl items-center justify-center gap-4 text-white text-2xl">
                      <Link href="#" className="hover:text-primary">
                        <IoLogoLinkedin />
                      </Link>
                      <Link href="#" className="hover:text-primary">
                        <IoLogoFacebook />
                      </Link>
                      <Link href="#" className="hover:text-primary">
                        <IoLogoTwitter />
                      </Link>
                      <Link href="#" className="hover:text-primary">
                        <IoLogoInstagram />
                      </Link>
                    </div>
                  </motion.div>
                </div>

                {/* Agent Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-between h-auto md:h-[450px]">
                  <h1 className="text-3xl font-semibold text-gray-800">
                    Cameron Williamson
                  </h1>
                  <p className="text-gray-500">Sales Agent</p>

                  <div className="border-b pb-8 mb-8">
                    <p className="text-gray-700 flex items-center gap-2 my-1">
                      <IoCallOutline />{" "}
                      <span className="font-bold text-primary text-lg">
                        +7-445-556-8337
                      </span>
                    </p>
                    <p className="text-gray-700 flex items-center gap-2 my-1">
                      <CiMail />
                      <span className="font-bold"> demmy12@gmail.com</span>
                    </p>
                    <p className="text-gray-700 flex items-center gap-2 my-1">
                      <CiLocationOn /> 1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      About Cameron Williamson
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam risus leo, blandit vitae diam a, vestibulum
                      viverra nisi. Vestibulum ullamcorper velit eget mattis
                      aliquam. Proin dapibus luctus pulvinar.
                    </p>

                    <button className="flex items-center gap-2 mt-2 text-primary font-semibold hover:underline">
                      Read more <IoIosArrowForward />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Listing />
              </div>
            </div>

            {/* Right Side - Contact Form & Featured Listings */}
            <div className="md:col-span-1 space-y-8">
              <div className="sticky top-10 space-y-8">
                {/* Contact Form */}
                <AgentContactForm />

                {/* Featured Listings */}

                <FeaturedList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default AgentDetails;
