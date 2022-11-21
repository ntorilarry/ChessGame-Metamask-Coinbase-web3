import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/auth";

function Profile() {
  const navigate = useNavigate()
  const {account, ethBal, logout} = useAuth();

  const onDisconnect = (event) => {
    event.preventDefault()
    localStorage.removeItem("userAuthObjectModel");
    logout();
    navigate("/auth/login", { replace: true });
  };
  
  return (
    <div className="flex my-auto py-auto">
      <p className="bg-[#438FFE] px-2 py-2 text-white">{ethBal} ETH</p>
      <p className="bg-white px-2 py-2 text-black ">{account}</p>
      <button onClick={(e)=> onDisconnect(e)} className="text-[#438FFE] font-bold px-2 py-2 text-white">Logout</button>
    </div>
    
  );
}

export default Profile;