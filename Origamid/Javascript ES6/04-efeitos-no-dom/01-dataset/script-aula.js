let div = document.querySelector("div");
div = document.querySelector("[data-cor]");
div = document.querySelector('[data-cor="azul"]');

div.dataset.height = 1000;

delete div.dataset.height;

div.dataset.totalHeight = 2000;

console.log(div.dataset);
