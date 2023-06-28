import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl font-bold leading-none sm:text-6xl">
            Learn a language for
            <span> real life</span>
          </h1>
          <p className="my-3">
            Anyone can learn words. BabelLingua teaches you to build sentences,
            nail pronunciation and speak with confidence.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="classes">
              <button className="px-8 py-3  font-semibold rounded bg-fuchsia-500 text-gray-50">
                See Classes
              </button>
            </Link>
            <Link to="register">
              <button className="px-8 py-3 font-semibold border rounded border-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://www.busuu.com/user/pages/home/_01-header/busuu-header-hello.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
