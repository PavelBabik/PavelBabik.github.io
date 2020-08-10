const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        let animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffSet - animItemPoint &&
        pageYOffset < animItemOffSet + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-nohide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  animOnScroll();
}

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
  $(".parallax").parallax();
});

$(document).ready(function () {
  $(".toggle").click(function (event) {
    $(".header__items").toggleClass("show");
  });
});
