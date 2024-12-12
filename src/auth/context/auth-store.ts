import { createContext, useContext, useState, useEffect } from "react";
import { login as loginService, logout as logoutService, getStoredUsername } from "../services/login.service";

export interface AuthContextType {
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const useAuthLogic = () => {
  const [username, setUsername] = useState(() => getStoredUsername());

  const login = (username: string) => {
    loginService(username);
    setUsername(username);
  };

  const logout = () => {
    logoutService();
    setUsername("");
  };

  useEffect(() => {
    const expiration = localStorage.getItem("expiration");
    if (expiration && new Date(expiration) <= new Date()) {
      logout();
    }
  }, []);

  return { username, login, logout };
};
