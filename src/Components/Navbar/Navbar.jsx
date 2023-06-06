import React from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  //   const { user, logOut } = useAuth();
  //   console.log(user);
  const user = false;
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-team"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold" : ""
          }
        >
          Our Team
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  //   const handleLogOut = () => {
  //     Swal.fire({
  //       title: "Are you sure?",

  //       showCancelButton: true,
  //       confirmButtonColor: "#F63E7B",
  //       cancelButtonColor: "#04B404",
  //       confirmButtonText: "Logout",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         logOut().then(() => {
  //           toast.success("Logout is successful");
  //         });
  //       }
  //     });
  //   };
  return (
    <div className={`navbar bg-base-100  z-10 max-w-screen-lg navbar-img`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* set ul link */}
            {links}
          </ul>
        </div>
        <Link className="" to="/">
          <span className="btn btn-ghost normal-case text-xl">
            <FaGraduationCap className="text-4xl text-primary"></FaGraduationCap>{" "}
            BabelLingua
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden ms-auto lg:flex justify-end">
        {/* menu item center div lg */}
        <ul className="menu menu-horizontal  px-1">{links}</ul>
      </div>
      <div className="ms-auto md:ms-0 ">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="h-10 w-10">
                <img
                  className="h-full w-full rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-medium">
                  <Link
                    to="/profile"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                  >
                    <div className="mr-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    Profile
                  </Link>
                </li>
                <li className="font-medium">
                  <Link
                    to="dashboard"
                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                  >
                    <div className="mr-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    DashBoard
                  </Link>
                </li>
                <li
                  // onClick={handleLogOut}
                  className="font-medium"
                >
                  <a className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-pink-600">
                    <div className="mr-3 text-pink-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="primary-btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
