import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularClassCard from "../PopularClass/PopularClassCard";
import useCustomAxios from "../../../hooks/useCustomAxios";
import { useQuery } from "react-query";
import InstructorCard from "../../../Components/Shared/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const axiosSecure = useCustomAxios();
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosSecure("/users/instructors");
      return res.data.slice(0, 6);
    },
  });
  return (
    <div className="p-10">
      <SectionTitle
        heading="Popular instructors"
        subheading="Top 6 Popular Instructors"
      ></SectionTitle>
      <div className="grid md:grid-cols-4 gap-4 my-8">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
