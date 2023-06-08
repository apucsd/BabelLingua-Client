import React from "react";
import { useQuery } from "react-query";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import { toast } from "react-hot-toast";
import { FaUserSecret, FaUserTie } from "react-icons/fa";

const ManageUser = () => {
  const axiosSecure = useCustomAxios();
  const {
    refetch,
    isLoading,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Updated to admin ");
        refetch();
      }
    });
  };
  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Updated to instructor");
        refetch();
      }
    });
  };
  return (
    <div>
      <h2>All Users:</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Role</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users?.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="rounded-full w-12 h-12">
                            <img
                              src={user?.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.name}</td>
                    <td>
                      {user.role === "admin" ? (
                        <span className="text-secondary">Admin</span>
                      ) : user.role === "instructor" ? (
                        <span className="text-primary">Instructor</span>
                      ) : (
                        <span className="text-green-500">Student</span>
                      )}
                    </td>
                    <th>
                      <button
                        disabled={user.role === "admin"}
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-primary"
                      >
                        <FaUserSecret></FaUserSecret>
                      </button>
                    </th>
                    <th>
                      <button
                        disabled={user.role === "instructor"}
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-secondary"
                      >
                        <FaUserTie></FaUserTie>
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
