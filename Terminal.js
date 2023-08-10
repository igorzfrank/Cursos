finalQuestions = []

while (finalQuestions.length < 5) {
    let randomNumber = Math.floor(Math.random() * (20 - 1) + 1)
    if (!finalQuestions.includes(randomNumber)) {
        finalQuestions.push(randomNumber)
    }
}   

while (finalQuestions.length < 10) {
    let randomNumber = Math.floor(Math.random() * (47 - 20) + 20)
    if (!finalQuestions.includes(randomNumber)) {
        finalQuestions.push(randomNumber)
    }
}  

console.log(finalQuestions)