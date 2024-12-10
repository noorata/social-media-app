import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MasterLayout: React.FC = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">
        <aside
          className="d-none d-md-block"
          style={{
            width: "250px",
            minWidth: "250px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Aside />
        </aside>

        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MasterLayout;
