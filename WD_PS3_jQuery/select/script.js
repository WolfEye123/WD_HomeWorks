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
        select.append($(li).addClass('hide').html(
            `
            <img 
            src="images/${name}.png" 
            alt="${name}">
            <label>${name}</label>
        `));
    }

    // list selectors
    const liFOption = $('li.fOption');
    const liLast = $('li:last');
    const liHide = $('li.hide');

    liLast.css('border', 'none');

    // EventListeners
    liFOption.click(function () {
        if (!flag) {
            flag = !flag;
        }
        $('li').toggleClass('option');
    });

    // $(window).on('click',function (event) {
    //     if (!select.is(event.target) && liHide.attr('class') == 'hide option'){
    //         console.log("you clicked outside the box");
    //         $('li').toggleClass('option');
    //     } else {
    //         console.log("you clicked inside the box");
    //     }
    // });

    liHide.click(function () {
        $('li').toggleClass('option');
        let name = $(this).text();
        if (flag) {
            liFOption.html(`
                <img 
                src="images/${name}.png" 
                alt="${name}">
                <label>${name}</label>
                <span>▼</span>
            `);
            liHide.css('background-color', 'white');
            $(this).css('background-color', 'aliceblue');
            flag = !flag;
        }
    })
});
