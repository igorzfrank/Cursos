$("a").each(function () {
  console.log(this);
});

$("h2").click(function () {
  $(this).closest("div").css("background", "blue"); // pega o item pai mais proximo
});

$("section").click(function () {
  $(this).find("p").css("background", "red"); // pega o item dentro do seletor
});

$('.btn').first() // pega o primeiro item
$('.btn').last() // pega o ultimo item


$('.btn').prev() // pega o item anterior
$('.btn').next() // pega o proximo item

$('.btn').eq(1) // seleciona o item como se fosse um array
$('.btn').not('active') // seleciona todos os itens que não tem a classe