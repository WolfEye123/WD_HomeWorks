$(document).ready(() => {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $("a").click(function () {
        $("body,html").animate({scrollTop: $(this.hash).offset().top - $(this).height()}, 800);
        return false;
    });

    $('#scrollUp').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});