import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../posts-api";
import { Post } from "../posts.types";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPostDetails = async () => {
    if (!id) {
      toast.error("Invalid Post ID!");
      navigate("/posts-management");
      return;
    }
    try {
      setLoading(true);
      const fetchedPost = await getPost(Number(id));
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        toast.error("Post not found!");
        navigate("/posts-management");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      toast.error("Failed to load post details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading post details...</div>;
  }

  if (!post) {
    return <div className="text-center mt-5">No post found.</div>;
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
              <strong className="text-secondary">Description:</strong>
              <br />
              {post.description || "No description provided."}
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong className="text-secondary">Author:</strong> {post.author}
            </p>
            <p>
              <strong className="text-secondary">Date Created:</strong>{" "}
              {new Date(post.dateCreated).toLocaleString()}
            </p>
            <p>
              <strong className="text-secondary">Status:</strong>{" "}
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
          <strong className="text-secondary">Tags:</strong>
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
            <p className="text-muted">No tags available</p>
          )}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-outline-secondary px-4 py-2"
            onClick={() => navigate("/posts-management")}
          >
            &larr; Back to Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
