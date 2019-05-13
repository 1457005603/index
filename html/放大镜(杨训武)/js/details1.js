$(function() {
    new hScroll({
        nav1: '.headv>div', //导航对应的元素
        nav2: '.nav-list>div', //监听的元素
        checkClass: 'headv-check' //选中的样式
    });
    //屏幕滑动导航条就变成固定定位
    $(window).scroll(function() {
        if ($(document).scrollTop() > $(".introduced").offset().top) {
            $(".introduced .headv").css("position", "fixed");
        } else if ($(document).scrollTop() < $(".introduced").offset().top) {
            $(".introduced .headv").css("position", "relative");
        }
    });
    //隐藏手机详情部分介绍     //按钮隐藏内容暂时不做了
    // $(".nav1 .showBtn").click(function() {
    //     $(".nav1 .showBtn").addClass("togglemob");
    //     $(".nav1 .hideBtn").removeClass("togglemob");
    //     $(".hideImg").css("height", "9951.310px");
    // });
    // $(".nav1 .hideBtn").click(function() {
    //     $(".nav1 .hideBtn").addClass("togglemob");
    //     $(".nav1 .showBtn").removeClass("togglemob");
    //     $(".hideImg").css("height", "50px");
    // });
    //按钮隐藏内容暂时不做了

    //快速返回顶部
    $(document).scroll(function() {
        var headvBox = $(".introduced").offset().top;
        if (headvBox <= $(window).scrollTop()) {
            $(".radeyUp").removeClass("togglemob");
        } else if (headvBox > $(window).scrollTop()) {
            $(".radeyUp").addClass("togglemob");
        }

        $(".radeyUp").click(function() {
            $(".set_Top img").prop("src", "./img/上升.png");
            $("html,body").stop().animate({
                scrollTop: 0,
            }, 2000);
        });
        if ($(window).scrollTop() == 0) {
            $(".set_Top img").prop("src", "./img/准备.png");
        }

    });

    //评论内容模块
    //结尾  产品介绍
    $(".box ul li").hover(function() {
        $(this).addClass('on').siblings().removeClass('on');
    });


    //----------------------尾部 JS---------------------------
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
            console.log(num);
        })
        //底部
    var ser_lj = document.querySelector('.ser-lj');
    var ser_erweima = document.querySelector('.ser-erweima');
    ser_lj.children[0].addEventListener('mouseenter', function() {
        ser_erweima.style.display = 'block'
    })
    ser_lj.children[0].addEventListener('mouseleave', function() {
        ser_erweima.style.display = 'none'
    })

});