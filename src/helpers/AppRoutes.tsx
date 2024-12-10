import React from "react";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../posts/components/Homepage";
import Friends from "../friends/components/Friends";
import Stories from "../stories/components/Stories";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="posts" element={<Stories />} />
        <Route path="events" element={<div>Events Page</div>} />
        <Route path="videos" element={<div>Watch Videos Page</div>} />
        <Route path="files" element={<div>Files Page</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
