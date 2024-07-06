import React, { useState } from "react";
import data from "./data";
import { MdOutlineExpandMore ,MdOutlineExpandLess } from "react-icons/md";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectionMap, setSelectionMap] = useState(new Map());

  const noData = <div className="text-gray-500 text-center py-4">No data available</div>;

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (id) => {
    setSelectionMap((prevMap) => {
      const newMap = new Map(prevMap);
      if (newMap.has(id)) {
        newMap.delete(id);
      } else {
        newMap.set(id, true);
      }
      return newMap;
    });
  };

  const handleSelection = (id) => {
    if (enableMultiSelection) {
      handleMultiSelection(id);
    } else {
      handleSingleSelection(id);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="bg-white shadow-md rounded">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="border-b last:border-b-0">
              <div
                className="cursor-pointer flex justify-between items-center p-4 hover:bg-gray-100"
                onClick={() => handleSelection(item.id)}
              >
                <h3 className="font-medium">{item.question}</h3>
                <span>{enableMultiSelection ? (selectionMap.has(item.id) ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />) : (selected === item.id ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />)}</span>
              </div>
              {enableMultiSelection ? (
                selectionMap.has(item.id) && (
                  <div className="p-4 bg-gray-50">{item.answer}</div>
                )
              ) : (
                selected === item.id && (
                  <div className="p-4 bg-gray-50">{item.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          noData
        )}
      </div>
    </div>
  );
};
