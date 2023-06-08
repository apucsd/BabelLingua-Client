import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {
  FaBook,
  FaGraduationCap,
  FaHome,
  FaPen,
  FaPlus,
  FaUsers,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useUserRole from "../../../hooks/useUserRole";

const DashBoard = () => {
  const { user } = useAuth();

  const { userRole } = useUserRole();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="space-y-2 menu p-4 w-80 h-full bg-base-100 shadow-lg text-base-content">
          <img
            className="w-24 h-24 mx-auto border-2 border-primary rounded-full"
            src={user.photoURL}
            alt=""
          />
          <p className="text-center my-1 text-green-500">{user.displayName}</p>
          <h3 className="border-2 my-2"></h3>
          <li className="font-medium p-1">
            <Link
              to="/"
              className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
            >
              <div className="mr-3">
                <FaHome></FaHome>
              </div>
              Home
            </Link>
          </li>

          {/* admin links */}
          {userRole === "admin" && (
            <>
              <li className="font-medium p-1">
                <Link
                  to="s"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <FaBook></FaBook>
                  </div>
                  Manage Classes
                </Link>
              </li>
              <li className="font-medium p-1">
                <Link
                  to="manage-users"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <FaUsers></FaUsers>
                  </div>
                  Manage Users
                </Link>
              </li>
            </>
          )}

          {/* if user is a student */}

          {userRole === "admin" || userRole === "instructor" || (
            <>
              <li className="font-medium p-1">
                <Link
                  to="my-class"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <FaBook></FaBook>
                  </div>
                  My Classes
                </Link>
              </li>
              <li className="font-medium p-1">
                <Link
                  to="enrolled-classes"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <FaPen></FaPen>
                  </div>
                  Enrolled Classes
                </Link>
              </li>
            </>
          )}

          {/* if user role instructor */}
          {userRole === "instructor" && (
            <>
              <li className="font-medium p-1">
                <Link
                  to="add-class"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <FaPlus></FaPlus>
                  </div>
                  Add a Class
                </Link>
              </li>
              <li className="font-medium p-1">
                <Link
                  to="enrolled-classes"
                  className="flex items-center transform transition-colors duration-200 border-b-2 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3">
                    <GiTeacher></GiTeacher>
                  </div>
                  My Classes
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
