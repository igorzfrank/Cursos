import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [link, setLink] = React.useState("");
  const [cont, setCont] = React.useState(false);
  const [pop, setPop] = React.useState(null);
  const [modal, setModal] = React.useState(null);
  const timeNotificationRef = React.useRef();

  async function fetchLink() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const responseJSON = await response.json();
    setLink((link) => [...link, responseJSON[0].url]);
  }

  function notification() {
    setPop(true);
    timeNotificationRef.current = setTimeout(() => {
      setPop(null);
    }, 2000);
  }

  React.useEffect(() => {
    if (cont < 9) {
      setTimeout(() => {
        try {
          fetchLink();
          setCont(cont + 1);
        } catch (error) {
          console.log("error");
        }
      }, 1000);
    }
  }, [link]);

  return (
    <GlobalContext.Provider
      value={{
        link,
        setLink,
        cont,
        setCont,
        fetchLink,
        pop,
        setPop,
        notification,
        modal,
        setModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
