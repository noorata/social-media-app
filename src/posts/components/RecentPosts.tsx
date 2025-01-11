import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./Post";
import { Post } from "../posts.types";
import { getPublishedPostsPaginated } from "../posts-api";
import "../../assets/styles/responsive.scss";
import { useTranslation } from "react-i18next";

const RecentPosts: React.FC = () => {
  const { t } = useTranslation();
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
        loader={
          <div className="text-center text-muted">
            {t("recentPosts.loadingPosts")}
          </div>
        }
        endMessage={
          <p className="text-center text-muted">{t("recentPosts.noMore")}</p>
        }
      >
        {posts.length === 0 ? (
          <div className="text-center text-muted">
            {t("recentPosts.noPosts")}
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
