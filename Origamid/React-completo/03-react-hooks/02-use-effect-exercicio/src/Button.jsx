import React from "react";

const Button = ({ label, setItem }) => {
  function handleClick() {
    setItem(label);
    window.localStorage.setItem("produto", label);
  }

  return (
    <button style={{ margin: "0px 5px" }} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
