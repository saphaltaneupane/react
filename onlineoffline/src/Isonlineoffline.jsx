import React from "react";

export const Isonlineoffline = ({ status }) => {
  return (
    <div>
      <p>{status ? "Online " : "Offline "}</p>
    </div>
  );
};
