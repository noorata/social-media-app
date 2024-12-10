import React from "react";
import { Link } from "react-router-dom";

const Aside: React.FC = () => {
  return (
    <div
      className="sidebar bg-white text-black shadow-sm d-flex flex-column p-3"
      style={{ minHeight: "100vh", maxWidth: "250px" }}
    >
      {/*navigation menu*/}
      <ul className="list-unstyled mb-4">
        <li className="py-3 px-4 d-flex align-items-center rounded hover-effect">
          <i className="fas fa-home me-3 text-muted"></i>
          <Link to="/" className="text-black text-decoration-none fw-semibold">
            Feed
          </Link>
        </li>
        <li className="py-3 px-4 d-flex align-items-center rounded hover-effect">
          <i className="fas fa-user-friends me-3 text-muted"></i>
          <Link
            to="/friends"
            className="text-black text-decoration-none fw-semibold"
          >
            Friends
          </Link>
        </li>
        <li className="py-3 px-4 d-flex align-items-center rounded hover-effect">
          <i className="fas fa-calendar-alt me-3 text-muted"></i>
          <Link
            to="/events"
            className="text-black text-decoration-none fw-semibold"
          >
            Event
          </Link>
        </li>
        <li className="py-3 px-4 d-flex align-items-center rounded hover-effect">
          <i className="fas fa-photo-video me-3 text-muted"></i>
          <Link
            to="/videos"
            className="text-black text-decoration-none fw-semibold"
          >
            Watch Videos
          </Link>
        </li>
        <li className="py-3 px-4 d-flex align-items-center rounded hover-effect">
          <i className="fas fa-file me-3 text-muted"></i>
          <Link
            to="/files"
            className="text-black text-decoration-none fw-semibold"
          >
            Files
          </Link>
        </li>
      </ul>

      {/*pages You like section*/}
      <div className="py-4">
        <h6 className="text-uppercase text-muted px-3 mb-3">Pages You Like</h6>
        <ul className="list-unstyled">
          <li className="py-2 px-2 d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="Fashion Design"
              className="rounded-circle me-3 img-fluid"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            <span className="fw-semibold">Fashion Design</span>
          </li>
          <li className="py-2 px-2 d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1554384645-13eab165c24b"
              alt="Graphic Design"
              className="rounded-circle me-3 img-fluid"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            <span className="fw-semibold">Graphic Design</span>
            <span className="badge bg-primary ms-auto">25</span>
          </li>
          <li className="py-2 px-2 d-flex align-items-center">
            <img
              src="https://media.istockphoto.com/id/2094337698/photo/diverse-team-collaborating-in-modern-co-working-space.jpg?s=2048x2048&w=is&k=20&c=TAtcplOX9L3NCbywjT0JXCcnzwasvm8vtaUN8s0u32A="
              alt="UI/UX Community"
              className="rounded-circle me-3 img-fluid"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            <span className="fw-semibold">UI/UX Community</span>
          </li>
          <li className="py-2 px-2 d-flex align-items-center">
            <img
              src="https://media.istockphoto.com/id/1677899489/photo/friends-selfie-and-hands-outdoor-for-social-media-fashion-and-fun-adventure-below-diversity.jpg?s=2048x2048&w=is&k=20&c=L6T7Ohf9c1ZgL2wk6h0XsUwzFEKZZmSHbGDnkJ11cI8="
              alt="Web Designer"
              className="rounded-circle me-3 img-fluid"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            <span className="fw-semibold">Web Designer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
