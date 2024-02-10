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

const Contact = () => {
  const { data } = React.useContext(UserContext);
  return (
    <Element name="contact">
      <section className="contact">
        <div className="contactContainer">
          <h1 className="contactTitle">
            {data.contact.title}
            <strong>{data.contact.titleStrong}</strong>
          </h1>
          <div className="contactLinks">
            <a href="">
              <Linkedin />
            </a>
            <a href="">
              <Github />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Whats />
            </a>
            <a href="">
              <Email />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
