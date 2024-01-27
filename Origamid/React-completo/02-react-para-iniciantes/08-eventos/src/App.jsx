import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Teste = () => {
  const active = false;

  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <>
      <Header />
      <main>
        <Form />
        {/* <button onClick={(event) => event.target.classList.toggle("is-active")}>
          Clique
        </button> */}
      </main>
      <Teste />
      <Footer />
    </>
  );
};

export default App;
