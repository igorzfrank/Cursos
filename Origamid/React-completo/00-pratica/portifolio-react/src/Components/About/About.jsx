import React from "react";
import { Element } from "react-scroll";
import "./About.css";
import UserContext from "../../UserContext";
import Slide from "../Slide/Slide";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="about">
      <section className="about">
        <Fade direction="down">
          <h1 className="aboutTitle">
            {data.about.title.text}
            <strong>{data.about.title.strong}</strong>
            {data.about.title.question}
          </h1>
        </Fade>
        <Fade direction="up" duration={1500}>
          <Slide />
        </Fade>
      </section>
    </Element>
  );
};

export default About;
