$('.news').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
        },
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 768,
        settings: {
            arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
            arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },  
      {
        breakpoint: 480,
        settings: {
            arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },     
    ]            
}); 

$(document).ready(function() {
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    $(window).scroll(function() {
        var scrollBarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top;

            if (sectionOffset <= scrollBarLocation) {
                $(this).addClass('active');

                $(this).siblings().removeClass('active');
            }
        })
    })
})

$(document).ready(function() {
    var scrollLink = $('.scrolling');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });    
})

$(function(){

    $('.navigation__toggler').on('click', function() {
       $('.navigation__items').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
            else {
                $(this).css('display') === "none";
            }
       });

    });

});

//var map;
//function initMap() {
//  map = new google.maps.Map(document.getElementById('map'), {
//    center: {lat: -34.397, lng: 150.644},
//    zoom: 8
//  });
//}
//  
//
//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpVCLnPa80yw9qKiqWwTLM3xqKWsdpR5k&callback=initMap"></script>