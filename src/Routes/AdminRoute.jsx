import React from "react";
import useUserRole from "../hooks/useUserRole";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { userRole } = useUserRole();
  if (userRole == "admin") {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
