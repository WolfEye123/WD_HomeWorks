$(document).ready(() => {
    let flag = true;
    const checkboxLabel = $('.checkboxLabel');
    checkboxLabel.click(function () {
        let name = $(this).text();
        $('#lBlock').css('background-image', `url(../images/housesToSlider/${name}.png)`);
    })
});