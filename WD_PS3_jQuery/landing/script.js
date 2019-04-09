$(document).ready(() => {
    $('#scrollUp').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $("a").click(function () {
        $("body,html").animate({scrollTop: $(this.hash).offset().top - $(window).height() / 2}, 200);
    });

    $('#scrollUp').click(function () {
        $('body,html').animate({scrollTop: 0}, 200);
    });
});