$(document).ready(function () {
  // esperar o site todo carregar para executar a função
  $("a").hide();
});

var aEstilo = $("a").data("id"); // serve para pegar o data do seletor

setTimeout(function () {
  $("a").css("background", "blue");
}, 1000);
