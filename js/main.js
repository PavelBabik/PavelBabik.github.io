$(document).ready(function () {
  $(".header__toogle").click(function (event) {
    $(".header__menu").toggleClass("active");
  });

  $(".portfolio__cat-sites").click(function (event) {
    $(".portfolio__cat-sites").toggleClass("active");
    $(".portfolio__cat-logos").removeClass("active");
    $(".portfolio__cat-courses").removeClass("active");

    $(".portfolio__sites").removeClass("notactive");
    $(".portfolio__logos").addClass("notactive");
    $(".portfolio__courses").addClass("notactive");
  });

  $(".portfolio__cat-logos").click(function (event) {
    $(".portfolio__cat-sites").removeClass("active");
    $(".portfolio__cat-logos").toggleClass("active");
    $(".portfolio__cat-courses").removeClass("active");

    $(".portfolio__sites").addClass("notactive");
    $(".portfolio__logos").removeClass("notactive");
    $(".portfolio__courses").addClass("notactive");
  });

  $(".portfolio__cat-courses").click(function (event) {
    $(".portfolio__cat-sites").removeClass("active");
    $(".portfolio__cat-logos").removeClass("active");
    $(".portfolio__cat-courses").toggleClass("active");

    $(".portfolio__sites").addClass("notactive");
    $(".portfolio__logos").addClass("notactive");
    $(".portfolio__courses").removeClass("notactive");
  });
});

$(document).ready(function () {
  var scrollLink = $(".scroll");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });

  $(window).scroll(function () {
    var scrollBarLocation = $(this).scrollTop() + 10;

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top;

      if (sectionOffset <= scrollBarLocation) {
        $(this).addClass("selected");

        $(this).siblings().removeClass("selected");
      }
    });
  });
});

$(document).ready(function () {
  $(".header__link, .footer__backim").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  const deg = 6;
  let hr = document.querySelector("#hr");
  let mn = document.querySelector("#mn");
  let sc = document.querySelector("#sc");

  let hr1 = document.querySelector("#hr1");
  let mn1 = document.querySelector("#mn1");
  let sc1 = document.querySelector("#sc1");

  let hr2 = document.querySelector("#hr2");
  let mn2 = document.querySelector("#mn2");
  let sc2 = document.querySelector("#sc2");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    hr1.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn1.style.transform = `rotateZ(${mm}deg)`;
    sc1.style.transform = `rotateZ(${ss}deg)`;

    hr2.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn2.style.transform = `rotateZ(${mm}deg)`;
    sc2.style.transform = `rotateZ(${ss}deg)`;
  });
});
