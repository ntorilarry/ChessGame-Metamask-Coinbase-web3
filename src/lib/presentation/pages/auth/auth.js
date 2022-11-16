import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(null);


  const login = (isConnected) => {
    setIsConnected(isConnected);
  };

  const logout = () => {
    setIsConnected(null);
  };

  return (
    <AuthContext.Provider value={(isConnected, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
