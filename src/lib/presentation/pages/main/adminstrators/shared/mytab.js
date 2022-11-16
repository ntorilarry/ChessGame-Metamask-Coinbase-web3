import React from "react";
import { Link } from "react-router-dom";

function Mytab() {
  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500  border-gray-200 ">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:border-b-2 hover:border-blue-600 active hover:text-gray-600 hover:border-gray-300 "
            >
              Available Games
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 text-blue-600 rounded-t-lg hover:border-b-2 hover:border-blue-600 "
            >
              Unavailable Games
            </a>
          </li>
          <li className="mr-2">
            <Link
              to="/completed"
              className="inline-block p-4 text-blue-600 rounded-t-lg hover:border-b-2 hover:border-blue-600"
            >
              Completed Games
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mytab;
