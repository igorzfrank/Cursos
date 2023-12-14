$("[data-group]").each(function () {
  var $allTarget = $(this).find("[data-target]"),
    $allClick = $(this).find("[data-click]"),
    activeClass = "active";

  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  $allClick.click(function (e) {
    e.preventDefault();

    var id = $(this).data("click"),
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $target.addClass(activeClass);
    $(this).addClass(activeClass);
  });
});

$(".menu-nav a[href^='#']").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href");
  var menuHeight = $(".menu").innerHeight();
  var targetOffset = $(id).offset().top;

  $(".menu-nav a[href^='#']").removeClass('active')
  $(this).addClass('active')

  $("html, body").animate(
    {
      scrollTop: targetOffset - menuHeight,
    },
    500
  );
});

$("section").each(function () {
  var height = $(this).height();
  var offsetTop = $(this).offset().top;
  var menuHeight = $('.menu').innerHeight()
  var id = $(this).attr("id");
  var $itemMenu = $(`a[href="#${id}"]`);

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
      $itemMenu.addClass("active");
    } else {
      $itemMenu.removeClass("active");
    }
  });
});
