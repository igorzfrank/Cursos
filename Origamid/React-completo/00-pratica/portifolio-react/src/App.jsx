import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import { UseStorage } from "./UserContext";
import About from "./Components/About/About";
import Journey from "./Components/Journey/Journey";

function App() {
  return (
    <UseStorage>
      <Hero />
      <About />
      <Journey />
    </UseStorage>
  );
}

export default App;
