import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={form.nome}
        name="nome"
        onChange={handleChange}
      />
      <p>{form.nome}</p>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        name="email"
        onChange={handleChange}
      />
      <p>{form.email}</p>
      <button>Enviar</button>
    </form>
  );
};

export default App;
