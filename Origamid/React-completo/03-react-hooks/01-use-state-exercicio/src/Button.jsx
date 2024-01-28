import React from "react";

const Button = ({ texto, setLink, setCarregando }) => {
  async function fetchLink(link) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${link}`
    );
    const responseJSON = await response.json();
    setLink(responseJSON);
    setCarregando(false);
  }

  return (
    <button style={{ margin: ".5rem" }} onClick={() => fetchLink(texto)}>
      {texto}
    </button>
  );
};

export default Button;
