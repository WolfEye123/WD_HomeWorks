const USERS = [
    {
        fullname: 'Jenny Hess',
        username: 'jenny',
        photo: 'Jenny_Hess.png'
    },
    {
        fullname: 'Elliot Fu',
        username: 'elliot',
        photo: 'Elliot_Fu.png'
    },
    {
        fullname: 'Stevie Feliciano',
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
        select.append($(li).addClass('hide').attr('value', `${user.username}`).html(
            `
            <img 
            src="${filePath + user.photo}" 
            alt="${user.username}">
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
        const userIndex = USERS.findIndex(user => user.fullname === $(this).text().trim());
        const user = USERS[userIndex];
        if (flag) {
            liFOption.attr('value', `${user.username}`).html(`
                <img 
                src="${filePath + user.photo}" 
                alt="${user.username}"">
                <label>${user.fullname}</label>
                <span>▼</span>
            `);
            liHide.css('background-color', 'white');
            $(this).css('background-color', 'aliceblue');
            flag = !flag;
        }
    })
});
