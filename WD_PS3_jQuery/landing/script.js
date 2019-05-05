$(document).ready(() => {
    const scroll = $('#scrollUp');
    scroll.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            scroll.fadeIn();
        } else {
            scroll.fadeOut();
        }
    });

    $("a.links__style").click(function () {
        $("body,html").animate({scrollTop: $(this.hash).offset().top - $(window).height() / 2}, 200);
    });

    scroll.click(function () {
        $('body,html').animate({scrollTop: 0}, 200);
    });
});
