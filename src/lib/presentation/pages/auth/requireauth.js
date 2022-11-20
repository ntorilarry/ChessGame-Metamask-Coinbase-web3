import React from 'react'
import {useAuth} from "../auth/auth"
import { Navigate , useLocation} from "react-router-dom";


export const Requireauth = ({ children }) => {
    const auth = useAuth()
    let location = useLocation()
    // get from localhost
    const userAccountModel = localStorage.getItem("userAuthObjectModel")
    console.log(JSON.parse(userAccountModel))
    if(!auth.isConnected && !userAccountModel){
        return <Navigate to='/auth/login' state={{ from: location }} replace />
    }else {
      return children
    }
}