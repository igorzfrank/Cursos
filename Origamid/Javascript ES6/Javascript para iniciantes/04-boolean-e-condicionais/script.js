// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 28;
var refIdade = 50;
 
if (minhaIdade > refIdade) {
  console.log("É maior");
} else if (minhaIdade < refIdade) {
  console.log("É menor");
} else {
  console.log("igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // True
var idade = 28; // True
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // True

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log(brasil>china)
} else if (brasil < china) {
    console.log(brasil < china)
} else {
    console.log(brasil = china)
}


// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // False
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Cão
} else {
  console.log("Falso");
}
