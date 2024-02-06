import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./App.css";
import Footer from "./Footer";
import { Element } from "react-scroll";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <UserStorage>
      <Header />
      <Element name="home">
        <Section section={"hero"} direction={"up"} />
      </Element>
      <Element name="about">
        <Section section={"about"} direction={"down"} />
      </Element>
      <Element name="prices">
        <Section section={"prices"} direction={"left"} />
      </Element>
      <Element name="contact">
        <Section section={"contact"} direction={"right"} />
      </Element>
      <Footer />
    </UserStorage>
  );
}

export default App;
