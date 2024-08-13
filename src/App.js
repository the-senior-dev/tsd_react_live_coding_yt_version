import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Square = ({ index, color, handleClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "20px",
        height: "20px",
        margin: "10px",
      }}
      onClick={() => {
        handleClick(index);
      }}
    ></div>
  );
};


export default function App() {
  // TODO: Add your code here


}
