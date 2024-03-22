import React from "react";
import { Element } from "react-scroll";
import "./Journey.css";
import UserContext from "../../UserContext";
import LogoHappy from "../../assets/lgo/lgo-happy.png";
import LogoDot from "../../assets/lgo/lgo-dot.png";
import Accordion from "../Accordion/Accordion";
import { Fade } from "react-awesome-reveal";
import LogoConstruct from "../../assets/lgo/lgo-construct.png";
import LogoUnity from "../../assets/lgo/lgo-unity.png";
import LogoLego from "../../assets/lgo/lgo-lego.png";
import LogoScratch from "../../assets/lgo/lgo-scratch.png";
import LogoMine from "../../assets/lgo/lgo-mine.png";
import LogoArduino from "../../assets/lgo/lgo-arduino.png";
import LogoRoblox from "../../assets/lgo/lgo-roblox.png";
import LogoVite from "../../assets/lgo/lgo-vite.png";
import LogoGulp from "../../assets/lgo/lgo-gulp.png";
import LogoBitbucket from "../../assets/lgo/lgo-bitbucket.png";
import LogoGit from "../../assets/lgo/lgo-git.png";
import LogoProject from "../../assets/lgo/lgo-project-lego.png";
import LogoJquery from "../../assets/lgo/lgo-jquery.png";
import LogoJS from "../../assets/lgo/lgo-javascript.png";
import LogoCSS from "../../assets/lgo/lgo-css.png";
import LogoHTML from "../../assets/lgo/lgo-html.png";

const Journey = () => {
  const { data } = React.useContext(UserContext);

  const tecHappy = [
    LogoConstruct,
    LogoUnity,
    LogoLego,
    LogoScratch,
    LogoMine,
    LogoArduino,
    LogoRoblox,
  ];

  const tecDot = [
    LogoVite,
    LogoGulp,
    LogoBitbucket,
    LogoGit,
    LogoProject,
    LogoJquery,
    LogoJS,
    LogoCSS,
    LogoHTML,
  ];

  return (
    <Element name="journey">
      <section className="journey">
        <Fade direction="left" duration={1000}>
          <h1>
            {data.journey.title.text}
            <strong>{data.journey.title.strong}</strong>
          </h1>
        </Fade>
        <Fade direction="right" duration={2000}>
          <div className="card border">
            <div className="badge">
              <img src={LogoHappy} />
              <p>{data.journey.card[0].timeline}</p>
            </div>
            <div className="info">
              <div className="infoTecs">
                <Fade cascade damping={0.2} delay={1000} direction="up">
                  {tecHappy.map((img, i) => (
                    <img key={i} src={img}></img>
                  ))}
                </Fade>
              </div>
              <Accordion
                activityList={data.journey.card[0].activities.list}
                achievementsList={data.journey.card[0].achievements.list}
              />
            </div>
          </div>
        </Fade>
        <Fade direction="left" duration={2000}>
          <div className="card right border">
            <div className="info">
              <div className="infoTecs">
                <Fade cascade damping={0.2} delay={1000} direction="up">
                  {tecDot.map((img, i) => (
                    <img key={i} src={img}></img>
                  ))}
                </Fade>
              </div>
              <Accordion
                activityList={data.journey.card[1].activities.list}
                achievementsList={data.journey.card[1].achievements.list}
              />
            </div>
            <div className="badge">
              <img src={LogoDot} />
              <p>{data.journey.card[1].timeline}</p>
            </div>
          </div>
        </Fade>
      </section>
    </Element>
  );
};

export default Journey;
