var finalQuestions = [];

for(i = 0 ; i < 5 ; i++){
    let randomNumber = Math.floor((Math.random() * 19) + 1)
    while (!finalQuestions.includes(randomNumber)) {
        randomNumber = Math.floor((Math.random() * 19) + 1)
    }
    finalQuestions.push(randomNumber)
}

console.log(finalQuestions)
