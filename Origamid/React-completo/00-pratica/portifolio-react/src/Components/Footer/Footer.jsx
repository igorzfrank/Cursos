import React from "react";
import "./Footer.css";
import LogoIgor from "../../assets/lgo/lgo-igor.svg?react";
import UserContext from "../../UserContext";

const Footer = () => {
  const { data } = React.useContext(UserContext);
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerContent">
          <LogoIgor />
          <p>
            {data.footer.developer.text}
            <strong>{data.footer.developer.author}</strong>
          </p>
          <p>
            {data.footer.rights.date}{" "}
            <strong>{data.footer.rights.business}</strong>{" "}
            {data.footer.rights.allRights}
          </p>
        </div>
        <div className="footerAnimation"></div>
      </div>
    </footer>
  );
};

export default Footer;
