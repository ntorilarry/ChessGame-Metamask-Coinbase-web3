import React from 'react'
import { MenuAlt1Icon, SearchIcon } from "@heroicons/react/outline";
import Profile from './profile';

function Header(props) {
  return (
    <div>
       <div className="bg-white  z-[99] sticky top-0">
      <div className="">
        <div className="flex justify-between item-center px-4 py-4">
          <div className="flex items-center gap-4 ">
           
          </div>
          <div className="flex flex-row items-center md:gap-7 gap-4 ">
        
            <Profile/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header