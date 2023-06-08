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
        path: "my-class",
        element: <MYClass></MYClass>,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            {" "}
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
