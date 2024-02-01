import React from "react";
import "./Body.css";
import Photo from "../Photo/Photo";

const Body = ({ links }) => {
  return (
    <section>
      <div className="container">
        {links.map((link) => (
          <Photo url={link} />
        ))}
      </div>
      <button className="btnMore">Ver Mais</button>
    </section>
  );
};

export default Body;
