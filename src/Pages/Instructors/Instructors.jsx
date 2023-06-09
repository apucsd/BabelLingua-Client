import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import useCustomAxios from "../../hooks/useCustomAxios";
import { useQuery } from "react-query";
import InstructorCard from "../../Components/Shared/InstructorCard/InstructorCard";

const Instructors = () => {
  const axiosSecure = useCustomAxios();
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosSecure("/users/instructors");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading={"Our Instructors"}></SectionTitle>
      <div className="grid md:grid-cols-4 gap-4">
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

export default Instructors;
