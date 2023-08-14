// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function (item) {
//   console.log(item);
// });

const imgs = document.querySelectorAll("img");

let i = 0;
imgs.forEach((item) => {
    console.log(item);
});

imgs.forEach(() => console.log(i++))
