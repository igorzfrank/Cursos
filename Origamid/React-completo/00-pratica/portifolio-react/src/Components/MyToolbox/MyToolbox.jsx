import React from "react";
import { Element } from "react-scroll";
import "./MyToolbox.css";
import UserContext from "../../UserContext";
import { Fade } from "react-awesome-reveal";
import LogoXD from "../../assets/lgo/lgo-xd-md.png";
import LogoFigma from "../../assets/lgo/lgo-figma-md.png";
import LogoVite from "../../assets/lgo/lgo-vite-md.png";
import LogoGulp from "../../assets/lgo/lgo-gulp-md.png";
import LogoBitbucket from "../../assets/lgo/lgo-bitbucket-md.png";
import LogoGit from "../../assets/lgo/lgo-git-md.png";
import LogoJquery from "../../assets/lgo/lgo-jquery-md.png";
import LogoReact from "../../assets/lgo/lgo-react-md.png";
import LogoJS from "../../assets/lgo/lgo-javascript-md.png";
import LogoCSS from "../../assets/lgo/lgo-css-md.png";
import LogoHTML from "../../assets/lgo/lgo-html-md.png";
import LogoType from "../../assets/lgo/lgo-type-md.png";
import LogoPython from "../../assets/lgo/lgo-python-md.png";
import LogoCSharp from "../../assets/lgo/lgo-csharp-md.png";
import LogoWordPress from "../../assets/lgo/lgo-wordpress-md.png";
import LogoElementor from "../../assets/lgo/lgo-elementor-md.png";

const MyToolbox = () => {
  const { data } = React.useContext(UserContext);

  const three = [LogoCSS, LogoHTML];

  const two = [
    LogoXD,
    LogoFigma,
    LogoBitbucket,
    LogoGit,
    LogoJquery,
    LogoReact,
    LogoJS,
    LogoWordPress,
  ];

  const one = [LogoType, LogoPython, LogoCSharp, LogoVite, LogoGulp, LogoElementor];

  return (
    <Element name="toolbox">
      <section className="myToolBox">
        <div className="myContianer">
          <div className="toolBox">
            <div className="box three">
              <Fade cascade damping={0.2} direction="down">
                {three.map((img, i) => (
                  <img key={i} src={img} />
                ))}
              </Fade>
            </div>
            <div className="box two">
              <Fade cascade damping={0.2}>
                {two.map((img, i) => (
                  <img key={i} src={img} />
                ))}
              </Fade>
            </div>
            <div className="box one">
              <Fade cascade damping={0.2} direction="up">
                {one.map((img, i) => (
                  <img key={i} src={img} />
                ))}
              </Fade>
            </div>
          </div>
          <Fade direction="right" duration={2000}>
            <h1 className="toolTitle">
              <strong>
                {data.toolbox.titleStrong}
                <br></br>
              </strong>
              {data.toolbox.title}
            </h1>
          </Fade>
        </div>
      </section>
    </Element>
  );
};

export default MyToolbox;
