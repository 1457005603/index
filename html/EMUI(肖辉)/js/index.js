//js
document.addEventListener('DOMContentLoaded', function() {
        //头部
        var xh_header = document.querySelector('.xh-header'),
            hd_link = xh_header.querySelector('.hd-link'),
            link_span = hd_link.querySelector('span'),
            xh_user = document.querySelector('.xh-user'),
            head_bg = document.querySelector('.header-bg'),
            flag = true;

        hd_link.addEventListener('click', function() {
            //点击小三角反转
            if (flag) {
                link_span.style.transform = 'rotateX(175deg)';
                xh_user.style.height = '125px';
                xh_user.style.borderBottom = '2px solid #ccc';
                head_bg.style.height = '825px';

            } else {
                link_span.style.transform = '';
                xh_user.style.height = '0';
                xh_user.style.border = 'none';
                head_bg.style.height = '950px';
            }
            flag = !flag;
        })
    })
    //jq
$(function() {
    //控制动画不同时间
    var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 2, 2, 2, 4, 5, 6, 6, ],
        $dropdow_list = $('.nav-drop-dow-list li');
    var index;
    //nav点击切换动画
    $('.nav-list').on('click', 'li', function() {
            index = $(this).index()
            if ($('.nav-drop-down').eq(index).hasClass('show')) {

                $('.close').click();
                $(this).children('a').find('span').css({
                    transform: 'rotateX(0deg)'
                })
                $('.nav-drop-down').eq(index).removeClass('show');

            } else {
                $(this).parents('.top-nav').siblings('.warp-nav').children().eq(index).addClass('show').css('display', 'block').siblings().css('display', 'none').removeClass('show');
                $(this).children('a').find('span').css({
                    transform: 'rotateX(175deg)'
                })
                $(this).siblings().children('a').find('span').css({
                    transform: 'rotateX(0deg)'
                })
                for (var i = 0; i < $dropdow_list.length; i++) {
                    animation(
                        $(this).parents('.top-nav').siblings('.warp-nav').find('.nav-drop-dow-list li')[i], {
                            data: {
                                opacity: 0.5,
                                top: 50
                            },
                            option: {
                                easing: "Sine",
                                speed: 2
                            }

                        }, arr[i] * 100,
                        function() {
                            console.log(i);

                            animation(this, {
                                data: {
                                    opacity: 1,
                                    top: 0
                                },
                                option: {
                                    easing: "Back",
                                    speed: 1
                                }
                            }, 800)
                        }
                    )
                }
            }

            //关闭按钮
            $('.close span').hover(function() {
                $(this).css({
                    transition: 'all 1s',
                    transform: 'rotate(180deg)'
                })
            }, function() {
                $(this).css({
                    transition: 'all 1s',
                    transform: 'rotate(-180deg)'
                })
            })
        })
        //点击关闭
    $('.close').on('click', function() {
            $(this).parents('.nav-drop-down').stop().fadeOut();
        })
        //滚动时头部隐藏
    $(window).scroll(function() {
        if ($(document).scrollTop() > $('.top-nav').offset().top) {
            $('.warp-nav').fadeOut();
            $('.warp-nav').children('.show').css({
                transform: 'rotateX(0deg)'
            })
            $('.warp-nav').children().eq(index).removeClass('show').css('display', 'none');
            $('.nav-list').children().eq(index).find('span').css({
                transform: 'rotateX(0deg)'
            })
        } else {
            $('.warp-nav').css('display', 'block');
        }
    })

    // big-pic图片加载
    $('.big-pic').animate({
        opacity: 1,
    }, 2000);
    //滚动延迟加载
    (function() {
        var $big_font = $('.big-font'),
            $big_p = $big_font.find('p');
        var arr = [];
        //监听window对象滚动时候的距离 
        $(window).scroll(function() {
                //获取文档滚动的距离和window的实际高度
                var height = $(window).height() + $(document).scrollTop();
                // console.log(height);

                //倒叙遍历
                for (var i = arr.length - 1; i >= 0; i--) {
                    var obj = arr[i];
                    if (height >= obj.oddTop) {
                        (function() {
                            var $This = $(obj)
                            setTimeout(function() {
                                $This.removeClass('hide-none1')
                                $This.removeClass('hide-none2')
                                $This.removeClass('hide-none3')
                                    //执行时间当前的序号%3*200时间过渡
                            }, $This.index() % 3 * 200)
                            arr.slice(i, 1);
                        })()
                    }
                }
            })
            //初始化获取每个对象距离文档顶部的距离
        init($big_p)

        function init() {
            for (var i = 0, len = arguments.length; i < len; i++) {
                arguments[i].each(function(i, ele) {
                    //将当前每个元素对象距离文档顶部的top挂在当前对象的oddTop属性下
                    this.oddTop = $(this).offset().top;
                    //追加到数组中
                    arr.push(this);
                })
            }
        }
    }())
    //视频弹窗
    $('.font-m a').click(function() {
        $('.font-video video').attr('autoplay', 'autoplay');
        $('.font-video').css('display', 'block');
        $('.font-video video').clone(true).insertAfter('.font-video video')
        $('.font-video video').eq(0).remove();
        $(document.body).css({
            overflow: 'hidden'
        })
    });
    $('.btn-close').click(function() {
            $('.font-video').css('display', 'none');
            $('.font-video video').clone(true).insertAfter($('.font-video video')).removeAttr('autoplay')
            $('.font-video video').eq(0).remove()
            $(document.body).css({
                overflow: 'auto'
            })
        })
        //图片滚动动画
        //窗口滚动时触发
    var flag = true;
    $(window).scroll(function() {
        var $height = $(window).height() + $(document).scrollTop();

        if ($height >= $('.darg-drop-pic').offset().top) {
            if (flag) {

                $('.scale').siblings().eq(0).animate({
                    left: -500,

                }, 1000)
                $('.scale').siblings().eq(1).animate({
                    left: -250,

                }, 1000)
                $('.scale').siblings().eq(2).animate({
                    left: 250,

                }, 1000)
                $('.scale').siblings().eq(3).animate({
                    left: 500,

                }, 1000)
            }
            flag = false;
        }

    })
    $('.list-pic img').on({
            mousedown: function(event) {
                //取消图片的默认行为
                event.preventDefault();
            }
        })
        //图片拖拽
    $('.darg-drop-pic').on({
            mousedown: function(event) {
                var clickX = event.pageX - $('.darg-drop-pic').offset().left;
                $('.darg-drop-pic').on({
                    mousemove: function(event) {
                        var moveX = event.pageX - clickX,
                            winW = parseInt($(window).width() / 2 - $('.list-pic li').outerWidth() - 30);
                        if (moveX > winW) {
                            moveX = winW;
                        } else if (moveX < (-winW)) {
                            moveX = -winW;
                        }
                        $('.darg-drop-pic').css({
                            left: moveX
                        })
                    },

                })
            },
            mouseup: function() {
                $('.list-pic li').each(function(i, ele) {
                    var $winW = parseInt($(window).width() / 2 - $('.list-pic li').outerWidth() / 2),
                        $winw = parseInt($(window).width() / 2 + $('.list-pic li').outerWidth() / 2),
                        $li = parseInt($(this).offset().left);
                    console.log($winW, $winw, $li);

                    if ($winW <= $li && $li <= $winw) {
                        $(this).addClass('scale').siblings().removeClass('scale');
                    }
                })
                $('.darg-drop-pic').off('mousemove');
            }
        })
        //小车播放
    var $dna_car = $('.dna-car video'),
        $dna_carH = $dna_car.offset().top,
        $dna_carh = $dna_car.offset().top + $dna_car.width(),
        flag_1 = true,
        flag_2 = false;
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $dna_carH) {
            if (flag_1) {
                $dna_car[0].play();
            }
            flag_1 = false;
        } else if ($(document).scrollTop() < $dna_carH) {
            flag_1 = true;
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $dna_carh) {
            flag_2 = true;
        } else if ($(document).scrollTop() < $dna_carh - 80) {
            if (flag_2) {
                $dna_car[0].play();
            }
            flag_2 = false;
        }
    });
    // 百分比加载
    var $speed_h = $('.speed h1'),
        $bar = $('.bar-in i'),
        $percentage_span = $('.percentage span'),
        num = 0,
        goudan = 0;
    $(window).scroll(function() {
            if ($(document).scrollTop() >= $speed_h.offset().top) {
                var timer = setInterval(function() {
                    num++;
                    if (num > 20) {
                        clearInterval(timer)
                        var timer1 = setInterval(function() {
                            goudan++;
                            if (goudan > 2) {
                                clearInterval(timer1)
                            } else {
                                $percentage_span.eq(1).text(goudan);
                                $bar.eq(2).css({
                                    width: 50 * goudan + '%'
                                })
                                $bar.eq(3).css({
                                    width: 50 * goudan + '%'
                                })
                            }
                        }, 260)
                    } else {
                        $percentage_span.eq(0).text(num);
                        $bar.eq(0).css({
                            'width': num * 5 + '%'
                        })
                        $bar.eq(1).css({
                            'width': num * 5 + '%'
                        })
                    }
                }, 260)

            }
        })
        //视频剪辑部分
    var bool = true;
    if (bool) {
        $(window).scroll(function() {
            if ($(document).scrollTop() >= $('.masterpiece').offset().top && bool) {
                $('.masterpiece video').attr('autoplay', 'autoplay');
                $('.masterpiece video').attr('muted', 'muted');
                $('.masterpiece video').get(0).play();
                bool = false;
            }

        })
    }
    $('.masterpiece video')[0].addEventListener('ended', function() {
        this.src = './video/smartVideo.mp4';
        this.pause();
        $('.mask').addClass('mask1')
        $('.mask .btn').addClass('btn1').find('span').css('display', 'block')
    })
    $('.mask .btn').click(function() {
            $('.masterpiece video').attr('src', './video/smartVideo.mp4');
            $('.mask').removeClass('mask1')
            $('.mask .btn').removeClass('btn1').find('span').css('display', 'none')
        })
        // 尾部二维码显示隐藏
    $('.footer_mid_right .show').hover(function() {
        $('.footer_mid_right .wx2').toggle();
    })
    $('.footer_mid_right .show1').hover(function() {
        $('.footer_mid_right .wx1').toggle();
    })
    var dachui = true; //用于控制只执行当前一次得判断
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $('.description-your-feature').offset().top && dachui) {
            dachui = false;
            var arr = []; //声明一个数组用于放将图片分割得分数
            var box = document.getElementsByClassName('description-your-feature')[0]; //获取外层盒子
            //for循环将创建每个数添加到数组中
            for (var i = 0; i < 72; i++) {
                arr.push(i)
            }

            //将数组里面的数随机排列
            for (var i = 0; i < arr.length; i++) {
                var suiji = Math.floor(Math.random() * 72);
                var mid = arr[i];
                arr[i] = arr[suiji];
                arr[suiji] = mid;
            }
            console.log(arr);
            //自定义一个函数用于数组里面得每个数取出来求出对应得top/left值
            //因为动画属于异步操作所以不能用for进行取值
            i = 0; //
            fn6();

            function fn6() {
                var val = arr[i];
                if (typeof val != 'undefined') {
                    //left方向可以放12格
                    //top方向6格
                    //得出规律
                    var top = parseInt(val / 12) * 100,
                        left = (val % 12) * 100;
                    console.log(top, left);
                    var str = "<div class='goudan' style='background:url(./img/201904200958408570823.jpg)-" + left + "px -" + top + "px;'></div>";
                    box.innerHTML += str;
                    var divs = document.getElementsByClassName('goudan')[i];
                    animation(divs, {
                        data: {
                            top: top,
                            left: left
                        }
                    }, 50, function() {
                        i++; //在前一次动画执行完后在取下次得值
                        requestAnimationFrame(fn6); //持续调用动画
                    })
                }

            }

        }





    })


})