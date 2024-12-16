import React from "react";
import LogoSVG from "../../assets/images/logo.svg?react";

const Logo: React.FC = () => {
  return (
    <a href="#">
      <LogoSVG style={{ height: "40px", width: "auto" }} />
    </a>
  );
};

export default Logo;
