var cart = {};

function init () {
    $.getJSON("data.json", prodOut)
}

function prodOut(data) {
    var out = '';
    for (var key in data) {
        out += `<div class="card__cart">`;
        out +=`<h3 class="card__name">${data[key].productname}</h3>`;
        out +=`<img class="card__image" src="./images/${data[key].photo}" alt="">`;
        out +=`<div class="card__price">${data[key].price}</div>`;
        out +=`<button class="card__add" data-id="${key}">Add to card</button>`;

        // out +=`<button class="card__del">Remove position</button>`;
        out +=`</div>`;
    }
    $('.card').html(out);

    $('.card__add').on("click", addToCard);
}

function addToCard() {
    var id = $(this).attr('data-id');
    if(cart[id]==undefined) {
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    showMiniCart();
    saveCart();
}

function showMiniCart () {
    var out = "";
    for (var key in cart) {
        out += key + " -------- " + cart[key] + "<br>";
    }
    $('.cart_content').html(out);
}

function saveCart () {
    localStorage.setItem('cart',JSON.stringify(cart));
}

function loadCart() {
     if(localStorage.getItem('cart')) {
         cart = JSON.parse(localStorage.getItem('cart'));
         showMiniCart();
     }
}

$(document).ready(function() {
    init();
    loadCart();
})