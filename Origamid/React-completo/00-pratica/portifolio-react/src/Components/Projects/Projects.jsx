import React from "react";
import { Element } from "react-scroll";
import "./Projects.css";
import UserContext from "../../UserContext";
import Card from "../Card/Card";
import ProjectImg1 from "../../assets/img/project-1.png";

const Projects = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="projects">
      <section className="projects">
        <h1 className="projectsTitle">
          {data.projects.title}
          <strong> {data.projects.titleStrong}</strong>
        </h1>
        <div className="projectsContainer">
          <Card
            img={ProjectImg1}
            html={true}
            css={true}
            javascript={true}
            description={data.projects.card[0].description}
            links={data.projects.card[0].links}
          />
          <Card
            img={ProjectImg1}
            html={true}
            css={true}
            javascript={true}
            react={true}
            description={data.projects.card[0].description}
            links={data.projects.card[0].links}
          />
          <Card
            img={ProjectImg1}
            html={true}
            css={true}
            javascript={true}
            description={data.projects.card[0].description}
            links={data.projects.card[0].links}
          />
        </div>
      </section>
    </Element>
  );
};

export default Projects;
