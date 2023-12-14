$("p").css("margin"); // pega o valor
$("p").css("margin", "200px"); // seta o valor

$(".modal").offset(); // informações em relação ao document

$(".btn").click(function (e) {
  e.preventDefault();
  $(window).scrollTop(0);
});
