$(function() {
    // 账号登录与扫码登录切换
    $('.lr-login-hd li').eq(0).on('click', function() {
        $(this).addClass('lr-current').siblings().removeClass('lr-current');
        $('.lr-login-zhanghao').show().siblings('.lr-login-saoma').hide();
    });

    $('.lr-login-hd li').eq(1).on('click', function() {
        $(this).addClass('lr-current').siblings().removeClass('lr-current');
        $('.lr-login-saoma').show().siblings('.lr-login-zhanghao').hide();
    });
    // 输入登录名提示
    $('.lr-login-username').on({
            blur: function() {
                var reg = /^[\w]{4,50}$/;
                if (!reg.test($(this).val())) {
                    // 不匹配  进行相应的提示
                    $('.lr-login-bd>span').text('华为帐号限制在4~50 个字符').css('color', 'red');
                    $(this).css('borderBottom', '1px solid red');
                } else {
                    // 匹配
                    $('.lr-login-bd>span').text('');
                    $(this).css('borderBottom', '1px solid #ccc');
                };
                if ($(this).val() == '') {
                    $('.lr-login-bd>span').text('');
                    $(this).css('borderBottom', '1px solid #ccc');
                };
            }
        })
        // 扫码登录动画
    $('.lr-saoma-l').on('mouseenter', function() {
        $(this).stop().animate({
            left: '20px'
        }, 500)
        $('.lr-saoma-r').stop().fadeIn();
    })

    $('.lr-saoma').on('mouseleave', function() {
        $('.lr-saoma-l').stop().animate({
            left: '115px'
        }, 500)
        $('.lr-saoma-r').stop().fadeOut();
    })

    // 短信验证码登录
    $('.lr-login-text span').on('click', function() {
        $('.lr-login-checkout').show();
    })

    $('.lr-login-return').on('click', function() {
            $('.lr-login-checkout').hide();
        })
        // 输入手机号提示
    $('.lr-checkout-tel').on({
        // 键盘弹起，输入框有值则高亮获取验证码，空则透明度降低
        keyup: function() {
            if ($(this).val() == '') {
                $('.lr-checkout-b a').css('opacity', '.3');
            } else {
                $('.lr-checkout-b a').css('opacity', '1');
            }
        },
        // 失去焦点验证输入手机号码是否符合规范
        blur: function() {
            var reg = /^[1-9]\d{10}$/;
            if (!reg.test($(this).val())) {
                // 不匹配  进行相应的提示
                $('.lr-checkout-wrong').text('手机号不正确').css('color', 'red');
                $('.lr-checkout-t').css('borderBottom', '1px solid red');
            } else {
                // 匹配
                $('.lr-checkout-wrong').text('');
                $('.lr-checkout-t').css('borderBottom', '1px solid #ccc');
            };
            if ($(this).val() == '') {
                $('.lr-checkout-wrong').text('');
                $('.lr-checkout-t').css('borderBottom', '1px solid #ccc');
            };
        }
    })

    // 记住账号提示
    $('.lr-login-hint ').hover(function() {
        $('.lr-hint').show();
    }, function() {
        $('.lr-hint').hide();
    });
    $('.lr-checkout-hint ').hover(function() {
        $('.lr-hint1').show();
    }, function() {
        $('.lr-hint1').hide();
    });

    // 更多隐藏盒子
    $('.lr-login-more').on('click', function() {
        $('.lr-login-hide').toggle();
    });

    // 其他登录方式
    $('.lr-login-f a').eq(0).hover(function() {
        $('.lr-login-f a').eq(0).css('backgroundPosition', '-72px -55px');
    }, function() {
        $('.lr-login-f a').eq(0).css('backgroundPosition', '-72px -9px');
    });

    $('.lr-login-f a').eq(1).hover(function() {
        $('.lr-login-f a').eq(1).css('backgroundPosition', '-132px -55px');
    }, function() {
        $('.lr-login-f a').eq(1).css('backgroundPosition', '-132px -9px');
    });

    $('.lr-login-f a').eq(2).hover(function() {
        $('.lr-login-f a').eq(2).css('backgroundPosition', '-12px -55px');
    }, function() {
        $('.lr-login-f a').eq(2).css('backgroundPosition', '-12px -9px');
    });
    // var arr = [
    //     '+54 阿根廷',
    //     '+20 埃及',
    //     '+61 澳大利亚',
    //     '+55 巴西',
    //     ' +354 冰岛',
    //     '+45 丹麦',
    //     '+49 德国',
    //     '+7 俄罗斯',
    //     '+33 法国',
    //     '+960 马尔代夫',
    //     '+60 马来西亚',
    //     '+1 美国',
    //     '+976 蒙古',
    //     '+47 挪威',
    //     '+351 葡萄牙',
    //     '+46 瑞典',
    //     '+41 瑞士',
    //     '+66 泰国',
    //     '+34 西班牙',
    //     '+30 希腊',
    //     '+65 新加坡',
    //     '+39 意大利',
    //     '+91 印度',
    //     '+44 英国',
    //     '+972 以色列',
    //     '+84 越南',
    //     '+86 中国',
    //     '+886 中国台湾',
    // ];


})