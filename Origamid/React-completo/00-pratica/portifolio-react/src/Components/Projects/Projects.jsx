import React from "react";
import { Element } from "react-scroll";
import "./Projects.css";
import UserContext from "../../UserContext";
import Card from "../Card/Card";
import ProjectImg1 from "../../assets/img/project-3.png";
import ProjectImg2 from "../../assets/img/project-1.png";
import ProjectImg3 from "../../assets/img/project-2.png";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="projects">
      <section className="projects">
        <Fade direction="down">
          <h1 className="projectsTitle">
            {data.projects.title}
            <strong> {data.projects.titleStrong}</strong>
          </h1>
        </Fade>
        <div className="projectsContainer">
          <Fade cascade damping={0.2} direction="up">
            <Card
              img={ProjectImg1}
              wordpress={true}
              html={true}
              CSS={true}
              elementor={true}
              project={data.projects.card[0].project}
              description={data.projects.card[0].description}
              links={data.projects.card[0].links}
            />
            <Card
              img={ProjectImg2}
              html={true}
              CSS={true}
              javascript={true}
              react={true}
              project={data.projects.card[1].project}
              description={data.projects.card[1].description}
              links={data.projects.card[1].links}
            />
            <Card
              img={ProjectImg3}
              html={true}
              CSS={true}
              javascript={true}
              react={true}
              project={data.projects.card[2].project}
              description={data.projects.card[2].description}
              links={data.projects.card[2].links}
            />
          </Fade>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
