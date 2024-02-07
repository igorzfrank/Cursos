import React from "react";
import { Element } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <Element name="hero">
      <section className="hero">
        <Navbar />
        <div className="heroContainer border"></div>
      </section>
    </Element>
  );
};

export default Hero;
