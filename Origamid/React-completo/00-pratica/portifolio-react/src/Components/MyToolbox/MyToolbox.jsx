import React from "react";
import { Element } from "react-scroll";
import "./MyToolbox.css";
import UserContext from "../../UserContext";
import { Fade } from "react-awesome-reveal";

const MyToolbox = () => {
  const { data } = React.useContext(UserContext);

  const tec = [
    "../src/assets/lgo/lgo-xd-md.png",
    "../src/assets/lgo/lgo-figma-md.png",
    "../src/assets/lgo/lgo-vite-md.png",
    "../src/assets/lgo/lgo-gulp-md.png",
    "../src/assets/lgo/lgo-bitbucket-md.png",
    "../src/assets/lgo/lgo-git-md.png",
    "../src/assets/lgo/lgo-jquery-md.png",
    "../src/assets/lgo/lgo-react-md.png",
    "../src/assets/lgo/lgo-javascript-md.png",
    "../src/assets/lgo/lgo-css-md.png",
    "../src/assets/lgo/lgo-html-md.png",
  ];
  return (
    <Element name="toolbox">
      <section className="myToolBox">
        <div className="myContianer">
          {/* <Fade direction="left" duration={1500}> */}
          <div className="toolBox">
            <Fade cascade damping={0.2}>
              {tec.map((img, i) => (
                <img key={i} src={img} />
              ))}
            </Fade>
          </div>
          {/* </Fade> */}
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
