import React from "react";
import { Element } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import UserContext from "../../UserContext";
import ButtonContent from "../ButtonContent/ButtonContent";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="hero">
      <section className="hero">
        <Navbar />
        <Fade>
          <div className="heroContainer border">
            <div className="heroDescription">
              <h4>
                <strong>{data.hero.subStrong}</strong>
                {data.hero.sub}
              </h4>
              <h1>
                {data.hero.title}
                <strong>{data.hero.titleStrong}</strong>
              </h1>
            </div>
            <div className="heroImg"></div>
          </div>
        </Fade>
        <ButtonContent />
      </section>
    </Element>
  );
};

export default Hero;
