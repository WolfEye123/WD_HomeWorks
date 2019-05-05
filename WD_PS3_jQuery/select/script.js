const USERS = [
    {
        fullname: 'Jenny_Hess',
        username: 'jenny',
        photo: 'Jenny_Hess.png'
    },
    {
        fullname: 'Elliot_Fu',
        username: 'elliot',
        photo: 'Elliot_Fu.png'
    },
    {
        fullname: 'Stevie_Feliciano',
        username: 'stevie',
        photo: 'Stevie_Feliciano.png'
    },
    {
        fullname: 'Christian',
        username: 'christian',
        photo: 'Christian.png'
    },
    {
        fullname: 'Matt',
        username: 'matt',
        photo: 'Matt.png'
    },
];
$(document).ready(() => {
    let flag = true;
    const filePath = 'images/';

    // html objects
    const li = '<li></li>';

    // select selector
    const select = $('.select');

    // create list objects
    USERS.map((user)=>{
        select.append($(li).addClass('hide').html(
            `
            <img 
            src="${filePath + user.photo}" 
            alt="${user.username}"
            value="${user.username}">
            <label>${user.fullname}</label>
        `));
    });

    // list selectors
    const liFOption = $('li.fOption');
    const liHide = $('li.hide');

    // EventListeners
    liFOption.click(function () {
        if (!flag) {
            flag = !flag;
        }
        $('li').toggleClass('option');
    });

    liHide.click(function () {
        $('li').toggleClass('option');
        let name = $(this).text().trim();
        if (flag) {
            liFOption.html(`
                <img 
                src="${filePath + name}.png" 
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
