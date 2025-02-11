import React from "react";

const MoreAboutForm = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl border">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        More About This Property
      </h1>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message Field */}
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark">
            Email Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutForm;
