import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
    </motion.div>
  );
};

export default LoadingSpinner;
