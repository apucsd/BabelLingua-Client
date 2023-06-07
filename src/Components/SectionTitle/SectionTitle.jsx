import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="flex justify-center items-center my-8">
      <div>
        <h1 className="font-bold uppercase  text-3xl border-x-4 border-primary p-2 inline-block w-auto">
          {heading}
        </h1>
        <p className="text-sm text-center capitalize text-secondary italic">
          {subheading}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
