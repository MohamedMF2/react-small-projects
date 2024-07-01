import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectionMap, setSelectionMap] = useState(new Map());

  const noData = <div>No data available</div>;

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
    <div className="accordion__wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="accordion light-box-shadow">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordion__item" key={item.id}>
              <div
                className="accordion__title"
                onClick={() => handleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>{enableMultiSelection ? (selectionMap.has(item.id) ? "-" : "+") : (selected === item.id ? "-" : "+")}</span>
              </div>
              {enableMultiSelection ? (
                selectionMap.has(item.id) && (
                  <div className="accordion__content">{item.answer}</div>
                )
              ) : (
                selected === item.id && (
                  <div className="accordion__content">{item.answer}</div>
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
