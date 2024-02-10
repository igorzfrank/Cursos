import React from "react";
import LogoHTML from "../../assets/lgo/lgo-html.png";
import LogoCSS from "../../assets/lgo/lgo-css.png";
import LogoJS from "../../assets/lgo/lgo-javascript.png";
import LogoReact from "../../assets/lgo/lgo-react.png";
import "./Card.css";
import ExternalLink from "../../assets/ico/ico-link.svg?react";

const Card = ({
  img,
  html,
  css,
  javascript,
  jquery,
  react,
  description,
  links,
}) => {
  return (
    <div className="cardProject">
      <img className="cardImg" src={img} alt="" />
      <div className="cardProjectContent">
        <div className="tecs">
          {html && <img src={LogoHTML} />}
          {css && <img src={LogoCSS} />}
          {javascript && <img src={LogoJS} />}
          {react && <img src={LogoReact} />}
        </div>
        <div className="description">
          <p>{description}</p>
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
  );
};

export default Card;
