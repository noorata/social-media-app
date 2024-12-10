import React from "react";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../posts/components/Homepage";
import Friends from "../friends/components/Friends";
import Stories from "../stories/components/Stories";

const AppRoutes: React.FC = () => {
  return (
    <MasterLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/stories" element={<Stories />} />

        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/videos" element={<div>Watch Videos Page</div>} />
        <Route path="/files" element={<div>Files Page</div>} />
      </Routes>
    </MasterLayout>
  );
};

export default AppRoutes;
