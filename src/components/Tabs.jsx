import React, { useState } from "react";

const Tabs = ({ tabList }) => {
  const [indexValue, setIndexValue] = useState(0);
  return (
    <div>
      <div className="flex gap-2 bg-gray-200 p-1 rounded-md">
        {tabList && tabList.length > 0
          ? tabList.map((item, index) => {
              return (
                <button
                  onClick={() => setIndexValue(index)}
                  className={`bg-gray-300 px-8 rounded-lg py-1 ${
                    indexValue === index ? "bg-gray-600" : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })
          : null}
      </div>
      <div className="p-2">
        {tabList[indexValue] && tabList[indexValue].content && (
          <div>{tabList[indexValue].content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
