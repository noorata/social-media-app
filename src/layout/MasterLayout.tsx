import React, { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "../assets/styles/MasterLayout.scss";

const MasterLayout: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
    <div className="d-flex flex-column py-5" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-block d-md-none text-end px-3 mb-2 py-3">
        <button className="btn btn-primary" onClick={toggleAside}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

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
      {isAsideOpen && (
        <div className="mobile-aside-overlay">
          <div className="aside-content">
            <button className="close-btn" onClick={toggleAside}>
              &times;
            </button>
            <Aside />
          </div>
          <div className="backdrop" onClick={toggleAside}></div>
        </div>
      )}
    </div>
  );
};

export default MasterLayout;
