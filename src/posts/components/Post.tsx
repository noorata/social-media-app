import "../../assets/styles/responsive.scss"; // تأكد من المسار الصحيح

import React from "react";

interface PostProps {
  author: string;
  authorImg: string;
  img: string;
  likes: number;
  comments: number;
  tags: string[];
  content: string;
}

const Post: React.FC<PostProps> = ({
  author,
  authorImg,
  img,
  likes,
  comments,
  tags,
  content,
}) => {
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
          {tags.map((tag, index) => (
            <span key={index} className="text-primary me-2 fw-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/*content*/}
        <p className="text-muted">{content}</p>
      </div>
    </div>
  );
};

export default Post;
