import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./components/Posts";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default AppRoutes;
