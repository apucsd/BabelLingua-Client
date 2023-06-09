import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="card-number"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card-number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500"
                placeholder="Enter your card number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="expiry-date"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry-date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500"
                placeholder="CVV"
              />
            </div>
            <button className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
