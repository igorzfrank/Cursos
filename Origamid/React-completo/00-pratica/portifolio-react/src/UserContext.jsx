import React from "react";
import enTranslation from "./lang/en.json";
import brTranslation from "./lang/br.json";

export const UserContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [lang, setLang] = React.useState(false);
  const [data, setData] = React.useState(enTranslation);

  let htmlLang = document.getElementsByTagName("html")[0];
  console.log(htmlLang);

  React.useEffect(() => {
    if (lang) {
      setData(brTranslation);
      htmlLang.setAttribute("lang", "pt-BR");
    } else {
      setData(enTranslation);
      htmlLang.setAttribute("lang", "en");
    }
  }, [lang, htmlLang]);

  return (
    <UserContext.Provider value={{ lang, data, setLang }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
