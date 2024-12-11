import React from "react";
import "../../assets/styles/Toolbar.scss";
import { useAuth } from "../../auth/context/auth-store";

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

      {/*profile picture*/}
      <div className="rounded-circle overflow-hidden profile-picture">
        <img
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="Profile"
          className="img-fluid w-100 h-100 object-cover"
        />
      </div>

      {/*username and logout button*/}
      {username ? (
        <>
          <span className="text-dark fw-bold fs-6">Welcome, {username}!</span>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={logout}
            title="Logout"
          >
            Logout
          </button>
        </>
      ) : (
        <span className="text-muted fs-6">Not logged in</span>
      )}
    </div>
  );
};

export default Toolbar;
