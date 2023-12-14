$("a").click(function () {
  $('.modal').fadeOut();
  $('.modal').fadeIn();
  
  $('.modal').hide();
  $('.modal').show();

  $('.modal').slideUp();
  $('.modal').slideDown();
  $('.modal').slideToggle();

  // $(".modal").animate({
  //   height: 500,
  //   width: 100,
  // }, 1000);
});
