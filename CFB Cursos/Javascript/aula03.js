"use strict"

// Variavel com let - Variavel mais retritiva
// Variavel com var - Variavel global
// Variavel com const - Variavel não pode ser alterada

let conteudo = "Nome"
conteudo = "CFB Cursos"
conteudo = 20

function test(){

    let nome = "Igor"

    if(true) {
        
        console.log("Dentro do if de teste: " + nome)

    }

    console.log("Dentro de teste: " + nome)
}

test()

// console.log("Fora de teste: " + nome)
console.log(conteudo)
