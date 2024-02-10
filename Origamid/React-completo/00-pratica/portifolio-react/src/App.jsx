import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { UseStorage } from "./UserContext";
import About from "./Components/About/About";
import Journey from "./Components/Journey/Journey";
import MyToolbox from "./Components/MyToolbox/MyToolbox";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ButtonTop from "./Components/ButtonTop/ButtonTop";

function App() {
  return (
    <UseStorage>
      <Hero />
      <About />
      <Journey />
      <MyToolbox />
      <Projects />
      <Contact />
      <Footer />
      <ButtonTop />
    </UseStorage>
  );
}

export default App;
