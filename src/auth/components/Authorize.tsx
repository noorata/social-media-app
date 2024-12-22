import React from "react";
import { useAuth } from "../context/auth-store";

interface AuthorizeProps {
  allowedRoles: ("admin" | "user")[];
  children: React.ReactNode;
}

const Authorize: React.FC<AuthorizeProps> = ({ allowedRoles, children }) => {
  const { role } = useAuth();
  return allowedRoles.includes(role) ? <>{children}</> : null;
};

export default Authorize;
