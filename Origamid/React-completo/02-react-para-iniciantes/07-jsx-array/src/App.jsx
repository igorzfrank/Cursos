import React from "react";

const App = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: "1996" },
    { nome: "A Clash of Kings", ano: "1998" },
    { nome: "A Storm of Swords", ano: "2000" },
  ];

  return (
    // Map com filtro
    <ul>
      {livros
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li>
            {nome}, {ano}
          </li>
        ))}
    </ul>

    // Map sem filtro
    // <ul>
    //   {livros.map(({ nome, ano }) => (
    //     <li key={nome}>
    //       {nome}, {ano}
    //     </li>
    //   ))}
    // </ul>
  );
};

export default App;
