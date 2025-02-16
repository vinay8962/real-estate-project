import React from "react";
import CTASection from "../components/CTASection";
import { IoIosArrowBack, IoIosArrowForward, IoMdCall } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { motion } from "framer-motion";
import AgentImage1 from "../assets/section/agent-item-1.jpg";
import AgentImage2 from "../assets/section/agent-item-2.jpg";
import AgentImage3 from "../assets/section/agent-item-3.jpg";
import AgentImage4 from "../assets/section/agent-item-4.jpg";
import AgentImage5 from "../assets/section/agent-item-5.jpg";
import AgentImage6 from "../assets/section/agent-item-6.jpg";
import AgentImage7 from "../assets/section/agent-item-7.jpg";
import AgentImage8 from "../assets/section/agent-item-8.jpg";
import AgentImage9 from "../assets/section/agent-item-9.jpg";
import AgentImage10 from "../assets/section/agent-item-10.jpg";
import AgentImage11 from "../assets/section/agent-item-11.jpg";
import AgentImage12 from "../assets/section/agent-item-12.jpg";
import AgentCard from "../components/AgentCard";

const Agents = () => {
  const navigate = useNavigate();
  const agentData = [
    {
      image: AgentImage1,
      name: "Leslie Alexander",
      position: "Sales Agent",
    },
    {
      image: AgentImage2,
      name: "Courtney Henry",
      position: "Sales Agent",
    },
    {
      image: AgentImage3,
      name: "Brooklyn Simmons",
      position: "Sales Agent",
    },
    { image: AgentImage4, name: "Devon Lane", position: "Sales Agent" },
    { image: AgentImage5, name: "Eleanor Pena", position: "Sales Agent" },
    { image: AgentImage6, name: "Guy Hawkins", position: "Sales Agent" },
    {
      image: AgentImage7,
      name: "Darlene Robertson",
      position: "Sales Agent",
    },
    { image: AgentImage8, name: "Jacob Jones", position: "Sales Agent" },
    { image: AgentImage9, name: "Theresa Webb", position: "Sales Agent" },
    { image: AgentImage10, name: "Jane Cooper", position: "Sales Agent" },
    { image: AgentImage11, name: "Eleanor Pena", position: "Sales Agent" },
    { image: AgentImage12, name: "Guy Hawkins", position: "Sales Agent" },
  ];
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
            <span className="font-bold text-paragraph">Agents List</span>
          </p>
        </div>

        {/* Title Section */}
        <h1 className="text-3xl md:text-5xl font-semibold px-4 md:px-8 mb-6">
          Agents
        </h1>

        {/* Filter Section */}
        <form className="flex flex-wrap gap-2 px-4 md:px-8 justify-between">
          <input
            type="text"
            placeholder="Agent name"
            className="border px-6 py-4 rounded-md w-1/5"
          />
          <select className="border px-6 py-4 rounded-md w-1/5">
            <option value="">All Agency</option>
            <option value="floating-baths">Floating Baths</option>
            <option value="massage-baths">Massage Baths</option>
          </select>
          <select className="border px-6 py-4 rounded-md w-1/5">
            <option value="">All Locations</option>
            <option value="new-york">New York</option>
          </select>
          <select className="border px-6 py-4 rounded-md w-1/5">
            <option value="default">Sort by (Default)</option>
            <option value="newest">Newest</option>
          </select>
        </form>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-8">
          {agentData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="max-w-6xl text-xl mx-auto flex flex-col md:flex-row justify-between items-center my-16 gap-4">
          <p className="text-base text-paragraph">Showing 1-8 of 42 results.</p>
          <ul className="flex gap-3">
            <li>
              <Link
                to="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white font-bold text-2xl"
              >
                <IoIosArrowBack />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                ...
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 rounded-md hover:bg-primary hover:text-white"
              >
                20
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-1 flex border rounded-md hover:bg-primary hover:text-white text-2xl"
              >
                <IoIosArrowForward />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default Agents;
