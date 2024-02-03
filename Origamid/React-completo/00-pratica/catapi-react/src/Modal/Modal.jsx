import React from "react";
import "./Modal.css";
import GlobalContext from "../GlobalContext";
import profileImg from "../assets/img/profile.png";

const Modal = () => {
  const global = React.useContext(GlobalContext);
  const imgProfile = React.useRef();
  const nameProfile = React.useRef();

  const [imgProfileUrl, setImgProfileUrl] = React.useState(
    `/src/assets/img/profile.png`
  );

  const [name, setName] = React.useState("Nome");

  const profile = ["a", "b", "c", "d", "e", "f"];

  React.useEffect(() => {
    const localStorageProfile = window.localStorage.getItem("profile");
    const localStorageName = window.localStorage.getItem("name");

    if (localStorageProfile != null) {
      setImgProfileUrl(`/src/assets/img/profile-${localStorageProfile}.png`);
    }
    if (localStorageName != null) {
      setName(localStorageName);
    }
  }, []);

  function handleChoice({ target }) {
    let miniProfiles = document.querySelectorAll(".miniProfile");
    imgProfile.current.src = `/src/assets/img/profile-${target.id}.png`;
    setImgProfileUrl(`/src/assets/img/profile-${target.id}.png`);
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
