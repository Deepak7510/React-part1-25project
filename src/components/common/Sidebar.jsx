import React from "react";
import { Link } from "react-router-dom";

const projectsList = [
  {
    label: "Accrodian",
    path: "/accordion",
  },
  {
    label: "Give Star",
    path: "/give-star",
  },
  {
    label: "Genrate Random Color",
    path: "/generate-random-color",
  },
  {
    label: "Genrate QR Code",
    path: "/generate-qr-code",
  },
  {
    label: "Readmore Functionalty",
    path: "/readmore-functionalty",
  },
  {
    label: "Theme Mode",
    path: "/theme-change-mode",
  },
  {
    label: "Custom Slider",
    path: "/custom-slider",
  },
  {
    label: "Custom Tabs",
    path: "/custom-tabs",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-80 border h-screen ">
      <div className="text-2xl font-bold bg-black p-2 text-white">
        <Link to={"/"}> 25 Projects</Link>
      </div>
      <div className="p-2 space-y-2">
        {projectsList && projectsList.length > 0 ? (
          projectsList.map((item, index) => {
            return (
              <Link
                className="p-1 bg-gray-300 font-medium block rounded-sm"
                key={item.label}
                to={item.path}
              >
                {index + 1}
                {"."} {item.label}
              </Link>
            );
          })
        ) : (
          <div>No projects</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
