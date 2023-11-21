const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.color = "blue";
}

const carro = {
  marca: "Honda",
  ano: 2018,
};

for (const key in carro) {
  console.log(key, carro);
}

const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}
