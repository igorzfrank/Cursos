import React from "react";

const ButtonLike = ({ setNotification }) => {
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotification(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotification(false);
    }, 1000);
  }

  return <button onClick={handleClick}>Like</button>;
};

export default ButtonLike;
