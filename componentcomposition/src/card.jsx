// Card.js
import React from "react";
import { Button } from "./button";

function Card({ title, text }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      <Button label="Read More" />
    </div>
  );
}

export default Card;
