/* function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) */

/* function* perguntas(){
    const nome = yield 'Qual é o seu nome?';
    const esporte = yield 'Qual é o seu esporte favorito?';
    return 'Seu nome é ' + nome + ' e o seu esporte favorito é ' + esporte;
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Igor').value)
console.log(itp.next('Handball').value) */

function* contador(){
    let i=0
    while(true){
        yield i++;
        if(i>5){
            break;
        }
    }
}

const itc = contador()

for (let c of itc){
    console.log(c);
}
/* for (let i=0; i<10; i++){
    console.log(itc.next().value);
} */
