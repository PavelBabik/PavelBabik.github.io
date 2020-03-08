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