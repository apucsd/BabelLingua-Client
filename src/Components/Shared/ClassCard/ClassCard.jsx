import React from "react";
import { FaChair, FaDollarSign } from "react-icons/fa";

const ClassCard = ({ singleClass }) => {
  const { className, classImage, availableSeats, price } = singleClass;
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl  group">
      <div className="relative">
        <img
          className="w-full h-52 rounded-xl transform group-hover:scale-105 transition duration-500"
          src={classImage}
          alt="class"
        />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          Popular
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {className}
      </h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center gap-3">
          <span>
            <FaChair className="h-6 w-6 text-indigo-600 mb-1.5"></FaChair>
          </span>
          <p>{availableSeats} Available Seats</p>
        </div>

        <div className="flex space-x-1 items-center gap-5">
          <span className=" text-4xl text-indigo-600 mb-4">&#2547;</span>
          <p className="text-gray-700 mb-2 text-3xl font-bold ">{price}</p>
        </div>
        <button className="primary-btn">Buy Lesson</button>
      </div>
    </div>
  );
};

export default ClassCard;
