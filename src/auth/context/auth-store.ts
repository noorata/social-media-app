import { createContext, useContext, useState, useEffect } from "react";
import { login as loginService, logout as logoutService, getStoredUsername } from "../services/login.service";

export interface AuthContextType {
  username: string;
  role: "admin" | "user";
  login: (email: string, password: string) => Promise<void>;
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
  const storedUserName = getStoredUsername ();
  const [username, setUsername] = useState(storedUserName.username);
  const [role, setRole] = useState(storedUserName.role);

  const login = async (email: string, password: string) => {
    try {
      const profile = await loginService(email, password);
      setUsername(profile.name || "");
      setRole(profile.role || "user");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    logoutService();
    setUsername("");
    setRole("user");    
  };

  useEffect(() => {
    const expiration = localStorage.getItem("expiration");
    if (expiration && new Date(expiration) <= new Date()) {
      logout();
    }
  }, []);

  return { username, role, login, logout };
};
