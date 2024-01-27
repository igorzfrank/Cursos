import React from "react";
import Form from "./Form/Form";

const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};
const App = () => {
  return (
    <div>
      <Form />
      {/* <Titulo cor="red" texto="Meu título 1" />
      <Titulo cor="blue" texto="Meu título 2" />
      <Titulo cor="red" texto="Meu título 3" /> */}
    </div>
  );
};

export default App;
