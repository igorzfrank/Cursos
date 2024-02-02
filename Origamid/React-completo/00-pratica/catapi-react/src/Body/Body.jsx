import React from "react";
import "./Body.css";
import Photo from "../Photo/Photo";
import GlobalContext from "../GlobalContext";
import ButtonMore from "../ButtonMore/ButtonMore";

const Body = () => {
  const global = React.useContext(GlobalContext);

  if (global.link.length < 1) return null;
  return (
    <section>
      <div className="container">
        {global.link.map((link) => (
          <Photo url={link} key={link} />
        ))}
      </div>
      <ButtonMore />
    </section>
  );
};

export default Body;
