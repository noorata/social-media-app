import React, { useEffect, useState } from "react";
import "../assets/styles/insights.scss";
import { Post } from "../posts/posts.types";
import { getAllPosts } from "../posts/posts-api";
import LikesChart from "./charts/LikesChart";
import StatusesChart from "./charts/StatusesChart";
import { useTranslation } from "react-i18next";

const Insights: React.FC = () => {
  const { t } = useTranslation();
  const [likesData, setLikesData] = useState<number[]>([]);
  const [statusesData, setStatusesData] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getAllPosts();

      const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
      const likesByDay = daysInMonth.map((day) =>
        allPosts.reduce((sum: number, post: Post) => {
          const postDate = new Date(post.dateCreated);
          return postDate.getDate() === day ? sum + post.likes : sum;
        }, 0)
      );
      setLikesData(likesByDay);

      const draftCount = allPosts.filter(
        (post: Post) => post.status === "draft"
      ).length;
      const publishedCount = allPosts.filter(
        (post: Post) => post.status === "published"
      ).length;
      const deletedCount = allPosts.filter(
        (post: Post) => post.status === "deleted"
      ).length;
      setStatusesData([draftCount, publishedCount, deletedCount]);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{t("insights.pageTitle")}</h2>
      <LikesChart data={likesData} />
      <StatusesChart data={statusesData} />
    </div>
  );
};

export default Insights;
