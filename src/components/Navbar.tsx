import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm py-2">
      <div className="container-fluid d-flex align-items-center justify-content-start">
        <a className="navbar-brand fw-bold text-primary fs-3 ps-5" href="#">
          LOGO
        </a>

        <div className="search-bar ">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i className="fas fa-search"></i>
        </div>

        <div className="d-flex align-items-center gap-4 ms-auto">
          {/* Icons */}
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-user"></i>
          </a>
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-bell"></i>
          </a>

          {/* Profile Picture */}
          <div className="profile-picture">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
