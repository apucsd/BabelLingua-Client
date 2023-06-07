import React from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularClass = () => {
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subheading="Top 6 Popular Classes"
      ></SectionTitle>
      <PopularClassCard></PopularClassCard>
    </div>
  );
};

export default PopularClass;
