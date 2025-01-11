import React, { useState } from "react";
import { useAuth } from "../context/auth-store";
import { useNavigate } from "react-router-dom";
import "../Login.scss";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert("Login failed. Please check your credentials.");
      console.error(err);
    }
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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
