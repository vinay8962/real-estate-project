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
    <div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className={`rounded-xl cursor-pointer ${
              index === 0
                ? "col-span-2 row-span-2 w-full h-80 object-cover"
                : "w-full h-40 object-cover"
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
          <div className="relative">
            <motion.img
              src={selectedImage}
              alt="Fullscreen View"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
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
