import React from "react";
import Button from "./Button";
import Produto from "./Produto";
import Carregando from "./Carregando";

const App = () => {
  const [dados, setLink] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null)

  console.log(dados);

  return (
    <section>
      <div>
        <Button texto="tablet" setLink={setLink} setCarregando={setCarregando}/>
        <Button texto="smartphone" setLink={setLink} setCarregando={setCarregando}/>
        <Button texto="notebook" setLink={setLink} setCarregando={setCarregando}/>
      </div>
      {carregando && <Carregando />}
      {!carregando && dados && <Produto dados={dados} />}
    </section>
  );
};

export default App;
