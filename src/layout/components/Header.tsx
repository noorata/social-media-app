import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Toolbar from "./Toolbar";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-white shadow-sm py-2 fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/*logo section*/}
        <div className="d-flex align-items-center">
          <Logo />
        </div>

        {/*search section*/}
        <div className="d-none d-md-flex flex-grow-1 justify-content-center">
          <Search />
        </div>

        {/*toolbar section*/}
        <div className="d-flex align-items-center justify-content-end">
          <Toolbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
