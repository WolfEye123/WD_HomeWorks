const NAMES = [
    "Jenny Hess",
    "Elliot Fu",
    "Stevie Feliciano",
    "Christian",
    "Matt"
];

$(document).ready(() => {
    let flag = true;

    // html objects
    const ul = "<ul class='select'></ul>";
    const li = "<li></li>";

    //section selector
    const newSelector = $('.newSelector');

    //create list
    newSelector.append(ul);

    // select selector
    const select = $('.select');

    // create list objects
    select.append($(li).addClass('fOption').html(`<label>Select Friend</label><span>▼</span>`));
    for (let name of NAMES) {
        select.append($(li).addClass('hide').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label>`));
    }

    // list selectors
    const liFOption = $('li.fOption');
    const liLast = $('li:last');
    const liHide = $('li.hide');

    liLast.css('border','none');

    // option hover
    liHide.mouseenter(function () {
        $(this).css('background-color', 'aliceblue');
    });
    liHide.mouseleave(function () {
       $(this).css('background-color', 'white');
    });

    // EventListeners
    liFOption.click(function () {
        if (flag === false) {
            flag = !flag;
            liFOption.html(`<label>Select Friend</label><span>▼</span>`);
        }
        $('li').toggleClass('option');
    });

    liHide.click(function () {
        $('li').toggleClass('option');
        let name = $(this).text();
        if (flag) {
            liFOption.html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label><span>▼</span>`);
            flag = !flag;
        }
    })
});