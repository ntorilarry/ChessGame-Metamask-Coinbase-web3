import React from "react";
import Logo from "../../core/resources/images/logowhite.png";

function Navbar() {
  return (
    <div>
      <header className="bg-transparent">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <img
                  className="w-auto h-10"
                  src={Logo}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
