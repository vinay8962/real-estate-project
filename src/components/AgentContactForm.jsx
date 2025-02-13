import React from "react";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const AgentContactForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-xl">
      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-6 text-start text-gray-800">
        Contact Me
      </h1>

      {/* Form */}
      <form className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-4 border rounded-md focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-4 border rounded-md focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Your phone number"
            className="w-full px-4 py-4 border rounded-md focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-4 border rounded-md focus:ring-2 focus:ring-primary h-28"
          />
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-3/4 flex items-center justify-center gap-2 bg-primary hover:bg-[#2c2e33] text-white hover:text-primary py-4 rounded-3xl transition-all"
          >
            <CiMail size={20} /> Send Message
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-1/4 flex items-center justify-center gap-2 border border-primary text-primary hover:text-white hover:bg-primary py-4 rounded-3xl transition-all"
          >
            <IoCallOutline size={20} /> Call
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default AgentContactForm;
