import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import profileCover from "../../assets/images/banner.jpg";
import useCustomAxios from "../../hooks/useCustomAxios";
import { useQuery } from "react-query";

const Instructors = () => {
  const axiosSecure = useCustomAxios();
  const {
    refetch,
    isLoading,
    data: instructors = [],
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await axiosSecure("/users/instructors");
      return res.data;
    },
  });

  console.log(instructors);
  return (
    <div>
      <SectionTitle heading={"Our Instructors"}></SectionTitle>
      <div className="grid md:grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="border mt-4 mx-4 md:mx-0 bg-white rounded-lg text-gray-900"
          >
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img
                className=" w-full h-full"
                src={profileCover}
                alt="Mountain"
              />
            </div>
            <div className="mx-auto  w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src={instructor.photoURL}
                alt="Woman looking front"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">{instructor.name}</h2>
              <p className="text-gray-500 text-xs">{instructor.email}</p>
            </div>

            <div className="p-4 border-t  mt-2">
              <button className="w-full block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                See Classes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
