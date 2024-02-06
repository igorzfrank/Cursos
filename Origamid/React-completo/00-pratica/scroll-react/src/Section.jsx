import React from "react";
import { Fade } from "react-awesome-reveal";

const Section = ({ section, direction }) => {
  return (
    <section id={section}>
      <Fade direction={direction}>
        <h1>{section}</h1>
      </Fade>
    </section>
  );
};

export default Section;
