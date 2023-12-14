// $("a").click(function () {
//     $('a').text('Clicou')
// });

$("a").on("click", function (e) {
  e.preventDesfault();
  $(this).text("Clicou");
});
