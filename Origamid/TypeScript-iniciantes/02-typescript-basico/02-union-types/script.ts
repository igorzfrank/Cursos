// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
// Optional chaining
// Executa click() se button for diferente de null/undefined
if (button) {
  button.click();
}
button?.click();


// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(dado: number | string) {
    if(typeof dado === 'number') {
        return dado
    } else if (typeof dado === 'string') {
        return Number(dado)
    } else {
        throw 'value deve ser um número ou uma string'
    }
}