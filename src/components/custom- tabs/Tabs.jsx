import React from "react";

const Tabs = ({ tabList }) => {
  return (
    <div>
      <div>
        {tabList && tabList.length > 0
          ? tabList.map((item) => {
              return <div>{item.label}</div>;
            })
          : null}
      </div>
    </div>
  );
};

export default Tabs;
