import React from "react";
import "./Photo.css";
import ButtonLike from "../ButtonLike/ButtonLike";

const Photo = ({ url }) => {
  const background = {
    background: `url(${url}) no-repeat center center / cover`,
  };
  return (
    <div className="catContainer" style={background}>
      <ButtonLike />
    </div>
  );
};

export default Photo;
