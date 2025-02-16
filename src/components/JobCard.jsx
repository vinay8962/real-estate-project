import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";

// Job Card Component
const JobCard = ({ job }) => {
  return (
    <div className="border rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
      {/* Job Info */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {job.PositionName}
        </h2>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
          {/* Location */}
          <div className="flex items-center text-gray-600 gap-2">
            <FaMapMarkerAlt /> <span>{job.Location}</span>
          </div>
          {/* Salary */}
          <div className="flex items-center text-green-600 font-semibold gap-2">
            <FaMoneyBillWave /> <span>${job.Package}K / year</span>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <button className="border border-primary text-primary hover:text-white  hover:bg-primary px-2 py-2 rounded-lg transition w-full md:w-[300px]">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
