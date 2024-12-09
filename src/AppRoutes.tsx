import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./components/Posts";
import Friends from "./components/Friends";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/friends" element={<Friends />} />

      <Route path="/posts" element={<Posts />} />

      <Route path="/events" element={<div>Events Page</div>} />
      <Route path="/videos" element={<div>Watch Videos Page</div>} />
      <Route path="/files" element={<div>Files Page</div>} />
    </Routes>
  );
};

export default AppRoutes;
