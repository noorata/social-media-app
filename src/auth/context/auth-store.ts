import { createContext, useContext, useState, useEffect } from "react";

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
  const [username, setUsername] = useState(() => {
    const storedUsername = localStorage.getItem("username");
    const expiration = localStorage.getItem("expiration");
    if (storedUsername && expiration && new Date(expiration) > new Date()) {
      return storedUsername;
    }
    return "";
  });

  const login = (username: string) => {
    setUsername(username);
    localStorage.setItem("username", username);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
  };

  const logout = () => {
    setUsername("");
    localStorage.removeItem("username");
    localStorage.removeItem("expiration");
  };

  useEffect(() => {
    const expiration = localStorage.getItem("expiration");
    if (expiration && new Date(expiration) <= new Date()) {
      logout();
    }
  }, []);

  return { username, login, logout };
};
