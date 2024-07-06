import React, { useState } from "react";

const colorsHistory = [];
const getRandomHexadecimalColor = () => {
  const letters = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  colorsHistory.push(color);
  console.log(colorsHistory);
  return color;
};

const getRandomRGBColor = () => {
  let color = "";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  color = `rgb(${r}, ${g}, ${b})`;
  colorsHistory.push(color);
  console.log(colorsHistory);

  return color;
};

export const ColorChanger = () => {
  const [colorsMode, setColorsMode] = useState("Hexadecimal");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const changeColor = () => {
    console.log("change Color");
    if (colorsMode === "Hexadecimal") {
      setBackgroundColor(getRandomHexadecimalColor());
    } else {
      setBackgroundColor(getRandomRGBColor());
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen"
      style={{
        backgroundColor,
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Mode: {colorsMode}</h1>
      <p className="mb-4">Value: {backgroundColor}</p>
      <div className="space-x-2">
        <button
          onClick={() => setColorsMode("Hexadecimal")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Hexadecimal Colors
        </button>
        <button
          onClick={() => setColorsMode("RGB")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
        >
          RGB Colors
        </button>
        <button
          onClick={changeColor}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
        >
          Change Color
        </button>
      </div>
    </div>
  );
};
