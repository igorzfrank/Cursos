import React from "react";
import { Element } from "react-scroll";
import "./About.css";
import UserContext from "../../UserContext";
import Slide from "../Slide/Slide";

const About = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="about">
      <section className="about">
        <h1 className="aboutTitle">
          {data.about.title.text}
          <strong>{data.about.title.strong}</strong>
          {data.about.title.question}
        </h1>
        <Slide />
      </section>
    </Element>
  );
};

export default About;
