import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";

const App = () => {
  const [link, setLink] = React.useState([]);

  async function fetchLink() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const responseJSON = await response.json();
    setLink((link) => [...link, responseJSON[0].url]);
  }

  React.useEffect(() => {
    for (let i = 0; i < 9; i++) {
      setTimeout(() => {
        try {
          fetchLink();
        } catch (error) {
          console.log("error");
        }
      }, 1000);
    }
  }, []);

  console.log(link);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
