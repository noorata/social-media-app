import { createContext, useContext, useState } from "react";

export interface AuthContextType {
  username: string;
  login: (username: string) => void;
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
  const [username, setUsername] = useState("");

  const login = (username: string) => {
    setUsername(username);
  };

  return { username, login };
};
