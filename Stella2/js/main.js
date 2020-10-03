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
