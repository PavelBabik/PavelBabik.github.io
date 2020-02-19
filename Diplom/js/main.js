var app = new Vue ({
    el: '#app',
    data: {        
        show: false,
    },
    methods:{
        openMenu(){
            this.show = !this.show;                       
        },
    }
});

$('.reviews').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});