$(function() {
    function listEffect(localfirstselector, Addeffectselector, firstsonclass) {
        $(Addeffectselector).mouseenter(function() {
            $(this).find(firstsonclass).show().siblings().hide();
            $(this).siblings("li").find(firstsonclass).hide().siblings().show();
            $(this).css("margin-bottom", 20);
            $(localfirstselector).css("margin-bottom", 0);
        });
        $(Addeffectselector).mouseleave(function() {
            $(this).find(firstsonclass).hide().siblings().show();
            $(localfirstselector).find(firstsonclass).show().siblings().hide();
            $(this).css("margin-bottom", 0);
            $(localfirstselector).css("margin-bottom", 20);
        });

        $(localfirstselector).on("mouseenter mouseleave", function() {
            $(localfirstselector).css("margin-bottom", 20);
        });
    }

    listEffect(".gameList li:nth-child(1)", ".gameList li", ".gameContent");
    listEffect(".appList li:nth-child(1)", ".appList li", ".gameContent");
    listEffect(".newestList li:nth-child(1)", ".newestList li", ".gameContent");
    listEffect(".riseList li:nth-child(1)", ".riseList li", ".gameContent");

    $(".app ul").mouseenter(function() {
        $(this).css("backgroundColor", "#EAF4F9");
        $(this).siblings(".app ul").css("backgroundColor", "");
        $(this).find(".ruanjian a").show();

    })

    $(".app ul").mouseleave(function() {
        $(this).css("backgroundColor", "");
        $(this).find(".ruanjian a").hide();

    })

    $(".xiala>li").mouseenter(function() {
        $(this).children("ul").show();

    })
    $(".xiala>li").mouseleave(function() {
        $(this).children("ul").hide();

    })

    //搜索框//
    var shuru = document.querySelector('.shuru');
    shuru.onfocus = function() {

        // if (this.value === '') {
        //     this.placeholder = '搜索';
        // }
        this.placeholder = '';
        this.style.color = '#333';
        this.style.outline = 'none';

    }
    shuru.onblur = function() {
        if (this.placeholder === '') {
            this.placeholder = '搜索';
        }
        this.style.color = '#999';

    }

    //表头导航栏
    $(".nav li").click(function() {
        $(this).find("a").css("color", "red");
        $(this).siblings().find("a").css("color", "");
    });



    // tab切换
    $(".special-tu a").mouseenter(function() {

            $(this).addClass("current").siblings().removeClass("current");
            var index = $(this).index();
            console.log(index);
            $(".zwbox .lipin").eq(index).show().siblings().hide();

        })
        // 结束


    //   高亮显示开始
    $(".special-tu a").hover(function() {
            $(this).siblings().stop().fadeTo(400, 0.5);


        }, function() {
            $(this).siblings().stop().fadeTo(400, 1);
        })
        //   高亮显示结束





    //    电梯导航开始//
    var toolTop = $(".s-recommend").offset().top;

    $(window).scroll(function() {
        // console.log($(document).scrollTop());

        if ($(document).scrollTop() >= toolTop) {
            $(".elevator").show();
        } else if ($(document).scrollTop() <= toolTop) {
            $(".elevator").hide();
        }
    });
    $(".elevator li").click(function() {
        console.log($(this).index());
        $("body,html").stop().animate({
            scrollTop: 0
        }, 1000);

    })

    //电梯导航结束//





});