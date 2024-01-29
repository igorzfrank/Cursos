import React from "react";
import ButtonLike from "./ButtonLike";

const Photo = ({ setNotification }) => {
  const [dados, setDados] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  React.useEffect(() => {
    async function fetchImg() {
      setLoad(false);
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const responseJSON = await response.json();
      setDados(responseJSON[0].url);
      setLoad(true);
    }

    fetchImg();
  }, []);

  if (load) {
    return (
      <div
        style={{
          width: "290px",
          height: "360px",
          background: "url(" + dados + ") no-repeat center center / cover",
        }}
      >
        <ButtonLike setNotification={setNotification} />
      </div>
    );
  } else {
    return null;
  }
};

export default Photo;
