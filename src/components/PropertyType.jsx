import React from "react";
import { motion } from "framer-motion";

// SVG Imports
import { ReactComponent as ApartmentIcon } from "../assets/SVG/buildings-1-svgrepo-com.svg";
import { ReactComponent as VillaIcon } from "../assets/SVG/villa-svgrepo-com.svg";
import { ReactComponent as StudioIcon } from "../assets/SVG/buildings-modern-couple-svgrepo-com.svg";
import { ReactComponent as TownhouseIcon } from "../assets/SVG/buildings-svgrepo-com.svg";
import { ReactComponent as CommercialIcon } from "../assets/SVG/city-hall-svgrepo-com.svg";
import { ReactComponent as FamilyHomeIcon } from "../assets/SVG/home-building-svgrepo-com.svg";
import { ReactComponent as PenthouseIcon } from "../assets/SVG/buildings-trees-and-plants-in-cityscape-view-svgrepo-com.svg";
import { ReactComponent as LandPlotIcon } from "../assets/SVG/buildings-building-construction-estate-svgrepo-com.svg";

const propertyData = [
  { name: "Apartment", Icon: ApartmentIcon, count: 476 },
  { name: "Villa", Icon: VillaIcon, count: 276 },
  { name: "Studio", Icon: StudioIcon, count: 196 },
  { name: "Townhouse", Icon: TownhouseIcon, count: 312 },
  { name: "Commercial", Icon: CommercialIcon, count: 155 },
  { name: "Family Home", Icon: FamilyHomeIcon, count: 402 },
  { name: "Penthouse", Icon: PenthouseIcon, count: 123 },
  { name: "Land/Plot", Icon: LandPlotIcon, count: 89 },
];

const PropertyType = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white py-20">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-semibold mb-4">Property Types</h1>
        <p className="text-gray-600">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>

      {/* Property Grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto w-10/12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {propertyData.map((property, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 h-36 flex items-center rounded-2xl hover:shadow-xl transition-shadow group bg-white"
          >
            <div className="flex items-center justify-start w-full">
              <property.Icon className="w-20 h-20 group-hover:bg-primary group-hover:text-white border border-gray-300 p-3 rounded-xl transition-all" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {property.name}
                </h2>
                <p className="text-gray-600 mt-1 group-hover:text-gray-500 transition-colors">
                  {property.count} listings for sale
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertyType;
