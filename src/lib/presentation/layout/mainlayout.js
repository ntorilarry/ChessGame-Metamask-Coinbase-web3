import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/header";

function Mainlayout() {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div>
        <div className="bgr h-screen w-full overflow-y-hidden flex">
          {/* sidebar */}
          <div className="side-bar">
            <div
              className={`absolute top-0 left-0 bottom-0 right-0 bgr z-[100] ${
                active ? "lg:hidden block" : "hidden"
              }`}
              onClick={onClick}
            ></div>
          </div>
          {/* main content */}
          <div className="relative overflow-y-scroll overflow-x-hidden grow ">
            <Header sidebarOpen={onClick} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainlayout;
