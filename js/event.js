$(document).ready(function () {
    // 스크롤메뉴
    var headerHeight = $('#header').height();
    $('#sidemn').hide()

    $(window).scroll(function () {
        var rollIt = $(this).scrollTop() >= headerHeight;

        if (rollIt) {
            $('#sidemn').fadeIn();
        } else {
            $('#sidemn').fadeOut();
        }


    })


})
