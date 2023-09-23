import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import FrequentlyAsked from "./FrequentlyAsked/FrequentlyAsked";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Testimonial></Testimonial>
      <FrequentlyAsked></FrequentlyAsked>
    </div>
  );
};

export default Home;
