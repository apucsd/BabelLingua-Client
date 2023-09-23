import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-500" : ""
          }
        >
          <svg
            className="w-4 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>{" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-500" : ""
          }
        >
          <svg
            className="w-4 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 19"
          >
            <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
            <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
          </svg>{" "}
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-500" : ""
          }
        >
          <svg
            className="w-4 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"
            />
          </svg>
          Classes
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",

      showCancelButton: true,
      confirmButtonColor: "#4338ca",
      cancelButtonColor: "#D60093",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          toast.success("Logout is successful");
          navigate("/login");
        });
      }
    });
  };
  return (
    <>
      <div
        className={`px-8 navbar backdrop-blur  border-gray-100 z-20 border-b`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-4"
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
          </div>
          <Link className="" to="/">
            <span className="flex items-center">
              <svg
                className="w-auto h-6 text-white fill-current"
                viewBox="0 0 194 116"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fillRule="evenodd">
                  <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z"></path>
                  <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                </g>
              </svg>
              <span className="text-white font-bold">BabelLingua</span>
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden ms-auto lg:flex justify-end">
          {/* menu item center div lg */}
          <ul className="menu menu-horizontal  px-1 z-20">{links}</ul>
        </div>
        <div className="ms-auto md:ms-0 ">
          {user ? (
            <>
              <div className="h-10 w-10">
                <label htmlFor="my-drawer-2">
                  <img
                    className="h-10 w-10 rounded-full cursor-pointer"
                    src={user.photoURL}
                    alt=""
                  />
                </label>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <svg
                  className="w-8 h-8 text-gray-80"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* menu */}
      <div className={`drawer  md:drawer-start drawer-end lg:drawer-start`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"></div>
        <div className="drawer-side z-40 ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  md:w-80 lg:w-80 w-[60%]  min-h-full bg-base-200 text-base-content pt-6 space-y-4 flex flex-col items-center">
            {/* Sidebar content here */}
            <div className="space-y-6 md:space-y-10 pt-10 px-6 backdrop-blur-lg">
              <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                Dashboard<span className="text-teal-600">.</span>
              </h1>
              <div id="profile" className="space-y-3">
                <img
                  src={user?.photoURL}
                  alt="Avatar user"
                  className="w-10 md:w-16 h-10 md:h-16 rounded-full mx-auto"
                />
                <div>
                  <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                    {user?.email}
                  </h2>
                </div>
              </div>

              <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input
                  type="text"
                  className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                  placeholder="Search"
                />

                <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                  <svg
                    className="w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="border-s-2 border-blue-400">{links}</div>
              <div id="menu" className="flex flex-col space-y-2">
                <Link
                  to="/dashboard/home"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="">Dashboard</span>
                </Link>

                <button
                  onClick={handleLogOut}
                  className="flex items-center  text-sm font-medium text-gray-700 py-2 px-2 hover:bg-blue-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="9" y1="9" x2="15" y2="15" />{" "}
                    <line x1="15" y1="9" x2="9" y2="15" />
                  </svg>
                  <span>Log out</span>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
