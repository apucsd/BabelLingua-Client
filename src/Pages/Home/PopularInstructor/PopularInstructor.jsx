import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassCard from "../PopularClass/PopularClassCard";

const PopularInstructor = () => {
  return (
    <div>
      <SectionTitle
        heading="Popular instructors"
        subheading="Top 6 Popular Instructors"
      ></SectionTitle>
      <div>
        <PopularClassCard></PopularClassCard>
      </div>
    </div>
  );
};

export default PopularInstructor;
