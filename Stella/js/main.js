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
  let w = window.innerWidth;
  if (w > 1920) {
    //$("#firstIMG").attr("src", "/images/paralax/PricesStellaColor2560.jpg");
    $("#secondIMG").attr("src", "/images/paralax/Vintage2560.jpg");
    $("#thirdIMG").attr("src", "/images/paralax/Route2560.jpg");
    $("#fourthIMG").attr("src", "/images/paralax/Ghost2560.jpg");
    $("#fifthIMG").attr("src", "/images/paralax/GasStation2560.jpg");
  } else if (w <= 1920 && w > 1440) {
    //$("#firstIMG").attr("src", "/images/paralax/PricesStellaColor1920.jpg");
    $("#secondIMG").attr("src", "/images/paralax/Vintage1920.jpg");
    $("#thirdIMG").attr("src", "/images/paralax/Route1920.jpg");
    $("#fourthIMG").attr("src", "/images/paralax/Ghost1920.jpg");
    $("#fifthIMG").attr("src", "/images/paralax/GasStation1920.jpg");
  } else if (w <= 1440 && w > 1024) {
    //$("#firstIMG").attr("src", "/images/paralax/PricesStellaColor1440.jpg");
    $("#secondIMG").attr("src", "/images/paralax/Vintage1440.jpg");
    $("#thirdIMG").attr("src", "/images/paralax/Route1440.jpg");
    $("#fourthIMG").attr("src", "/images/paralax/Ghost1440.jpg");
    $("#fifthIMG").attr("src", "/images/paralax/GasStation1440.jpg");
  } else if (w <= 1024 && w > 768) {
     //$("#firstIMG").attr("src", "/images/paralax/PricesStellaColor1920.jpg");
    $("#secondIMG").attr("src", "/images/paralax/Vintage1024.jpg");
    $("#thirdIMG").attr("src", "/images/paralax/Route1024.jpg");
    $("#fourthIMG").attr("src", "/images/paralax/Ghost1024.jpg");
    $("#fifthIMG").attr("src", "/images/paralax/GasStation1024.jpg");
  } else if (w <= 768) {
    $("#secondIMG").attr("src", "/images/paralax/Vintage768.jpg");
    $("#thirdIMG").attr("src", "/images/paralax/Route768.jpg");
    $("#fourthIMG").attr("src", "/images/paralax/Ghost768.jpg");
    $("#fifthIMG").attr("src", "/images/paralax/GasStation768.jpg");
  }
});

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
