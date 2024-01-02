window.addEventListener('load', function() {
    // 顶部广告关闭按钮
    var topBanner = document.querySelector('.top-banner-img');
    var topBanner_close = topBanner.querySelector('span');

    topBanner_close.addEventListener('click', function() {
        topBanner.style.display = 'none';
    });
});
$(function() {
    // 电梯导航
    console.log('huixiao')
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $('.recommend-goods-focus2').offset().top) {
            $('.elevator').css("right", "0");
        } else {
            $('.elevator').css("right", "-100px");
        }
        $(".floor2>div").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top - 150) {
                $(".elevator ul li").eq(i).children('i').css('top', '0');
                $(".elevator ul li").eq(i).children('i').parent().siblings().children().css('top', '-15px');
                $(".elevator ul li").eq(i).addClass('elevator-li-current').siblings().removeClass();
            }
        })
    });


    $('.elevator ul li').click(function() {
        var current = $(".floor2>div").eq($(this).index()).offset().top;
        $('body,html').stop().animate({
            scrollTop: current
        })
    });


    // 返回顶部栏
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $('.focus').offset().top) {
            $('.right-UI').fadeIn();
        } else {
            $('.right-UI').fadeOut();
        }
    });
    $('.right-UI div:eq(3)').click(function() {
        $('body,html').stop().animate({
            scrollTop: 0
        })
    })
});