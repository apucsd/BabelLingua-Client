import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ClassCard from "../../Components/Shared/ClassCard/ClassCard";
import useCustomAxios from "../../hooks/useCustomAxios";
import { useQuery } from "react-query";

const Classes = () => {
  const axiosSecure = useCustomAxios();
  const {
    refetch,
    isLoading,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes/approved");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle heading={"All Classes"}></SectionTitle>
      <div>
        <div className="grid md:grid-cols-3 justify-center">
          {classes.map((singleClass) => (
            <ClassCard
              refetch={refetch}
              singleClass={singleClass}
              key={singleClass._id}
            ></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
