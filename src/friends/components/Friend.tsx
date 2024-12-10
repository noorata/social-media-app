import React from "react";

interface FriendProps {
  name: string;
  time: string;
  isOnline: boolean;
  img: string;
}

const Friend: React.FC<FriendProps> = ({ name, time, isOnline, img }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      {/*friend details*/}
      <div className="d-flex align-items-center">
        <div>
          <img
            src={img}
            alt={name}
            className="rounded-circle border"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">{name}</h6>
        </div>
      </div>

      {/*status*/}
      {isOnline ? (
        <div
          className="bg-success rounded-circle"
          style={{
            width: "10px",
            height: "10px",
          }}
        ></div>
      ) : (
        <small className="text-muted">{time}</small>
      )}
    </div>
  );
};

export default Friend;
