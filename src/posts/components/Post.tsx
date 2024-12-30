import "../../assets/styles/responsive.scss";
import { Post } from "../posts.types";
import { useTranslation } from "react-i18next";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { t } = useTranslation();
  const { author, authorImg, img, likes, comments, tags, content } = post;

  return (
    <div className="card shadow-sm border-0 rounded overflow-hidden">
      {/*post image*/}
      <img src={img} className="card-img-top post-img" alt="Post" />

      {/*card body*/}
      <div className="card-body">
        {/*author information*/}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <img
              src={authorImg}
              alt={author}
              className="rounded-circle me-3"
              style={{ width: "30px", height: "30px" }}
            />
            <h6 className="mb-0">{author}</h6>
          </div>
          <div className="d-flex align-items-center gap-3 text-muted">
            <span>
              <i className="fas fa-heart me-1"></i>
              {likes}
            </span>
            <span>
              <i className="fas fa-comment me-1"></i>
              {comments}
            </span>
          </div>
        </div>

        {/*tags*/}
        <div className="mb-2 d-flex flex-wrap">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span key={index} className="text-primary me-2 fw-semibold">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-muted">{t("posts.noTags")}</span>
          )}
        </div>

        {/*content*/}
        <p className="text-muted">{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
