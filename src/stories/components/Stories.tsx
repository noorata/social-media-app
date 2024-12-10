import React from "react";
import { stories } from "../stories-data";
import Story from "./Story";

const Stories: React.FC = () => {
  return (
    <div
      className="d-flex flex-nowrap gap-3 overflow-auto py-3"
      style={{ whiteSpace: "nowrap" }}
    >
      {stories.map((story, index) => (
        <Story
          key={index}
          name={story.name}
          img={story.img}
          profileImg={story.profileImg}
          isLive={story.isLive}
        />
      ))}
    </div>
  );
};

export default Stories;
