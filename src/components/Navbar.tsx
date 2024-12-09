import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a className="navbar-brand fw-bold text-primary fs-3 px-5" href="#">
          LOGO
        </a>

        {/*Search Bar*/}
        <div className="search-bar d-none d-md-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i className="fas fa-search"></i>
        </div>

        <div className="d-flex align-items-center gap-4 ms-auto"></div>

        {/*icons*/}
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-user"></i>
          </a>
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#" className="text-dark fs-5">
            <i className="fas fa-bell"></i>
          </a>

          {/*profile picture*/}
          <div className="profile-picture">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
