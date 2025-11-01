// Home.jsx
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated, login } from "../auth";

export const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = () => {
    login(); // set auth flag
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Home</h1>
      <p style={{ color: "black" }}>This page is rendering correctly.</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Home;
