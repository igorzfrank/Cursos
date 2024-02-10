import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import UserContext from "../../UserContext";
import Linkedin from "../../assets/ico/ico-linkedin.svg?react";
import Github from "../../assets/ico/ico-github.svg?react";
import Facebook from "../../assets/ico/ico-facebook.svg?react";
import Instagram from "../../assets/ico/ico-instagram.svg?react";
import Whats from "../../assets/ico/ico-whats.svg?react";
import Email from "../../assets/ico/ico-email.svg?react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="contact">
      <section className="contact">
        <div className="contactContainer">
          <Fade direction="left" duration={1500}>
            <h1 className="contactTitle">
              {data.contact.title}
              <strong>{data.contact.titleStrong}</strong>
            </h1>
          </Fade>
          <div className="contactLinks">
            <Fade cascade damping={0.2}>
              <a
                href="https://www.linkedin.com/in/igorzfrank"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/igorzfrank"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.facebook.com/igi.frank"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/igorzfrank/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5548996792393"
                target="_blank"
                rel="noreferrer"
              >
                <Whats />
              </a>
              <a
                href="mailto:igor.frankz@gmail.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <Email />
              </a>
            </Fade>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
