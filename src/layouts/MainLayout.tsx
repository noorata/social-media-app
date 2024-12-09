import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Friends from "../components/Friends";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", margin: "0" }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="content flex-grow-1 p-0">{children}</main>
        <div className="friends-wrapper" style={{ width: "400px", padding: "10px 0 0 0" }}>
          <Friends />
        </div>
      </div>
    </div>
  );
};


export default MainLayout;
