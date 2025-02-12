import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

const AddReview = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 px-8 ">
      <div className="w-full  p-8 ">
        {/* Header */}
        <div className="w-full flex flex-col items-start">
          <h1 className="text-4xl font-bold text-gray-800">Add Review</h1>
          <p className="text-sm text-gray-600 my-6">
            Your email address will not be published.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary/40"
              />
            </div>
          </div>

          {/* Save Info Checkbox */}
          <div className="flex items-center">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo" className="text-sm text-gray-700">
              Save my name & email for next time.
            </label>
          </div>

          {/* Review Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Review
            </label>
            <textarea
              rows="4"
              placeholder="Write your review here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary/40"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition">
            Post Comment <FaCircleArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
