import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-dots  text-primary loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
