window.onload = function() {
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
    });
    var lr_lunbotu = document.querySelector('.lr-lunbotu');
    var lr_box = document.querySelector('.lr-box');
    var divs = lr_box.querySelectorAll('div');
    var leftarrows = document.querySelector('.leftarrows');
    var rightarrows = document.querySelector('.rightarrows');
    var divs_width = divs[0].offsetWidth;
    var box_left = lr_box.style.left;
    var num = 0;

    // 鼠标移入移出变样式
    leftarrows.addEventListener('mouseenter', function() {
        if (num == 0) {
            this.style.cursor = 'not-allowed';
        } else {
            this.style.cursor = 'pointer';
        }
    })
    leftarrows.addEventListener('mouseout', function() {
        this.style.cursor = 'pointer';
    })
    rightarrows.addEventListener('mouseenter', function() {
        if (num == -(divs.length - 1)) {
            this.style.cursor = 'not-allowed';
        } else {
            this.style.cursor = 'pointer';
        }
    })
    rightarrows.addEventListener('mouseout', function() {
        this.style.cursor = 'pointer';
    })

    // 用if判断,走到头就不走了
    leftarrows.addEventListener('click', function() {

        if (num == 0) {
            this.style.cursor = 'not-allowed';
            this.style.color = '#969696';
        } else {
            num++;
            lr_box.style.transition = 'all .3s';
            lr_box.style.left = num * divs_width + 'px';
            rightarrows.style.color = '#000';
        }
    })

    rightarrows.addEventListener('click', function() {
        if (num == -(divs.length - 1)) {
            this.style.cursor = 'not-allowed';
            this.style.color = '#969696';
        } else {
            this.style.cursor = 'pointer';
            num--;
            lr_box.style.transition = 'all .3s';
            lr_box.style.left = num * divs_width + 'px';
            leftarrows.style.color = '#000';

        }
        // console.log(num);
    });
    var ser_lj = document.querySelector('.ser-lj');
    var ser_erweima = document.querySelector('.ser-erweima');
    ser_lj.children[0].addEventListener('mouseenter', function() {
        ser_erweima.style.display = 'block'
    })
    ser_lj.children[0].addEventListener('mouseleave', function() {
        ser_erweima.style.display = 'none'
    })

};
//限时加价
$(function() {
    $('.lh-right').click(function() {
        $('.lhs-hd').animate({
                left: '-240px'
            }, 300)
            // console.log(111);
    })
    $('.lh-left').click(function() {
        $('.lhs-hd').animate({
                left: '0px'
            }, 300)
            // console.log(111);
    });
    //热门回收机型
    $('.capacity li').click(function() {
        $('.capacity li').removeClass('currents');
        $(this).addClass('currents');
    });
    $('.hot-hd li').click(function() {
        var index = $(this).index();
        $('.hotjx').hide();
        $('.hotjx').eq(index).show();
        $('.hot-hd li').removeClass('current');
        $(this).addClass('current');
    })
    $('.hot-brand ul li').click(function() {
        // console.log($(this).siblings().children('.t').siblings());

        var index = $(this).index();
        $(this).parents('.hot-brand').siblings('.hot-phone').children('div').hide();
        $(this).parents('.hot-brand').siblings('.hot-phone').children('div').eq(index).show();
        $(this).siblings().children().eq(0).show().siblings().hide();
        $(this).children().eq(0).hide().siblings().show();
        $(this).siblings().children('.t').hide()
        $(this).siblings().children('.t').siblings().show()
    });
    $('.hotwd-body-right').hover(function() {
            $('.hottw-conthd').slideDown();
        }, function() {
            $('.hottw-conthd').slideUp()
        })
        // 常见问题tab栏切换
    $('.hotwd2 li').click(function() {

        $('.hotwd-body-left div').eq($(this).index()).show().siblings().hide();
        $('.hotwd2 li').removeClass('current');
        $(this).addClass('current');

    });
    $('.footer-t li').mouseenter(function() {
        var index = $(this).index();
        $(this).children('div').stop().slideDown();
    });
    $('.footer-t li').mouseleave(function() {
        var index = $(this).index();
        $(this).children('div').stop().slideUp();
    });

    //爱回收客服
    $('.footer-bd').mouseover(function() {
        $(this).siblings('.footer-aside').show();

    })
    $('.footer-bd').mouseout(function() {
        $(this).siblings('.footer-aside').hide();

    });
    //常见问答
    $('.lh-item1').click(function() {
        $(this).siblings().slideToggle().parent('.lh-item').siblings().children('.lh-item2').slideUp();
    });
    //显示隐藏底部侧边栏
    $('.goback-top li').mouseover(function() {
        var index = $(this).index();
        // console.log(index);

        $(this).parents('.goback-top').siblings('.goback-nav').children('li').eq(index).show().siblings().hide();
    })
    $('.goback-top li').mouseout(function() {
        var index = $(this).index();

        $(this).parents('.goback-top').siblings('.goback-nav').children('li').eq(index).hide().siblings().hide();
    });
    // 返回顶部
    $(function() {
        var hotwd = $('.lh-hotwd').offset().top;
        $(window).scroll(function() {
            // console.log($(document).scrollTop());
            if ($(document).scrollTop() >= hotwd) {
                $('.goback-bar').show()
            } else {
                $('.goback-bar').hide()
            }
        });
        $('.goback-bar').click(function() {
            $('body,html').stop().animate({
                scrollTop: 0
            });
        })

    })
})