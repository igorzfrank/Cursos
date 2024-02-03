import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Produtos from "./Produtos";
import Contato from "./Contato";
import Produto from "./Produto";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="/:id" element={<Produto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
