$(function() {

    // 积分兑券收起点击事件
    $('.lr-conversion-hd a').click(function(e) {
        console.log(e);

        if ($(this).text() == '收起') {
            $(this).html('展开' + '<span></span>');
            $('.lr-conversion-hd a span').css({
                backgroundPosition: ' -24px 0px'
            });
            $(this).parent().siblings('.lr-conversion-bd').stop().slideUp()
        } else {
            $(this).html('收起' + '<span></span>');
            $('.lr-conversion-hd a span').css({
                backgroundPosition: ' -24px -8px'
            });
            $(this).parent().siblings('.lr-conversion-bd').stop().slideDown()
        }
    })

    // 超值好券背景透明度变化
    $('.lr-tic-r').hover(function() {
        $(this).css('opacity', '.8');
    }, function() {
        $(this).css('opacity', '1');
    });

    // 活动详情显示
    $('.lr-more').on('click', function() {
        $('.lr-mask').show();
    })

    // 活动详情隐藏
    $('.lr-close').on('click', function() {
        $('.lr-mask').hide();
    })

    // 点击我知道了活动详情隐藏
    $('.lr-act-ft a').on('click', function() {
        $('.lr-mask').hide();
    })

    // 给中奖名单的li清除浮动
    $('.lr-list ul li').addClass('clearfix');

    // num为ul的高度
    var num = $('.lr-list ul')[0].offsetHeight;

    // 中奖名单滚动
    var index = 0; //设一个全局变量为0
    var timer = 0; //设一个全局变量，方便在函数内给定时器命名，清除定时器时需要使用
    time()

    // 把定时器封装成一个函数,方便后续调用
    function time() {
        timer = setInterval(function() {
            // 给index++，定时设置ul向上偏移+1,如果偏移位置等于ul的高度，那么给ul定位至父盒子最底部，重新开始向上滚动
            if (index == num) {
                index = -150
            } else {
                index++
                $('.lr-list ul').css({
                    'top': -index + 'px',
                });
            }
        }, 40)
    }

    // 中奖名单滚动鼠标移入停止滚动，鼠标移出继续滚动
    $('.lr-list').hover(function() {
        clearInterval(timer);
    }, function() {
        time()
    })

    // 抽奖
    // 抽取随机数的函数
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 所有奖品图片的src
    var srcarr = ['img/lr-award1.png', 'img/lr-award2.png', 'img/lr-award3.png', 'img/lr-award4.png', 'img/lr-award5.png', 'img/lr-award6.png', 'img/lr-award7.png'];

    var ti = 0; //设一个全局变量，方便给更换图片的定时器在函数内命名，清除定时器时需要使用
    // 点击开始按钮

    var flag = true; //true则可点击开始翻牌，且可点击抽奖翻牌盒子，flase表示已抽奖过一次，不可再次抽奖
    var flag1 = false; //false不能被点击
    $('.lr-start').on('click', function() {
        // flag为true执行动画
        if (flag) {
            // 奖品盒子旋转180度
            $('.lr-activity-l').children().css({
                    transform: 'rotateY(180deg)',
                    transition: 'all 1s'
                })
                // 提高翻牌盒子及返回盒子的层叠级
            $('.lr-b,.lr-return').css({
                    'z-index': '2'
                })
                // 翻牌动画效果
                // 一
            $('.lr-acti-1').css({
                    'z-index': '1'
                }).stop().animate({
                    left: '235px',
                    top: '175px'
                }, 1000, function() {
                    setTimeout(function() {
                        $('.lr-acti-1').animate({
                            left: '0px',
                            top: '0px'
                        }, 80)
                    }, 1000)
                })
                // 二
            $('.lr-acti-2').css({
                'z-index': '2'
            }).stop().animate({
                top: '175px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-2').animate({
                        top: '0px'
                    }, 80)
                }, 1000)
            });
            // 三
            $('.lr-acti-3').css({
                'z-index': '3'
            }).stop().animate({
                right: '235px',
                top: '175px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-3').animate({
                        right: '0px',
                        top: '0px'
                    }, 80)
                }, 1000)
            });
            // 四
            $('.lr-acti-4').css({
                'z-index': '4'
            }).stop().animate({
                left: '235px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-4').animate({
                        left: '0px'
                    }, 80)
                }, 1000)
            });
            // 五
            $('.lr-acti-6').css({
                'z-index': '5'
            }).stop().animate({
                right: '235px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-6').animate({
                        right: '0px'
                    }, 80)
                }, 1000)
            });
            // 六
            $('.lr-acti-7').css({
                'z-index': '6'
            }).stop().animate({
                left: '235px',
                bottom: '175px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-7').animate({
                        left: '0px',
                        bottom: '0px'
                    }, 80)
                }, 1000)
            });
            // 七
            $('.lr-acti-8').css({
                'z-index': '7'
            }).stop().animate({
                bottom: '175px'
            }, 1000, function() {
                setTimeout(function() {
                    $('.lr-acti-8').animate({
                        bottom: '0px'
                    }, 80)
                }, 1000)
            });
            // 八
            $('.lr-acti-9').css({
                'z-index': '8'
            }).stop().animate({
                right: '235px',
                bottom: '175px'
            }, 1000, function() {
                // alert(0)
                setTimeout(function() {
                    $('.lr-acti-9').animate({
                        right: '0px',
                        bottom: '0px'
                    }, 80);
                    // 设置定时器，回调函数动画完成后才能执行翻牌操作
                    setTimeout(function() {
                        // alert(1)
                        // 动画完成，flag1取反，可翻牌
                        flag1 = true;
                        // console.log(flag1);
                        // 点击停止翻牌定时器,
                        $('.lr-b').on('click', function() {
                                // 点击翻牌后判断flag1，为true则可执行抽奖代码，为false表示动画还未完成不可抽奖
                                if (flag1 == true) {
                                    // alert(999)
                                    if (flag) {
                                        // 点击翻牌抽奖后flag取反，不可再次抽奖
                                        flag = false
                                        clearInterval(ti);
                                        $(this).parent().css({
                                            transform: 'rotateY(720deg)',
                                            transition: 'all 1.5s'
                                        })
                                        $(this).siblings().css({
                                            'z-index': '3'
                                        })
                                    } else {
                                        return false
                                    }
                                }
                            })
                            //开始翻牌动画完成前不可返回
                            // 点击返回按钮，返回开始状态
                        $('.lr-return').on('click', function() {
                            if (flag1 == true) {
                                // 点击返回后flag1取反，开始翻牌重新执行动画，动画完成后才可翻牌
                                flag1 = false;
                                console.log(flag1)
                                clearInterval(ti)
                                $('.lr-activity-l').children().css({
                                        transform: 'rotateY(-360deg)',
                                        transition: 'all .5s'
                                    })
                                    // 提高翻牌盒子及返回盒子的层叠级
                                $('.lr-b,.lr-return').css({
                                        'z-index': '0'
                                    })
                                    // 翻牌动画效果
                                $('.lr-acti-1 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award1.png)'
                                })
                                $('.lr-acti-2 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award2.png)'
                                })
                                $('.lr-acti-3 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award3.png)'
                                })
                                $('.lr-acti-4 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award4.png)'
                                })

                                $('.lr-acti-6 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award2.png)'
                                })

                                $('.lr-acti-7 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award5.png)'
                                })
                                $('.lr-acti-8 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award6.png)'
                                })
                                $('.lr-acti-9 .lr-a').css({
                                    backgroundImage: 'url(img/lr-award7.png)'
                                })

                            }
                        })

                    }, 1000)

                }, 1000)
            })

            // 开启定时器，将随机数作为索引号，随机获取数组中的src，将src设置为盒子背景图片地址
            ti = setInterval(function() {
                var n = getRandom(0, 6);
                $('.lr-a').css({
                    backgroundImage: 'url(' + srcarr[n] + ')'
                })
            }, 500)

        } else {
            $('.lr-mask1').show()
        }

    })

    // 提示已经抽过奖
    $('.lr-close').on('click', function() {
        $('.lr-mask1').hide();
    })
    $('.lr-get a').on('click', function() {
        $('.lr-mask1').hide();
    })

})