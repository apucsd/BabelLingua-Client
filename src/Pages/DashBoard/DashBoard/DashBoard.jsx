import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {
  FaBars,
  FaBook,
  FaGraduationCap,
  FaHome,
  FaMoneyBillAlt,
  FaPen,
  FaPlus,
  FaUsers,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useUserRole from "../../../hooks/useUserRole";

const DashBoard = () => {
  const hideSideBar = () => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox
    }
  };

  const { userRole, isLoading } = useUserRole();

  return (
    <>
      {isLoading || (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content overflow-x-auto">
            {/* Page content here */}
            <div className="m-8">
              <label
                htmlFor="my-drawer-3"
                className="text-3xl drawer-button lg:hidden"
              >
                <FaBars></FaBars>
              </label>
            </div>

            <Outlet></Outlet>
          </div>
          <div className="drawer-side backdrop-blur-3xl">
            <label htmlFor="my-drawer-3 " className="drawer-overlay"></label>
            <ul className=" space-y-2 menu p-4 w-64 h-full border-r  shadow-lg text-base-content">
              <li>
                <button className="md:hidden  ms-44 " onClick={hideSideBar}>
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="10"
                      y1="10"
                      x2="90"
                      y2="90"
                      stroke="white"
                      strokeWidth="10"
                    />
                    <line
                      x1="10"
                      y1="90"
                      x2="90"
                      y2="10"
                      stroke="red"
                      strokeWidth="10"
                    />
                  </svg>
                </button>
              </li>
              <li className="font-medium p-1">
                <Link
                  to="/"
                  className="px-4 py-2 text-gray-700 bg-white rounded-md"
                >
                  <div className="mr-3 text-blue-500">
                    <FaHome></FaHome>
                  </div>
                  Back Home
                </Link>
              </li>

              {/* admin links */}
              {userRole === "admin" && (
                <>
                  <li className="font-medium p-1">
                    <Link
                      to="manage-classes"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
                        <FaBook></FaBook>
                      </div>
                      Manage Classes
                    </Link>
                  </li>
                  <li className="font-medium p-1">
                    <Link
                      to="manage-users"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
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
                      to="my-selected-class"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
                        <FaBook></FaBook>
                      </div>
                      My Selected Classes
                    </Link>
                  </li>
                  <li className="font-medium p-1">
                    <Link
                      to="enrolled-class"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
                        <FaPen></FaPen>
                      </div>
                      Enrolled Classes
                    </Link>
                  </li>
                  <li className="font-medium p-1">
                    <Link
                      to="payment-history"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
                        <FaMoneyBillAlt></FaMoneyBillAlt>
                      </div>
                      Payment History
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
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
                        <FaPlus></FaPlus>
                      </div>
                      Add a Class
                    </Link>
                  </li>
                  <li className="font-medium p-1">
                    <Link
                      to="instructor-my-class"
                      className="px-4 py-2 text-gray-700 bg-white rounded-md"
                    >
                      <div className="mr-3 text-blue-500">
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
      )}
    </>
  );
};

export default DashBoard;
