import React from "react";
import { Element } from "react-scroll";
import "./Journey.css";
import UserContext from "../../UserContext";
import LogoHappy from "../../assets/lgo/lgo-happy.png";
import LogoDot from "../../assets/lgo/lgo-dot.png";
import Accordion from "../Accordion/Accordion";
import { Fade } from "react-awesome-reveal";

const Journey = () => {
  const { data } = React.useContext(UserContext);

  const tecHappy = [
    "../src/assets/lgo/lgo-construct.png",
    "../src/assets/lgo/lgo-unity.png",
    "../src/assets/lgo/lgo-lego.png",
    "../src/assets/lgo/lgo-scratch.png",
    "../src/assets/lgo/lgo-mine.png",
    "../src/assets/lgo/lgo-arduino.png",
    "../src/assets/lgo/lgo-roblox.png",
  ];

  const tecDot = [
    "../src/assets/lgo/lgo-vite.png",
    "../src/assets/lgo/lgo-gulp.png",
    "../src/assets/lgo/lgo-bitbucket.png",
    "../src/assets/lgo/lgo-git.png",
    "../src/assets/lgo/lgo-project-lego.png",
    "../src/assets/lgo/lgo-jquery.png",
    "../src/assets/lgo/lgo-javascript.png",
    "../src/assets/lgo/lgo-css.png",
    "../src/assets/lgo/lgo-html.png",
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
                {tecHappy.map((img, i) => (
                  <img key={i} src={img}></img>
                ))}
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
                {tecDot.map((img, i) => (
                  <img key={i} src={img}></img>
                ))}
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
