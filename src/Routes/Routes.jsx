import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
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
import MySelectedClass from "../Pages/DashBoard/Student/MySelectedClass/MySelectedClass";
import Instructors from "../Pages/Instructors/Instructors";
import PaymentHistory from "../Pages/DashBoard/Student/PaymentHistory/PaymentHistory";
import Payment from "../Pages/DashBoard/Student/Payment/Payment";
import SingleTeacherClasses from "../Pages/SingleTeacherClasses/SingleTeacherClasses";

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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors/:id",
        element: <SingleTeacherClasses></SingleTeacherClasses>,
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
        path: "my-selected-class",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enrolled-class",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
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
