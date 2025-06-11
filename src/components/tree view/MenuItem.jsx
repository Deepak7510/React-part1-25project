import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ dataDetails }) => {
  const [openChildrenMenum, setOpenChildrenMenu] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div>{dataDetails.label}</div>
        {dataDetails?.children ? (
          <button
            className=" cursor-pointer"
            onClick={() => setOpenChildrenMenu(true)}
          >
            +
          </button>
        ) : null}
      </div>
      {dataDetails?.children && openChildrenMenum ? (
        <div>
          <MenuList data={dataDetails.children} />
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;
