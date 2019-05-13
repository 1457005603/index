window.addEventListener('load', function() {
    window.document = function() {

            var text = document.querySelector('.lyb-search input');
            var search_a = document.querySelectorAll('.lyb-search a');

            text.addEventListener('focus', function() {
                for (i = 0; i < search_a.length; i++) {
                    search_a[i].style.display = 'none';
                }
            })
            text.addEventListener('blur', function() {
                for (i = 0; i < search_a.length; i++) {
                    search_a[i].style.display = 'block';
                }
            })
        }
        // 点击删除


    var ry_ipt = document.querySelector('.ry_ipt input')
    var ry_links = document.querySelector('.ry-links')
    ry_ipt.addEventListener('focus', function() {
        ry_links.style.display = 'none';
    })
    ry_ipt.addEventListener('blur', function() {
        ry_links.style.display = 'block';
    })

})

// 轮播图
$(function() {
    var focus = $('.focus')
    var focus_num = 0
    var focus = function() {
        if (focus_num == $('.focus ul li:last').index()) {
            focus_num = 0;
        }
        focus_num++;
        $('.focus ul li').fadeOut();
        $('.focus ul li').eq(focus_num).fadeIn();
    }
    var focus_timer = setInterval(function() {
        focus();
    }, 2000)
    $(".focus").mouseover(function() {
        clearInterval(focus_timer)
    })
    $(".focus").mouseout(function() {
        focus_timer = setInterval(function() {
            focus();
        }, 2000)
    })





    // 电梯
    $(document).scrollTop(100);
    var boxTop = $(".ry_volume").offset().top;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= boxTop) {
            $(".ry_cebian").fadeIn();
        } else {
            $(".ry_cebian").fadeOut();
        }
    });
    $(window).scroll(function() {
        $(".floor").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                // $(".ry_cebian li").eq(i).addClass("")
            }
        })
        $(".ry_cebian li").click(function() {
            var lis = $(".floor>div").eq($(this).index() - 1).offset().top;
            console.log($(this).index());
            $('body, html').stop().animate({
                scrollTop: lis
            })

        })
    })



})