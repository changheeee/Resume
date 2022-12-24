'use strict'
window.addEventListener('load', function () {
    // let h;
    // let i = 0;
    // let n = 0;
    // const wrap = document.querySelector('#wrap');
    // const sidemn = wrap.children[0];
    // const menuList = sidemn.children;
    // const content = wrap.children;
    let i = 0;
    const ico = this.document.getElementsByClassName('ico')[0];
    console.log(ico);
    const icoA = ico.children;
    console.log(icoA)
    const img = this.$('img');
    console.log(img)

    /*
        img.addEventListener('hover', function () {
            for (i = 0; i < img.length; i++) {
                
            }
        })
    */

    //스크롤하면 페이지탑에서 고정
    /*
    window.addEventListener("wheel", function (e) {
        e.preventDefault();
        { passive: false; }

        var $html = $('html')
        var page = 1;
        var lastPage = this.document.getElementById('wrap').children.length;

        $html.animate({ scrollTop: 0 }, 10);

        $(window).on('wheel', function (e) {
            if ($html.is(':animated')) return;

            if (e.originalEvent.deltaY > 0) {
                if (page == lastPage) return;

                page++;
            } else if (e.originalEvent.deltaY < 0) {
                if (page == 1) return;

                page--;
            }
            var posTop = (page - 1) * $(window).height();

            $html.animate({ scrollTop: posTop });
        })
    })
    */

})