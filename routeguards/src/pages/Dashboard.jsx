import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
