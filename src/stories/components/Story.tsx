import React from "react";

interface StoryProps {
  name: string;
  img: string;
  profileImg: string;
  isLive: boolean;
}

const Story: React.FC<StoryProps> = ({ name, img, profileImg, isLive }) => {
  return (
    <div className="position-relative flex-shrink-0">
      <img
        src={img}
        alt={name}
        className="d-none d-sm-block img-fluid rounded"
        style={{
          width: "130px",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <img
        src={img}
        alt={name}
        className="d-block d-sm-none img-fluid rounded"
        style={{
          width: "100px",
          height: "150px",
          objectFit: "cover",
        }}
      />

      {isLive && (
        <span
          className="position-absolute bg-danger text-white small fw-bold rounded px-2"
          style={{ top: 0, left: 0 }}
        >
          LIVE
        </span>
      )}

      {/*profile and name*/}
      <div
        className="d-flex align-items-center position-absolute bg-dark bg-opacity-50 rounded-bottom p-2"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <img
          src={profileImg}
          alt={`${name}'s profile`}
          className="rounded-circle border border-white me-2"
          style={{ width: "30px", height: "30px" }}
        />
        <span className="text-white small">{name}</span>
      </div>
    </div>
  );
};

export default Story;
