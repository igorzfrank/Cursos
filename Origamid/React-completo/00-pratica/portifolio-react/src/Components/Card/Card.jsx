import React from "react";
import LogoWordpress from "../../assets/lgo/lgo-wordpress.png";
import LogoHTML from "../../assets/lgo/lgo-html.png";
import LogoCSS from "../../assets/lgo/lgo-css.png";
import LogoJS from "../../assets/lgo/lgo-javascript.png";
import LogoReact from "../../assets/lgo/lgo-react.png";
import LogoElementor from "../../assets/lgo/lgo-elementor.png";
import "./Card.css";
import ExternalLink from "../../assets/ico/ico-link.svg?react";

const Card = ({
  img,
  wordpress,
  elementor,
  html,
  CSS,
  javascript,
  jquery,
  react,
  project,
  description,
  links,
}) => {
  return (
    <div className="cardProject">
      <img className="cardImg" src={img} alt="" />
      <div className="cardProjectContent">
        <div className="tecs">
          {wordpress && <img src={LogoWordpress} />}
          {elementor && <img src={LogoElementor} />}
          {html && <img src={LogoHTML} />}
          {CSS && <img src={LogoCSS} />}
          {javascript && <img src={LogoJS} />}
          {react && <img src={LogoReact} />}
        </div>
        <div className="cardContent">
          <div className="description">
            <p>
              <strong>{project}</strong>
              {description}
            </p>
          </div>
          <div className="links">
            {links.map((link, i) => (
              <a key={i} href={link.link} target={"_blank"} rel="noreferrer">
                {link.id}
                <ExternalLink />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
