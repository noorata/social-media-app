import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-3 text-center">
      <p className="mb-0">© 2024 Social Media App</p>
      <Link to="/rate-my-project">
        <button className="btn btn-primary">🎉 Rate My Project!</button>
      </Link>
    </footer>
  );
};

export default Footer;
