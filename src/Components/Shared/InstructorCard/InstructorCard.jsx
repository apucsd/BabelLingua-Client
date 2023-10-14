import React from "react";
import profileCover from "../../../assets/images/banner.jpg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  return (
    <div
      key={instructor._id}
      className="border mt-4 mx-4 md:mx-0  rounded-lg text-base-900"
    >
      <div className="rounded-t-lg h-32 overflow-hidden">
        <Fade duration={1000}>
          <img className=" w-full h-full" src={profileCover} alt="Mountain" />
        </Fade>
      </div>
      <div className="mx-auto  w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          loading="lazy"
          className="object-cover object-center h-32"
          src={instructor.photoURL}
          alt=""
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{instructor.name}</h2>
        <p className="text-base-600 text-xs">{instructor.email}</p>
      </div>

      <div className="p-4 border-t  mt-2">
        <Link
          to={`/instructors/${instructor._id}`}
          className="w-full block mx-auto rounded-full text-center bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
        >
          See Classes
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;
