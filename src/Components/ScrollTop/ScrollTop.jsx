import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <button
        className={`scroll-to-top duration-1000 px-4 py-5 shadow-xl text-lg animate-bounce bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 ${
          isVisible ? "visible" : "hidden"
        }`}
        onClick={handleTop}
      >
        <FaArrowUp></FaArrowUp>
      </button>
    </div>
  );
};

export default ScrollTop;
