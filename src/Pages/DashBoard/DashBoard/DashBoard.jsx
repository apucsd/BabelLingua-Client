import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaBook, FaGraduationCap, FaPen } from "react-icons/fa";

const DashBoard = () => {
  const { user } = useAuth();
  const role = "studet";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side  bg-white shadow-lg px-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Link className="" to="/">
          <span className=" normal-case text-xl font-bold">
            <FaGraduationCap className="text-4xl text-primary"></FaGraduationCap>{" "}
            BabelLingua
          </span>
        </Link>
        <div className="p-4">
          <img
            className="w-24 h-24 mx-auto border-2 border-primary rounded-full"
            src={user.photoURL}
            alt=""
          />
          <p className="text-center my-1 text-green-500">{user.displayName}</p>
          <h3 className="border-2 my-2"></h3>
          <ul className="space-y-2">
            {/* if user is a student */}

            {role == "student" && <></>}
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

            {/* if user is a student */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
