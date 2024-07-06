import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ list }) => {
  return (
    <ul  className="pl-2 border-l border-gray-200">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};
