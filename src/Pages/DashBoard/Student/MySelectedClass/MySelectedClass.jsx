import React, { useEffect } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const MySelectedClass = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useCustomAxios();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user.email],
    enabled: !loading,
    queryFn: async () => {
      if (user) {
        const response = await axiosSecure(`bookings/${user.email}`);
        return response.data;
      }
    },
  });
  const handleDelete = async (id) => {
    const response = await axiosSecure.delete(`bookings/${id}`);
    if (response.data.deletedCount) {
      toast.success("Your selected class has deleted successfully");
      refetch();
    }
  };
  return (
    <div>
      <SectionTitle heading={"My classes"}></SectionTitle>
      <div className="overflow-x-auto p-4">
        <table className="table table-xs">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>

              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes &&
              classes?.map((classItem, index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="rounded-full w-12 h-12">
                          <img src={classItem?.classImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classItem?.className}</td>
                  <td>{classItem?.instructorName}</td>

                  <td>
                    <span className="text-red-500">{classItem?.price}tk</span>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(classItem._id)}
                      className="btn bg-red-500 btn-xs text-white whitespace-nowrap capitalize"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
