import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./Post";
import { Post } from "../posts.types";
import { getPublishedPostsPaginated } from "../posts-api";
import "../../assets/styles/responsive.scss";

const RecentPosts: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  //fetch the published posts from localStorage
  const fetchPublishedPosts = async () => {
    try {
      const response = await getPublishedPostsPaginated(page, 4);
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
      setHasMore(response.hasMore);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to load posts:", error);
    }
  };

  useEffect(() => {
    fetchPublishedPosts();
  }, []);

  return (
    <div className="row g-3">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPublishedPosts}
        hasMore={hasMore}
        loader={<div className="text-center text-muted">Loading posts...</div>}
        endMessage={
          <p className="text-center text-muted">No more posts to show.</p>
        }
      >
        {posts.length === 0 ? (
          <div className="text-center text-muted">
            No published posts available.
          </div>
        ) : (
          posts.map((post: Post) => (
            <div className="col-12" key={post.id}>
              <PostCard post={post} />
            </div>
          ))
        )}
      </InfiniteScroll>
    </div>
  );
};

export default RecentPosts;
