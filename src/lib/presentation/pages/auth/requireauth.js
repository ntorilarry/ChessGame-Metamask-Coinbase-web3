import React from 'react'
import {useAuth} from "../auth/auth"
import { Navigate } from "react-router-dom";


export const Requireauth = ({ children }) => {
    const auth = useAuth()

    if(!auth.isConnected){
        return <Navigate to='/auth/login' />

    }
  return children
}
