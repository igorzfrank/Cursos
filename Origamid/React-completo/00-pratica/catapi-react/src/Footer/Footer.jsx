import React from "react";
import "./Footer.css";
import logo from "../assets/img/cat-lgo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerRights">
          <img src={logo} alt="" />
          <p>
            © 2024 <strong>The Web Solution</strong> - Todos os direitos
            reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <strong>
              <a href="https://igorzfrank.vercel.app/" target="_blank">
                Igor Frank Moreno
              </a>
            </strong>
          </p>
        </div>
        <div className="footerLinks">
          <div className="list">
            <h4>Estudo de API</h4>
            <ul>
              <li>
                <a
                  href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t"
                  target="_blank"
                >
                  TheCapAPI
                </a>
              </li>
            </ul>
          </div>
          <div className="list">
            <h4>Tecnologias</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
