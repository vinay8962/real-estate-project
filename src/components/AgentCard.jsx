import React from "react";
import { motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white p-2 transition-shadow group">
      {/* Agent Image */}
      <div className="w-full h-96 overflow-hidden rounded-xl mb-4 relative group">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover"
        />

        {/* Hover Social Links */}
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

      {/* Agent Info */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {agent.name}
          </h2>
          <p className="text-gray-500">{agent.role}</p>
        </div>
        <div className="flex gap-4 text-lg">
          <IoMdCall className="cursor-pointer hover:text-primary" />
          <GrMail className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
