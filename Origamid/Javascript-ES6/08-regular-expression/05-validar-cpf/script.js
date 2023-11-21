import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");

const validarCpf = new ValidarCpf(cpf).iniciar();

// console.log(validarCpf.formatar('11122233304'))
// console.log(validarCpf.adcionarEvento())
