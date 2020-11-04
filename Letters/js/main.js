$(document).ready(function () {
  $(".header__toggler").click(function (event) {
    $(".header__toggleropen").toggleClass("show");
    $(".header__togglerclose").toggleClass("show");
    $(".navigation__items").toggleClass("show");
    $(".menu").toggleClass("show");
  });
});
