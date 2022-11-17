import React from "react";
import { MenuAlt1Icon, SearchIcon } from "@heroicons/react/outline";
import Profile from "./profile";
import Logo from "../../core/resources/images/logowhite.png";

function Header(props) {
  return (
    <div>
      <div className="bg-white  z-[99] sticky top-0">
        <div className="sm:px-10">
          <div className="flex justify-between item-center px-4 py-4">
            <div className="flex items-center gap-4 ">
              <img className="h-10" src={Logo} alt="" />
            </div>
            <div className="flex flex-row items-center md:gap-7 gap-4 ">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
