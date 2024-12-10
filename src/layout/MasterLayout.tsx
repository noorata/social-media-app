import React, { ReactNode } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./Footer";

interface MasterLayoutProps {
  children: ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
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

        <main className="flex-grow-1 p-4">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default MasterLayout;
