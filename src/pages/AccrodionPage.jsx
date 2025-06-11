import { useState } from "react";
import data from "../configs/accordian-data.js";

function AccordionPage() {
  const [open, setOpen] = useState([]);
  const [enable, setEnable] = useState(false);
  function handleClick(getId) {
    if (enable) {
      if (open.includes(getId)) {
        let clonOpne = [...open];
        clonOpne = clonOpne.filter((item) => item !== getId);
        setOpen(clonOpne);
      } else {
        setOpen((pre) => [...pre, getId]);
      }
    } else {
      if (open.includes(getId)) {
        setOpen([]);
      } else {
        setOpen([getId]);
      }
    }
  }
  return (
    <div className="flex justify-center py-10">
      <div className="w-[500px]">
        <div className="flex justify-center">
          <button
            onClick={() => {
              setOpen([]);
              setEnable((pre) => !pre);
            }}
            className="text-white my-3 font-medium px-4 py-2 bg-green-500 rounded-2xl"
          >
            Enable Multi Selection
          </button>
        </div>
        <div className="space-y-4">
          {data && data.length > 0 ? (
            data.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  className="p-4 border cursor-pointer"
                >
                  <div className="flex justify-between">
                    <div>{item.question}</div>
                    <div>{open.includes(item.id) ? "-" : "+"}</div>
                  </div>
                  <div
                    className={`${open.includes(item.id) ? "block" : "hidden"}`}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })
          ) : (
            <div>No data found !</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccordionPage;
