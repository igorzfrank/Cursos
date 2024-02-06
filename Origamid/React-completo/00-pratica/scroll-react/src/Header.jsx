import React from "react";
import { Link } from "react-scroll";
import UserContext from "./UserContext";

const Header = () => {
  const { lang, data, setLang } = React.useContext(UserContext);

  console.log(data.nav);
  return (
    <header>
      <ul>
        {data.nav.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              activeClass="is-active"
              spy={true}
              smooth={true}
              offset={-50}
            >
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
      <button
        style={{ position: "absolute", top: "24px" }}
        onClick={() => setLang(!lang)}
      >
        {lang ? "br" : "en"}
      </button>
    </header>
  );

  // return (
  //   <header>
  //     <ul>
  //       <li>
  //         <Link
  //           to="/"
  //           activeClass="is-active"
  //           spy={true}
  //           smooth={true}
  //           offset={-50}
  //         >
  //           Home
  //         </Link>
  //       </li>
  //       <li>
  //         <Link
  //           to="about"
  //           activeClass="is-active"
  //           spy={true}
  //           smooth={true}
  //           offset={-50}
  //         >
  //           Sobre
  //         </Link>
  //       </li>
  //       <li>
  //         <Link
  //           to="price"
  //           activeClass="is-active"
  //           spy={true}
  //           smooth={true}
  //           offset={-50}
  //         >
  //           Preços
  //         </Link>
  //       </li>
  //       <li>
  //         <Link
  //           to="contact"
  //           activeClass="is-active"
  //           spy={true}
  //           smooth={true}
  //           offset={-50}
  //         >
  //           Contato
  //         </Link>
  //       </li>
  //     </ul>
  //   </header>
  // );
};

export default Header;
