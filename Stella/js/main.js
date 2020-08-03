$(document).ready(function () {
  $(".hover").css("pointer-events", "none");
  $(".main__workimg").click(function () {
    var img = $(this);
    var src = img.attr("src");
    $(".main__works").append(
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
        $(".popup").remove();
      }, 700);
    });
  });
});

$(document).ready(function () {
  $('.parallax').parallax();
});