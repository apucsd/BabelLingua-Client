import React from "react";
import Lottie from "lottie-react";
import notFound from "../../../assets/anim/notfound.json";
const NotingFound = () => {
  return (
    <div className="w-full">
      <Lottie className="h-32" animationData={notFound} />
      <h2 className=" text-gray-500 text-2xl font-bold text-center">
        Nothing found
      </h2>
    </div>
  );
};

export default NotingFound;
