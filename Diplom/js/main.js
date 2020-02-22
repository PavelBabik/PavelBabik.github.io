var app = new Vue ({
    el: '#app',
    data: {        
        show: false,
        changeWindow:'',
        open: false,
    },
    methods:{
        openMenu(){
            this.show = !this.show;                       
        },
        redirectTo(page) {
            this.changeWindow = page;
        },
        showImg(){
            this.open = !this.open;
        }
    }
});

$(document).ready(function() {	
    $(".hover").css('pointer-events','none');
    $(".about__photo").click(function(){
	  	var img = $(this);
		var src = img.attr('src');
		$(".about__items").append("<div class='popup'>"+ 
						                "<div class='popup_bg'>"+ 
                                            "<img src='"+src+"' class='popup_img' />"+
                                        "</div>"+
						            "</div>"); 
		$(".popup").fadeIn(800);
		$(".popup_bg").click(function(){
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});	
});

$(document).ready(function() {	
    $(".hover").css('pointer-events','none');
    $(".gallery__photo").click(function(){
	  	var img = $(this);
		var src = img.attr('src');
		$(".gallery__items").append("<div class='popup'>"+ 
						                "<div class='popup_bg'>"+ 
                                            "<img src='"+src+"' class='popup_img1' />"+
                                        "</div>"+
						            "</div>"); 
		$(".popup").fadeIn(800);
		$(".popup_bg").click(function(){
			$(".popup").fadeOut(800);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});	
});

$('.reviews').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

