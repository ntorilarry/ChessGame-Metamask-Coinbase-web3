import React from "react";

function Navbar() {
  return (
    <div>
      <header className="bg-transparent">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="#" title="" className="inline-flex">
                <span className="sr-only"> Rareblocks logo </span>
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg"
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
