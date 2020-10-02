$(document).ready(function () {
  $(".header__menu").click(function (event) {
    $(".header__items").toggleClass("show");
  });
});

$(document).ready(function () {
  $(".hover").css("pointer-events", "none");
  $(".jobs__workimg").click(function () {
    var img = $(this);
    var src = img.attr("src");
    $(".picture").removeClass("none");
    $(".picture").append(
      "<div class='popup'>" +
        "<div class='popup_bg'>" +
        "<img src='" +
        src +
        "' class='popup_img' />" +
        "</div>" +
        "</div>"
    );
    $(".popup").fadeIn(700);
    $(".popup_bg").click(function () {
      $(".popup").fadeOut(700);
      setTimeout(function () {
        $(".picture").addClass("none");
        $(".popup").remove();
      }, 700);
    });
  });
});
