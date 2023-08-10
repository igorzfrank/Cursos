var possuiGraducao = false;
var possuiDoutorado = true;

if (possuiGraducao) {
  console.log("É verdadeira");
} else if (possuiDoutorado) {
  console.log("É falso");
} else {
  console.log("Não possui nada");
}

var nome = "André";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o ceu.");
    break;
  case "Verde":
    console.log("Olhe para a floresta.");
    break;
  default:
    console.log("Feche os olhos.");
    break;
}
