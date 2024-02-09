import React from "react";
import enTranslation from "./lang/en.json";
import brTranslation from "./lang/br.json";

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [lang, setLang] = React.useState(false);
  const [data, setData] = React.useState(enTranslation);

  React.useEffect(() => {
    if (lang) {
      setData(brTranslation);
    } else {
      setData(enTranslation);
    }
  }, [lang]);

  return (
    <UserContext.Provider value={{ lang, data, setLang }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
