import React from "react";
import { useQuery } from "react-query";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import { FaTrashAlt, FaUserGraduate } from "react-icons/fa";

const ManageUser = () => {
  const axiosSecure = useCustomAxios();
  const { isLoading, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

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
                <th>Action</th>
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
                      <select className="select ">
                        <option
                          defaultValue={
                            user.role === "admin"
                              ? "Admin"
                              : user.role === "instructor"
                              ? "Instructor"
                              : "Student"
                          }
                        >
                          {user.role === "admin"
                            ? "Admin"
                            : user.role === "instructor"
                            ? "Instructor"
                            : "Student"}
                        </option>
                        <option>Admin</option>
                        <option>Instructor</option>
                      </select>
                    </td>
                    <th>
                      <button className=" p-2 text-center rounded bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:bg-red-600">
                        <FaTrashAlt />
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
