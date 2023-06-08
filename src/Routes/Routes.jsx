import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import MYClass from "../Pages/DashBoard/Student/MyClass/MYClass";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../Pages/DashBoard/Admin/ManageUser/ManageUser";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/DashBoard/DashBoard/Instructor/AddClass/AddClass";
import InstructorMyClass from "../Pages/DashBoard/DashBoard/Instructor/InstructorMyClass/InstructorMyClass";
import DashBoardHome from "../Pages/DashBoard/DashBoard/DashBoardHome/DashBoardHome";
import ManageClass from "../Pages/DashBoard/Admin/ManageClass/ManageClass";
import EnrolledClass from "../Pages/DashBoard/Student/EnrolledClass/EnrolledClass";
import Classes from "../Pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "my-class",
        element: <MYClass></MYClass>,
      },
      {
        path: "enrolled-class",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "instructor-my-class",
        element: <InstructorMyClass></InstructorMyClass>,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
