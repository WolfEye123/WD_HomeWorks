const NAMES = [
    "Jenny Hess",
    "Elliot Fu",
    "Stevie Feliciano",
    "Christian",
    "Matt",
    "Jenny Hess",
    "Elliot Fu",
    "Stevie Feliciano",
    "Christian",
    "Matt"
];

const ul = "<ul class='select'></ul>";
const li = "<li></li>";
let flag = true;

$(document).ready(() => {
    $('.newSelector').append(ul);
    $('.select').append($(li).addClass('fOption').html(`<label>Select Friend</label><span>▼</span>`));
    for (let name of NAMES) {
        $('.select').append($(li).addClass('hide').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label>`));
    }
    $('li:last').css('border','none');


    $('li.fOption').click(function () {
        if (flag === false) {
            flag = !flag;
            $('li.fOption').html(`<label>Select Friend</label><span>▼</span>`);
        }
        $('li').toggleClass('option');
    })

    $('li.hide').click(function () {
        $('li').toggleClass('option');
        let name = $(this).text();
        if (flag) {
            $('li.fOption').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label><span>▼</span>`);
            flag = !flag;
        }
    })
});