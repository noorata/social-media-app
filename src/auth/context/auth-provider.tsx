import React, { ReactNode } from "react";
import { AuthContext, useAuthLogic } from "./auth-store";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { username, login, logout } = useAuthLogic();

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
