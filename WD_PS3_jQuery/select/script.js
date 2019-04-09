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
    const li = '<li></li>';

    // select selector
    const select = $('.select');

    // create list objects
    for (let name of NAMES) {
        select.append($(li).addClass('hide').html(`<img src="images/${name}.png" alt="${name}"><label>${name}</label>`));
    }

    // list selectors
    const liFOption = $('li.fOption');
    const liLast = $('li:last');
    const liHide = $('li.hide');

    liLast.css('border','none');

    // EventListeners
    liFOption.click(function () {
        if (!flag) {
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