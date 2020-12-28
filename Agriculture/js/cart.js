var cart = {};

function loadCart() {
     if(localStorage.getItem('cart')) {
         cart = JSON.parse(localStorage.getItem('cart'));
         showCart(); 
        
    } else {
        $('.cart').html('Корзина пуста!');
    }
}

function showCart() {
    if(!isEmpty(cart)) {
        $('.cart').html('Корзина пуста!');
    } else {
    $.getJSON('data.json', function (data) {
        var goods = data;
        var out = "";
        for (var id in cart) {
            out += `<div class='cart__cart'>`;
            out += `<button class='cart__del' data-id='${id}'>X</button>`;
            out += `<img class='cart__img' src='./images/${goods[id].photo}'>`;
            out += `<div>${goods[id].productname}</div>`;
            out += `<div class='cart__quantity'>
                    <button class='cart__minus btn' data-id='${id}'>-</button>
                    <div class='cart__qnt'>${cart[id]}</div>
                    <button class='cart__plus btn' data-id='${id}'>+</button>
                    </div>`;
            out += cart[id]*goods[id].price;
            out += `</div>`;
        }
        $('.cart').html(out);
        $('.cart__del').on('click', delGoods);
        $('.cart__plus').on('click', plusGood);
        $('.cart__minus').on('click', minusGood);
    })
}
}

function delGoods () {
    var id = $(this).attr('data-id');
    delete(cart[id]);
    saveCart();
    showCart();
}

function plusGood () {
    var id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}

function minusGood () {
    var id = $(this).attr('data-id');
    if (cart[id] === 1) {
        delete(cart[id]);
    } else {
        cart[id]--;
    }
    saveCart();
    showCart();
}

function isEmpty(object) {
    for(var key in object)  
        if(object.hasOwnProperty(key)) return true;
        return false;
    
}

function saveCart () {
    localStorage.setItem('cart',JSON.stringify(cart));
}

function sendEmail () {
    var ename = $('#ename').val();
    var email = $('#email').val();
    var ephone = $('#ephone').val();
    if( ename != undefined && email != undefined && ephone != undefined ){
        if(isEmpty(cart)){

        } else {
            alert('Cart is empty!!!')
        }
    } else {
        alert('Write all fields!!!');
    }
}

$(document).ready(function () {
    loadCart();
    $('.email__button').on('click', sendEmail);
})