var idade = 65
if (idade < 16) {
    console.log(`Com ${idade} anos você não é obrigado a votar!`)
} else if (idade < 18 || idade > 65) {
    console.log(`Com ${idade} anos o seu voto é opcional!`)
} else {
    console.log(`Com ${idade} anos, você é obrigado a votar!`)
}