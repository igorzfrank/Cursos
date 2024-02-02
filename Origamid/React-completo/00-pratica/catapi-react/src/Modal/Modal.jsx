import React from "react";
import "./Modal.css";
import GlobalContext from "../GlobalContext";
import profileImg from "../assets/img/profile.png";

const Modal = () => {
  const global = React.useContext(GlobalContext);

  const profile = ["a", "b", "c", "d", "e", "f"];

  function handleChoice({ target }) {
    let miniProfiles = document.querySelectorAll(".miniProfile");

    miniProfiles.forEach((item) => {
      item.classList.remove("is-active");
    });

    target.classList.add("is-active");
  }

  if (global.modal == null) return null;
  return (
    <section className="modal">
      <div className="modalContainer">
        <button
          className="btnCloseModal"
          onClick={() => global.setModal(null)}
        ></button>
        <div className="modalProfile">
          <img src={profileImg} alt="" />
          <div className="selectProfile">
            {profile.map((item) => (
              <div
                key={item}
                id={item}
                className="miniProfile"
                onClick={handleChoice}
              ></div>
            ))}
          </div>
        </div>
        <div className="modalName">
          <h4 className="profileName">Nome</h4>
          <input type="text" className="inputNameModal"/>
          <button className="btnModalEnviar">Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
