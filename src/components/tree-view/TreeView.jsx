import React from "react";
import { MenuList } from "./MenuList";

export const TreeView = ({ menus }) => {
  return (
    <div className="w-64">
      <MenuList list={menus} />;
    </div>
  );
};
