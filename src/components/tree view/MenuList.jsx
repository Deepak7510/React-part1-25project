import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ data = [] }) => {
  return (
    <div className="ps-5">
      {data && data.length > 0
        ? data.map((item) => <MenuItem dataDetails={item} />)
        : null}
    </div>
  );
};

export default MenuList;
