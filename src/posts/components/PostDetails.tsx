import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../posts-api";
import { Post } from "../posts.types";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const fetchPostDetails = async () => {
    if (!id) {
      toast.error(t("postDetails.invalidId"));
      navigate("/posts-management");
      return;
    }
    try {
      setLoading(true);
      const fetchedPost = await getPost(Number(id));
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        toast.error(t("postDetails.notFound"));
        navigate("/posts-management");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      toast.error(t("postDetails.failedLoad"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">{t("postDetails.loading")}</div>;
  }

  if (!post) {
    return <div className="text-center mt-5">{t("postDetails.noPost")}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center text-primary">{post.title}</h1>

      <div className="card shadow-lg p-4">
        <div className="text-center mb-4">
          <img
            src={post.img || "https://via.placeholder.com/600x300"}
            alt={post.title}
            style={{ maxWidth: "50%", height: "50%" }}
            className="rounded img-thumbnail"
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>
              <strong className="text-secondary">
                {t("postDetails.description")}:
              </strong>
              <br />
              {post.description || t("postDetails.noDescription")}
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong className="text-secondary">
                {t("postDetails.author")}:
              </strong>{" "}
              {post.author}
            </p>
            <p>
              <strong className="text-secondary">
                {t("postDetails.dateCreated")}:
              </strong>{" "}
              {new Date(post.dateCreated).toLocaleString()}
            </p>
            <p>
              <strong className="text-secondary">
                {t("postDetails.status")}:
              </strong>{" "}
              <span
                className={clsx("badge", {
                  "bg-success": post.status === "published",
                  "bg-warning text-dark": post.status === "draft",
                  "bg-danger": post.status === "deleted",
                })}
              >
                {post.status.toUpperCase()}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <strong className="text-secondary">{t("postDetails.tags")}:</strong>
          {post.tags.length > 0 ? (
            <div className="d-flex flex-wrap mt-2 gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge rounded-pill bg-primary text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-muted">{t("postDetails.noTags")}</p>
          )}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary px-4 py-2"
            onClick={() => navigate("/posts-management")}
          >
            &larr; {t("postDetails.backToPosts")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
