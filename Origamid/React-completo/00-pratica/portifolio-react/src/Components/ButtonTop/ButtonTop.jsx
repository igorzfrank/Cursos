import React from "react";
import { Link } from "react-scroll";
import ToTop from "../../assets/ico/ico-top.svg?react";
import "./ButtonTop.css";

const ButtonTop = () => {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // Verifica se a posição do usuário na página é maior que a posição da home
    if (window.scrollY > window.innerHeight) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  if (showBackToTop)
    return (
      <Link to="hero" className="buttonTop" spy={true} smooth={true} offset={0}>
        <ToTop />
      </Link>
    );
  else {
    return null;
  }
};

export default ButtonTop;
