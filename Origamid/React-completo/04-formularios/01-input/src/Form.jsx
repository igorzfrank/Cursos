import React from "react";

const Form = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        name='nome'
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        name='email'
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{nome}</p>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
