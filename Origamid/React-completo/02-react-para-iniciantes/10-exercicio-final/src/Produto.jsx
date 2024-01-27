import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <div
    key={nome}
    style={{
      border: "1px solid black",
      padding: "10px",
      margin: "20px 0px",
    }}
  >
    <p>{nome}</p>
    <ul>
      {propriedades.map((dados) => (
        <li key={dados}>{dados}</li>
      ))}
    </ul>
  </div>
  )
}

export default Produto
