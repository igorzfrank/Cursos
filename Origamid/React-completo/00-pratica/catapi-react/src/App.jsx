import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { GlobalStorage } from "./GlobalContext";
import Modal from "./Modal/Modal";

const App = () => {


  return (
    <GlobalStorage>
      <Modal />
      <Header />
      <Body />
      <Footer />
    </GlobalStorage>
  );
};

export default App;
