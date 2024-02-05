import React from "react";
import "./Modal.css";
import GlobalContext from "../GlobalContext";
import profileImg from "../assets/img/profile.png";
import profileA from "../assets/img/profile-a.png";
import profileB from "../assets/img/profile-b.png";
import profileC from "../assets/img/profile-c.png";
import profileD from "../assets/img/profile-d.png";
import profileE from "../assets/img/profile-e.png";
import profileF from "../assets/img/profile-f.png";

const Modal = () => {
  const global = React.useContext(GlobalContext);
  const profile = ["a", "b", "c", "d", "e", "f"];

  const imgProfile = React.useRef();
  const nameProfile = React.useRef();

  const [imgProfileUrl, setImgProfileUrl] = React.useState(profileImg);
  const [name, setName] = React.useState("Digite seu nome");

  React.useEffect(() => {
    const localStorageProfile = window.localStorage.getItem("profile");
    const localStorageName = window.localStorage.getItem("name");

    if (localStorageProfile != null) {
      switch (localStorageProfile) {
        case "a":
          setImgProfileUrl(profileA)
          break;
        case "b":
          setImgProfileUrl(profileB)
          break;
        case "c":
          setImgProfileUrl(profileC)
          break;
        case "d":
          setImgProfileUrl(profileD)
          break;
        case "e":
          setImgProfileUrl(profileE)
          break;
        case "f":
          setImgProfileUrl(profileF)
          break;
      }
    }

    if (localStorageName != null) {
      setName(localStorageName);
    }
  }, []);

  function handleChoice({ target }) {
    let miniProfiles = document.querySelectorAll(".miniProfile");

    switch (target.id) {
      case "a":
        imgProfile.current.src = profileA;
        break;
      case "b":
        imgProfile.current.src = profileB;
        break;
      case "c":
        imgProfile.current.src = profileC;
        break;
      case "d":
        imgProfile.current.src = profileD;
        break;
      case "e":
        imgProfile.current.src = profileE;
        break;
      case "f":
        imgProfile.current.src = profileF;
        break;
    }

    window.localStorage.setItem("profile", target.id);

    miniProfiles.forEach((item) => {
      item.classList.remove("is-active");
    });

    target.classList.add("is-active");
  }

  function handleName(event) {
    event.preventDefault();
    const inputName = document.querySelector(".inputNameModal");
    window.localStorage.setItem("name", inputName.value);
    console.log(nameProfile.current.innerText);
    nameProfile.current.innerText = inputName.value;
    setName(inputName.value);
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
          <img
            src={imgProfileUrl}
            ref={imgProfile}
            className="profileImg"
            alt=""
          />
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
          <h4 className="profileName" ref={nameProfile}>
            {name}
          </h4>
          <input
            type="text"
            className="inputNameModal"
            minLength={3}
            maxLength={16}
          />
          <button className="btnModalEnviar" onClick={handleName}>
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
