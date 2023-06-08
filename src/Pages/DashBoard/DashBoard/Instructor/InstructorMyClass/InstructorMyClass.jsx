import React from "react";
import useCustomAxios from "../../../../../hooks/useCustomAxios";
import useAuth from "../../../../../hooks/useAuth";
import { useQuery } from "react-query";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";

const InstructorMyClass = () => {
  const { user } = useAuth();
  const axiosSecure = useCustomAxios();
  const { data: classes, isLoading } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });
  console.log(classes);
  return (
    <div>
      <SectionTitle heading={"MY Classes"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Status</th>
              <th>FeedBack</th>
              <th>Total Enrolled</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes?.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="rounded-full w-12 h-12">
                          <img
                            src={singleClass?.classImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleClass?.className}</td>
                  <td>{singleClass?.status}</td>
                  <td>{singleClass?.feedback ? singleClass?.feedback : ""}</td>
                  <td>
                    {singleClass?.enrolled ? (
                      singleClass?.enrolled
                    ) : (
                      <span className="text-red-500"> 0</span>
                    )}
                  </td>
                  <th>
                    <button className="btn btn-primary btn-xs">update</button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default InstructorMyClass;
