function init () {
    $.getJSON("data.json", prodOut)
}

function prodOut(data) {
    var out = '';
    for (var key in data) {
        out += `<div class="card__cart">`;
        out +=`<p class="card__name">${data[key].productname}</p>`;
        out +=`<img class="card__image" src="./images/${data[key].photo}" alt="">`;
        out +=`<div class="card__price">${data[key].price}</div>`;
        out +=`</div>`;
    }
    $('.card').html(out);
}

$(document).ready(function() {
    init();
})