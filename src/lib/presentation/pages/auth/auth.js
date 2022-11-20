import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userAccountModel = JSON.parse(localStorage.getItem("userAuthObjectModel"))
  const acc = userAccountModel ? userAccountModel.userAccount : ""
  const bal = userAccountModel ? userAccountModel.ethBal : 0
  
  const [isConnected, setIsConnected] = useState(false);
  const [account, setUserAccount] = useState(acc)
  const [ethBal, setEthBal] = useState(bal)

  const userAccount = (userAccount) => {
    setUserAccount(userAccount)
  }

  const userBalance = (userBal) => {
    setEthBal(userBal)
  }

  const login = (isConnected) => {                  
    setIsConnected(isConnected);
  };

  const logout = () => {
    setIsConnected(null); 
  };

  return (
    <AuthContext.Provider value={{isConnected, login, logout, account, ethBal, userAccount, userBalance }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};