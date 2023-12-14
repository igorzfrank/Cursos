$("[data-group]").each(function () {
  var $allClick = $(this).find("[data-click]");
  var $allTarget = $(this).find("[data-target]");
  var activeClass = "active";

  $allClick.first().addClass(activeClass);
  $allTarget.first().addClass(activeClass);

  $allClick.click(function (e) {
    e.preventDefault();

    var dataId = $(this).data("click");
    var $dataTarget = $(`[data-target="${dataId}"]`);

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $(this).addClass(activeClass);
    $dataTarget.addClass(activeClass);
  });
});
