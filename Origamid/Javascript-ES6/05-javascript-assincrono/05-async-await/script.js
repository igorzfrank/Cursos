// async function puxarDados() {
//   const reponseDados = await fetch("./dados.json");
//   const jsonDados = await reponseDados.json();
//   console.log(jsonDados.aula);
// }

// async function puxarDados() {
//   try {
//     const reponseDados = await fetch("./dados.json");
//     const jsonDados = await reponseDados.json();
//     console.log(jsonDados.aula);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function puxarDados() {
  const reponseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");
  
  const jsonDados = await (await reponseDados).json();
  const jsonClients = await (await responseClientes).json();

  console.log(jsonDados)
  console.log(jsonClients)
}
puxarDados();
