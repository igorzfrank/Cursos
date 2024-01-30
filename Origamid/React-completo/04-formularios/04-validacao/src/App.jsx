import React from "react";
import Input from "./Form/input";

function App() {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCEP(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preenche um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCEP(target.value);
  }

  function handleChange({ target }) {
    if (error) {
      validateCEP(target.value);
    }
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCEP(cep)) {
      console.log("Enviou");
    } else {
      console.log("Não envou");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"CEP"}
        id={"CEP"}
        type={"text"}
        placeholder={"00000-000"}
        value={cep}
        onChange={handleChange}
        // setValue={setCep}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
