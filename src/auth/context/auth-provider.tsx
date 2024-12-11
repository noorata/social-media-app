import React, { ReactNode } from "react";
import { AuthContext, useAuthLogic } from "./auth-store";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { username, login } = useAuthLogic();

  return (
    <AuthContext.Provider value={{ username, login }}>
      {children}
    </AuthContext.Provider>
  );
};
