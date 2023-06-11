import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import GetUpdate from "../GetUpdate/GetUpdate";
import FrequentlyAsked from "./FrequentlyAsked/FrequentlyAsked";
import tutorBanner from "../../../assets/images/tutor-bg.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <img src={tutorBanner} alt="" />
      </div>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>

      <GetUpdate></GetUpdate>
      <FrequentlyAsked></FrequentlyAsked>
    </div>
  );
};

export default Home;
