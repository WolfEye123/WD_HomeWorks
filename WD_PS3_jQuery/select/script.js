const NAMES = [
    "Jenny Hess",
    "Elliot Fu",
    "Stevie Feliciano",
    "Christian",
    "Matt"
];

const ul = "<ul class='select'></ul>";
const li = "<li></li>";
let flag = true;
const select = $('.select');
const newSelector = $('.newSelector');
const liHide = $('li.hide');
const liFOption = $('li.fOption');
const liLast = $('li:last');

$(document).ready(() => {
    newSelector.append(ul);
    select.append($(li).addClass('fOption').html(`<label>Select Friend</label><span>▼</span>`));
    for (let name of NAMES) {
        select.append($(li).addClass('hide').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label>`));
    }

    liLast.css('border','none');

    liHide.mouseenter(function () {
        $(this).css('background-color', 'aliceblue');
    });
    liHide.mouseleave(function () {
       $(this).css('background-color', 'white');
    });


    liFOption.click(function () {
        if (flag === false) {
            flag = !flag;
            liFOption.html(`<label>Select Friend</label><span>▼</span>`);
        }
        $('li').toggleClass('option');
    })

    liHide.click(function () {
        $('li').toggleClass('option');
        let name = $(this).text();
        if (flag) {
            liFOption.html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label><span>▼</span>`);
            flag = !flag;
        }
    })
});