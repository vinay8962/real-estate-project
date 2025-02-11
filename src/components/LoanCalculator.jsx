import React from "react";

const LoanCalculator = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-4xl w-full bg-white p-10 shadow-lg rounded-2xl">
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Loan Calculator
          </h1>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Total Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Total Amount
            </label>
            <input
              type="number"
              placeholder="Enter total amount"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
            />
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Down Payment
            </label>
            <div className="flex gap-1">
              <input
                type="number"
                placeholder="Enter down payment"
                className="w-10/12 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
              />
              <input
                type="text"
                className="w-1/5 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
                placeholder="0%"
                name=""
                id=""
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              placeholder="Enter interest rate"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
            />
          </div>

          {/* Amortization Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Amortization Period (months)
            </label>
            <input
              type="number"
              placeholder="Enter period"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
            />
          </div>

          {/* Property Tax */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Tax
            </label>
            <input
              type="number"
              placeholder="Enter property tax"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
            />
          </div>

          {/* Home Insurance */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Home Insurance
            </label>
            <input
              type="number"
              placeholder="Enter home insurance"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-primary/40"
            />
          </div>
        </form>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-primary text-white font-bold py-3 mt-8 rounded-2xl hover:bg-primary-dark transition"
        >
          Calculate Now
        </button>

        {/* Estimated Payment Display */}
        <div className="mt-8 p-4 bg-primary-light rounded-xl text-primary font-semibold text-center">
          Your estimated monthly payment: $599.25
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
