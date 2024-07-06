import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

export const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(
    new Map()
  );

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren((prevMap) => {
      const newMap = new Map(prevMap);
      if (newMap.has(currentLabel)) {
        newMap.delete(currentLabel);
      } else {
        newMap.set(currentLabel, true);
      }
      return newMap;
    });
  };

  const { label, children } = item;

  return (
    <li className="pl-3">
      <div
        className="flex items-center py-2 gap-2 hover:bg-slate-200 cursor-pointer rounded"
        onClick={() => handleToggleChildren(label)}
      >
        <p className="flex-1">{label}</p>
        {children && children.length > 0 ? (
          displayCurrentChildren.has(label) ? (
            <MdOutlineExpandLess className="text-sky-700" />
          ) : (
            <MdOutlineExpandMore className="text-sky-700" />
          )
        ) : null}
      </div>

      {children && children.length > 0 && displayCurrentChildren.has(label) ? (
        <MenuList list={children} />
      ) : null}
    </li>
  );
};
