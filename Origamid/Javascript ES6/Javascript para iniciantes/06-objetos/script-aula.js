var pessoa = {
  nome: "Igor",
  idade: 28,
};

console.log(pessoa.nome);

var quadro = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadro.perimetro(5));

var quadroSimplificado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadroSimplificado.perimetro(5));

var height = 100;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;
