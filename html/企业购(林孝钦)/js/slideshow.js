$(function() {
    //焦点轮播图
    // 动态创建小圆圈
    $('.focus ul li').each(function(i, ele) {
        var li = $('<li></li>');
        $('.focus-circle').append(li);
    });
    // 先只把第一张图片显示出来，其他的隐藏
    $('.focus ul li').hide();
    $('.focus ul li').eq(0).show();
    $('.focus-circle li:first').addClass('focus-circle-current');
    // 点击小圆圈时图片发生改变
    $('.focus-circle li').mouseenter(function() {
        var index = $(this).index();
        $('.focus-circle li').removeClass('focus-circle-current');
        $(this).addClass('focus-circle-current');
        $('.focus ul li').fadeOut();
        $('.focus ul li').eq(index).fadeIn();
        focus_num = index;
    })
    var focus_num = 0;
    // 右按钮
    $('.right-button').click(function() {
        if (focus_num == $('.focus ul li:last').index()) {
            focus_num = -1;
        }
        focus_num++;
        $('.focus-circle li').removeClass('focus-circle-current');
        $('.focus-circle li').eq(focus_num).addClass('focus-circle-current');
        $('.focus ul li').fadeOut();
        $('.focus ul li').eq(focus_num).fadeIn();
    });
    // 左按钮
    $('.left-button').click(function() {
        if (focus_num == $('.focus ul li:first').index()) {
            focus_num = 8;
        }
        focus_num--;
        $('.focus-circle li').removeClass('focus-circle-current');
        $('.focus-circle li').eq(focus_num).addClass('focus-circle-current');
        $('.focus ul li').fadeOut();
        $('.focus ul li').eq(focus_num).fadeIn();
    });
    // 自动轮播
    var focus_timer = setInterval(function() {
        $('.right-button').click();
    }, 2000);
    // 鼠标放入就停止
    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter', function() {
        clearInterval(focus_timer);
        focus_timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        focus_timer = setInterval(function() {
            $('.right-button').click();
        }, 2000);
    });

    //用户板块轮播图
    // 克隆最后一条
    var user_ul = document.querySelector('.user-login-three-top ul');
    var user_ul_firstli = user_ul.children[0].cloneNode(true);
    user_ul.appendChild(user_ul_firstli);
    // 自动轮播
    var user_ul_num = 0;
    var user_ul_lunbo = function() {
        if (user_ul_num == user_ul.children.length - 1) {
            user_ul.style.top = 0;
            user_ul_num = 0;
        }
        user_ul_num++;
        $('.user-login-three-top ul').animate({
            top: -user_ul_num * ($('.user-login-three-top ul li').height()) + 'px',
        })
    };
    var user_ul_lunbo_timer = setInterval(function() {
        user_ul_lunbo();
    }, 2000);
    // 鼠标放入停止
    user_ul.addEventListener('mouseenter', function() {
        clearInterval(user_ul_lunbo_timer);
        user_ul_lunbo_timer = null; // 清除定时器变量
    });
    user_ul.addEventListener('mouseleave', function() {
        user_ul_lunbo_timer = setInterval(function() {
            user_ul_lunbo();
        }, 2000);
    });
});