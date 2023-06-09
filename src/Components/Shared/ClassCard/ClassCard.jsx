import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaChair, FaDollarSign } from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";

const ClassCard = ({ singleClass }) => {
  const [disableBtn, setDisabledBtn] = useState(false);
  const { userRole } = useUserRole();

  const { className, classImage, availableSeats, price, instructorName } =
    singleClass;

  useEffect(() => {
    if (
      userRole == "admin" ||
      userRole == "instructor" ||
      availableSeats == 0
    ) {
      setDisabledBtn(true);
    }
  }, [userRole, availableSeats]);
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl  group">
      <div className="relative">
        <Fade>
          <img
            className="w-full h-52 rounded-xl transform group-hover:scale-105 transition duration-500"
            src={classImage}
            alt="class"
          />
        </Fade>
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          <small>{instructorName}</small>
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
        <button
          disabled={disableBtn}
          className={`sm:w-full my-2 border rounded py-2 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 ${
            disableBtn ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            // Perform any action when the button is clicked
          }}
        >
          Buy Lesson
        </button>
      </div>
    </div>
  );
};

export default ClassCard;