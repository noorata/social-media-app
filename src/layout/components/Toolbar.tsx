import React from "react";
import "../../assets/styles/Toolbar.scss";
import { useAuth } from "../../auth/context/auth-store";
import { Dropdown } from "react-bootstrap";

const Toolbar: React.FC = () => {
  const { username, logout } = useAuth();
  console.log("Toolbar username:", username);

  return (
    <div className="d-flex align-items-center gap-3">
      {/*user icon*/}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-user"></i>
      </a>

      {/*envelope icon */}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-envelope"></i>
      </a>

      {/*bell icon*/}
      <a href="#" className="text-dark fs-5">
        <i className="fas fa-bell"></i>
      </a>

      {/*profile picture with dropdown*/}
      <Dropdown align="end" style={{ position: "relative", zIndex: 1050 }}>
        <Dropdown.Toggle
          as="div"
          id="dropdown-profile"
          className="d-flex align-items-center gap-2 rounded-circle overflow-hidden profile-picture"
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="Profile"
            className="img-fluid w-100 h-100 object-cover"
          />
          <i className="fas fa-caret-down text-dark"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {username ? (
            <>
              <Dropdown.ItemText className="text-dark fw-bold">
                Welcome, {username}!
              </Dropdown.ItemText>
              <Dropdown.Divider />
              <Dropdown.Item
                as="button"
                className="text-danger"
                onClick={logout}
              >
                Logout
              </Dropdown.Item>
            </>
          ) : (
            <Dropdown.ItemText className="text-muted">
              Not logged in
            </Dropdown.ItemText>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Toolbar;
