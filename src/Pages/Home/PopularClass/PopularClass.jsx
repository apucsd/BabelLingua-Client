import React from "react";
import PopularClassCard from "./PopularClassCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCustomAxios from "../../../hooks/useCustomAxios";
import { useQuery } from "react-query";
import ClassCard from "../../../Components/Shared/ClassCard/ClassCard";

const PopularClass = () => {
  const axiosSecure = useCustomAxios();
  const {
    refetch,
    isLoading,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes/popular");
      return res.data.slice(0, 6);
    },
  });
  return (
    <div>
      <SectionTitle
        heading="Popular Classes"
        subheading="Top 6 Popular Classes"
      ></SectionTitle>
      <div className="grid md:grid-cols-3">
        {classes.map((singleClass) => (
          <ClassCard
            refetch={refetch}
            singleClass={singleClass}
            key={singleClass._id}
          ></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
