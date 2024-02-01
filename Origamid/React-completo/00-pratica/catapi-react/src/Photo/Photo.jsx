import React from "react";
import "./Photo.css";

const Photo = ({ url }) => {
  const background = {
    background: `url(${url}) no-repeat center center / cover`,
  };
  return <div className="catContainer" style={background}></div>;
};

export default Photo;
