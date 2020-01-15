$('.news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,            
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