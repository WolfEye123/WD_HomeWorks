const NAMES = [
    "Jenny Hess",
    "Elliot Fu",
    "Stevie Feliciano",
    "Christian",
    "Matt"
];

// const div = document.createElement('div.wrap');
const ul = "<ul class='select'></ul>";
const li = "<li></li>";

$(document).ready(() => {
    $('.newSelector').append(ul);
    $('.select').append($(li).addClass('fOption').html(`<label id="sel">Select Friend<span>▼</span></label>`));
    for (let name of NAMES) {
        $('.select').append($(li).addClass('hide').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label>`));
    }


    $('#sel').click(function () {
        $('li').toggleClass('option');

    })
});