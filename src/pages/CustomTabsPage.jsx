import React from "react";
import Tabs from "../components/Tabs";

const CustomTabsPage = () => {
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
    <div className="w-full px-10 pt-10">
      <div className="p-1 border rounded-lg">
        <Tabs tabList={tabs} />
      </div>
    </div>
  );
};

export default CustomTabsPage;
