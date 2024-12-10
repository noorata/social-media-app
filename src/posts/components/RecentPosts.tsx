import React from "react";
import { posts } from "../posts-data";
import Post from "./Post";
import "../../assets/styles/responsive.scss";

const RecentPosts: React.FC = () => {
  return (
    <div className="row g-3">
      {posts.map((post) => (
        <div className="col-12 col-md-6" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
