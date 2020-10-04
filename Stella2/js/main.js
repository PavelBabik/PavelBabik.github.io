window.onload = function () {
  let preloader = document.getElementById("preload");
  preloader.style.display = "none";
};

mybutton = document.getElementById("topbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
}

$(document).ready(function () {
  $(".header__link, .toplink, .btnlink").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

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
  $(".header__menu").click(function (event) {
    $(".header__items").toggleClass("show");
  });
});

$(document).ready(function () {
  $(".header__item").click(function (event) {
    $(".header__items").removeClass("show");
  });
});

$(document).ready(function () {
  $(".hover").css("pointer-events", "none");
  $(".jobs__workimg").click(function () {
    var img = $(this);
    var src = img.attr("src");
    $(".picture").removeClass("none");
    $(".body").addClass("hid");
    $(".topbutton").addClass("nonebtn");
    $(".picture").append(
      "<div class='popup'>" +
        "<div class='popup_bg'>" +
        "<h2 class='popup_title'>X</h2>" +
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
        $(".body").removeClass("hid");
        $(".topbutton").removeClass("nonebtn");
        $(".popup").remove();
      }, 700);
    });
  });
});
