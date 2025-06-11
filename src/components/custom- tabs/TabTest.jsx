import React from "react";
import Tabs from "./Tabs";

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: "kkd",
    },
  ];
  return (
    <div>
      <Tabs tabList={tabs} />
    </div>
  );
};

export default TabTest;
