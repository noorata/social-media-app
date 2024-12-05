import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="content flex-grow-1 p-3">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
