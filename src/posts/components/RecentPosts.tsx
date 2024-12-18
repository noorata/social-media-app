import React, { useEffect, useState } from "react";
import PostCard from "./Post";
import { Post } from "../posts.types";
import { getPublishedPosts } from "../posts-api";
import "../../assets/styles/responsive.scss";

const RecentPosts: React.FC = () => {
  const [publishedPosts, setPublishedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //fetch the published posts from localStorage
  const fetchPublishedPosts = async () => {
    try {
      setLoading(true);
      const posts = await getPublishedPosts();
      setPublishedPosts(posts);
    } catch (error) {
      console.error("Failed to load posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  return (
    <div className="row g-3">
      {loading ? (
        <div className="text-center text-muted">Loading posts...</div>
      ) : publishedPosts.length > 0 ? (
        publishedPosts.map((post: Post) => (
          <div className="col-12 col-md-6 col-lg-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div className="text-center text-muted">
          No published posts available.
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
