import React from "react";

export const Button = ({ label }) => {
  return (
    <div>
      <button style={{ padding: "10px", background: "blue", color: "white" }}>
        {label}
      </button>
    </div>
  );
};
