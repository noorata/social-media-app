import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./helpers/AppRoutes";
import { AuthProvider } from "./auth/context/auth-provider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
