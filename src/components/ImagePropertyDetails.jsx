import React, { useState } from "react";
import PropertyImage1 from "../assets/section/property-detail.jpg";
import PropertyImage2 from "../assets/section/property-detail-2.jpg";
import PropertyImage3 from "../assets/section/property-detail-3.jpg";
import PropertyImage4 from "../assets/section/property-detail-4.jpg";
import PropertyImage5 from "../assets/section/property-detail-5.jpg";
import PropertyImage6 from "../assets/section/property-detail-6.jpg";
import { motion } from "framer-motion";

const ImagePropertyDetails = () => {
  const images = [
    PropertyImage1,
    PropertyImage2,
    PropertyImage3,
    PropertyImage4,
    PropertyImage5,
    PropertyImage6,
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className={`rounded-xl cursor-pointer ${
              index === 0
                ? "sm:col-span-2 sm:row-span-2 w-full h-64 sm:h-[31rem] object-cover"
                : "w-full h-40 sm:h-60 object-cover"
            }`}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={imageVariants}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative max-w-4xl mx-auto p-4">
            <motion.img
              src={selectedImage}
              alt="Fullscreen View"
              className="w-full h-auto max-h-[90vh] rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImagePropertyDetails;
