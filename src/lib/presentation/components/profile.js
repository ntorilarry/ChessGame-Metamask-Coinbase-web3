import React from "react";
import { useAuth } from "../pages/auth/auth";

function Profile() {
  const {account, ethBal} = useAuth();
  return (
    <div className="flex">
      <p className="bg-[#438FFE] px-2 py-2 text-white">{ethBal}</p>
      <p className="bg-white px-2 py-2 text-black">{account}</p>
    </div>
  );
}

export default Profile;