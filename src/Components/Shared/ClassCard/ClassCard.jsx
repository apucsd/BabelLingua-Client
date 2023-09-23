import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaChair, FaDollarSign } from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";
import useCustomAxios from "../../../hooks/useCustomAxios";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ClassCard = ({ singleClass, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useCustomAxios();
  const [disableBtn, setDisabledBtn] = useState(false);
  const { userRole } = useUserRole();

  const { className, classImage, availableSeats, price, instructorName, _id } =
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

  const handleBookClass = async () => {
    const booking = {
      className,
      classImage,
      availableSeats,
      price,
      instructorName,
      classId: _id,
      email: user?.email,
    };
    if (!user) {
      return toast.error("Please login first for booking a class");
    }
    const res = await axiosSecure.post(`/bookings`, {
      booking,
    });
    if (res.data.insertedId) {
      toast.success("Class added! Check your my classes");
      setDisabledBtn(true);
    }
  };
  return (
    <div
      className={`backdrop-blur-3xl m-1 min-h-16 px-6 pt-6 pb-2 rounded-xl group`}
    >
      <div className="relative ">
        <Fade>
          <img
            className="w-full h-52 rounded-xl transform group-hover:scale-105 transition duration-300  hover:bg-gray-900 hover:opacity-80"
            src={classImage}
            alt="class"
          />
        </Fade>
        <p className="absolute top-0 bg-yellow-300  font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          <small>{instructorName}</small>
        </p>
      </div>
      <h1 className="mt-4  text-2xl font-bold cursor-pointer">{className}</h1>

      <div className="my-4">
        <div className="flex space-x-1 items-center gap-3">
          <span>
            <FaChair className="h-6 w-6 text-indigo-600 mb-1.5"></FaChair>
          </span>
          <p className={`${availableSeats === 0 ? "text-red-600" : ""}  `}>
            {availableSeats} Available Seats
          </p>
        </div>

        <div className="flex space-x-1 items-center gap-5">
          <span className=" text-4xl text-indigo-600 mb-4">&#2547;</span>
          <p className=" mb-2 text-3xl font-bold ">{price}</p>
        </div>
        <button
          disabled={disableBtn}
          className={`w-full my-2 mt-auto border rounded py-2 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 ${
            disableBtn ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => handleBookClass(singleClass)}
        >
          Buy Lesson
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
