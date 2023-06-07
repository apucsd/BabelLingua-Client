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
      <div className="grid md:grid-cols-3">
        <PopularClassCard></PopularClassCard>
      </div>
    </div>
  );
};

export default PopularClass;
