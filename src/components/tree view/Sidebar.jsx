import React from "react";
import MenuList from "./MenuList";
import menus from "./data";

const Sidebar = () => {
  return (
    <div className="flex gap">
      <aside className=" w-60 p-4">
        <MenuList data={menus} />
      </aside>
      <main>Pages</main>
    </div>
  );
};

export default Sidebar;
