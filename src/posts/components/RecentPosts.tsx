import React from "react";
import { posts } from "../posts-data";
import PostCard from "./Post";
import { Post } from "../posts.types";
import "../../assets/styles/responsive.scss";

const RecentPosts: React.FC = () => {
  return (
    <div className="row g-3">
      {posts.map((post: Post) => (
        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
