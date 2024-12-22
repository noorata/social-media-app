import React, { useState } from "react";
import { useAuth } from "../context/auth-store";
import { useNavigate } from "react-router-dom";
import "../Login.scss";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"admin" | "user">("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }
    login(username, role);
    navigate("/");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-3">Welcome Back</h2>
        <p className="text-center text-muted mb-4">
          Login to access your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <div>
              <label className="me-3">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={() => setRole("user")}
                />
                User
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            Don't have an account? <a href="#">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
