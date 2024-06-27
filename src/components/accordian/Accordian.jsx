import React from "react";
import data from "./data";
export const Accordian = () => {
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          <div>Data has {data.length} items</div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};
