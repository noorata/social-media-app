import React, { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../posts/components/Homepage";
import Friends from "../friends/components/Friends";
import Stories from "../stories/components/Stories";
import Login from "../auth/components/Login";
import { useAuth } from "../auth/context/auth-store";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { username } = useAuth();

  if (!username) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MasterLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="posts" element={<Stories />} />
        <Route path="events" element={<div>Events Page</div>} />
        <Route path="videos" element={<div>Watch Videos Page</div>} />
        <Route path="files" element={<div>Files Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
