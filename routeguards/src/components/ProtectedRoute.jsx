import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../auth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
