 $(function() {


     // 轮播图按钮
     $('.fled').mouseover(function() {
         $('.fled-l').stop().animate({
             left: '40px'
         })
     })
     $('.fled').mouseout(function() {
         $('.fled-l').stop().animate({
             left: '-20px'
         })
     })
     $('.fred').mouseover(function() {
         $('.fred-l').stop().animate({
             right: '40px'
         })
     })
     $('.fred').mouseout(function() {
             $('.fred-l').stop().animate({
                 right: '-20px'
             })
         })
         // 轮播图按钮结束

     // 动态创建按钮
     $('.focus ul li ').each(function(i, ele) {
             var li = $("<li></li>");
             $('.focus-btn').append(li);
         })
         // 先只把第一张图片显示出来，其他的隐藏
     $('.focus ul li').hide();
     $('.focus ul li').eq(0).show();
     $('.focus-btn li:first').addClass('focus-btn-current');
     // 点击小圆圈时图片发生改变
     $('.focus-btn li').mouseenter(function() {
         var index = $(this).index();
         $('.focus-btn li').removeClass('focus-btn-current');
         $(this).addClass('focus-btn-current');
         $('.focus ul li').fadeOut();
         $('.focus ul li').eq(index).fadeIn();
         focus_num = index;
     })
     var focus_num = 0;

     // 右按钮
     $('.fred-l').click(function() {
         if (focus_num == $('.focus ul li:last').index()) {
             focus_num = -1;
         }
         focus_num++;
         $('.focus-btn li').removeClass('focus-btn-current');
         $('.focus-btn li').eq(focus_num).addClass('focus-btn-current');
         $('.focus ul li').stop().fadeOut();
         $('.focus ul li').eq(focus_num).stop().fadeIn();
     });
     // 左按钮
     $('.fled-l').click(function() {
         if (focus_num == $('.focus ul li:first').index()) {
             focus_num = 3;
         }
         focus_num--;
         $('.focus-btn li').removeClass('focus-btn-current');
         $('.focus-btn li').eq(focus_num).addClass('focus-btn-current');
         $('.focus ul li').stop().fadeOut();
         $('.focus ul li').eq(focus_num).stop().fadeIn();
     });

     // 自动轮播
     var focus_timer = setInterval(function() {
         $('.fred-l').click();
     }, 3000);
     // 鼠标放入就停止
     var lp = document.querySelector('.lp');
     lp.addEventListener('mouseenter', function() {
         clearInterval(focus_timer);
         focus_timer = null; // 清除定时器变量
     });
     lp.addEventListener('mouseleave', function() {
         focus_timer = setInterval(function() {
             $('.fred-l').click();
         }, 3000);
     });
 })