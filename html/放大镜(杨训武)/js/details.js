window.addEventListener('load', function() {
    //将每个li都加上红色边框，,移动到小图出现相应的大图，排他思想实现
    $(".smallmobilelun li").mouseenter(function() {
        $(this).addClass("current").siblings().removeClass("current");
        // console.log($(this).index());
        var index = $(this).index();
        $(".mainblow li").eq(index).css("display", "block").siblings().css("display", "none");
        $(".blow li").eq(index).css("display", "block").siblings().css("display", "none");
    });

    //点击按钮进行图片滑动
    var smallul = document.querySelector(".smallmobilelun").querySelector("ul");
    var btnl = document.querySelector(".btnl");
    var btnr = document.querySelector(".btnr");
    var smalllen = smallul.children.length - 5;
    // console.log(smalllen);
    var num = 0;

    //左按钮
    btnl.addEventListener("click", function() {
        $(".smallmobilelun li:first").removeClass("current");
        btnr.disabled = false;
        num++;
        smallul.style.left = -num * 64 + "px";
        if (num == smalllen) {
            btnl.disabled = true;
        }
    });
    //右按钮
    btnr.addEventListener("click", function() {
        $(".smallmobilelun li:last").removeClass("current");
        btnl.disabled = false;
        num -= 1;
        // console.log(num);
        smallul.style.left = -num * 64 + "px";
        // console.log(smallul.style.left);
        if (num == 0) {
            btnr.disabled = true;
        }
    });

    //实现放大镜框跟随鼠标移动和隐藏
    var glass = document.querySelector(".bigmobile").querySelector(".glass");
    var bigmobile = document.querySelector(".bigmobile")
    bigmobile.addEventListener("mousemove", function(e) {
        // 鼠标在盒子里的位置
        var mouseX = e.pageX - ($(".bigmobile").offset().left) - $(".glass").width() / 2;
        var mouseY = e.pageY - ($(".bigmobile").offset().top) - $(".glass").height() / 4;
        //遮罩最大的移动距离
        var maxMouX = bigmobile.offsetWidth - glass.offsetWidth;
        var maxMouY = bigmobile.offsetHeight - glass.offsetHeight;
        //遮罩的移动
        $(".glass").css({
            left: mouseX + "px",
            top: mouseY - 30 + "px"
        });
        //判断遮罩移动的边界
        if (mouseX <= 0) {
            $(".glass").css("left", 0);
        } else if (mouseX >= maxMouX) {
            glass.style.left = maxMouX + "px";
        }
        if (mouseY - 30 <= 0) {
            glass.style.top = 0 + "px";
        } else if (mouseY >= maxMouY) {
            glass.style.top = maxMouY + "px";
        }
        // 大图移动距离/大图最大移动距离 = 遮罩移动距离/遮罩最大移动距离
        var bigblowX = $(".blow li img").width() - $(".blow").width();
        var bigblowY = $(".blow li img").height() - $(".blow").height();

        var bigmoveX = bigblowX * mouseX / maxMouX;
        var bigmoveY = bigblowY * mouseY / maxMouY;

        $(".blow li").css({
            left: -bigmoveX + "px",
            top: -bigmoveY + "px"
        });
    });
    //鼠标的移入移出隐藏大图和遮罩
    bigmobile.addEventListener("mouseenter", function() {
        $(".blow").fadeIn(1000);
        $(".blow").css("display", "block");
        $(".glass").fadeIn(1000);
        glass.style.display = "block";
    });

    bigmobile.addEventListener("mouseleave", function() {
        $(".blow").css("display", "none")
        glass.style.display = "none";
    });

    //点击视频按钮显示视频
    $(".bigmobile .videoshow").click(function() {
        $(".video").css({
            display: "block"
        });
        $(".playvideo").css({
            display: "block"
        });
        $(".mobile .bigmobile .blow").css("z-index", "-100");
        $(".bigmobile .videoshow").hide();
        zymedia('video', {
            autoplay: true
        });
    });
    //点击叉叉就关闭视频
    $(".playvideo .closed").click(function() {
        $(".video").css("display", "none");
        // $(".mobile .bigmobile .blow").css();
        $(".bigmobile .videoshow").show();
        $(".playvideo").css({
            display: "none",
        });
        // location.reload();
        history.go(0)
    });
    //手机购买页面开始了~~
    //鼠标经过小箭头，出现完整的文字

    $(".mete_title").on({
        mouseover: function() {
            $(".mete_title").stop().animate({
                height: 106
            }, 500);
            $(".mete_title .slogan_btn").hide();
            $(".mete_title .ulogan_btn").show();

        },
        mouseout: function() {
            $(".mete_title").stop().animate({
                height: 85
            }, 500);
            $(".mete_title .slogan_btn").show();
            $(".mete_title .ulogan_btn").hide();
        }
    });
    //分期免息&&赠送积分模块，鼠标移入移出改变这两个模块的显示和隐藏
    $(".price_twoA").on({
        mouseover: function() {
            $(".four i").show();
            $(".five i").show();
            $(".five .unwind").hide();
            $(".five").css({
                left: 0,
                bottom: -20
            });
            $(".price").css("margin-bottom", "0px");
            $(".five em").css("margin-bottom", "12px");
            $(".four em").css("margin-bottom", "12px")
        },
        mouseout: function() {
            $(".four i").hide();
            $(".five i").hide();
            $(".five .unwind").show();
            $(".five").css({
                left: 70,
                bottom: 10,
            });
            $(".price").css("margin-bottom", "-25px");
            $(".five em").css("margin-bottom", "0px");
            $(".four em").css("margin-bottom", "0px")
        }
    });
    //友情提醒会慢一点的问号
    $(".tone").on({
        mousedown: function() {
            $(".planon").show();
        },
        mouseout: function() {
            $(".planon").hide();
        }
    });
    //不同颜色的手机选择
    $(".colorsele li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    //红色的手机
    $(".colorsele .sweetred").click(function() {
        $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（蜜语红·星耀版）");
        $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（蜜语红·星耀版）");
        $(".selected .seleOne").text("蜜语红/");
        $(".mete_title").css("height", "114px");
        //变换成红色的手机 下面是变展示的大图和放大镜里面的图
        var bigindex = $(".mainblow li").length;
        var imgsrc = ['', './img/mobile/red/dared1.png', "./img/mobile/red/dared2.jpg", './img/mobile/red/dared3.jpg', './img/mobile/red/dared4.jpg', './img/mobile/red/dared5.jpg', './img/mobile/red/dared6.jpg', './img/mobile/red/dared7.jpg'];
        for (var i = 0; i < bigindex; i++) {
            $(".mainblow li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
            $(".blow li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
        }
        //改变轮播图的小图手机
        var imgsrc = ['', './img/mobile/red/xiaored1.png', "./img/mobile/red/xiaored2.jpg", './img/mobile/red/xiaored3.jpg', './img/mobile/red/xiaored4.jpg', './img/mobile/red/xiaored5.jpg', './img/mobile/red/xiaored6.jpg', './img/mobile/red/xiaored7.jpg'];
        for (var i = 0; i < bigindex; i++) {
            $(".smallmobilelun li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
        }

        //保持文本下拉一样，不被标题影响
        $(".mete_title").on({
            mouseover: function() {
                $(".mete_title").stop().animate({
                    height: 130
                }, 500);
                $(".mete_title .slogan_btn").hide();
                $(".mete_title .ulogan_btn").show();

            },
            mouseout: function() {
                $(".mete_title").stop().animate({
                    height: 114
                }, 500);
                $(".mete_title .slogan_btn").show();
                $(".mete_title .ulogan_btn").hide();
            }
        });

        //4800万8+128挡位   
        $(".deploy li:nth-child(1)").click(function() {
                $(".mobilename").text("HUAWEI nova 4 4800万超广角三摄 8GB+128GB 全网通版（蜜语红·星耀版）");
                $(".mobtitle").text("HUAWEI nova 4 4800万超广角三摄 8GB+128GB 全网通版（蜜语红·星耀版）")
                $(".price_one span em").text("¥3099");
                $(".price_one del").text("¥3499");
                $(".selected .seleTwo").text(" 4800万超广角三摄 8GB+128GB/");
                $(".selected .seleThree").text("官方标配");
            })
            //2000万8+128档位
        $(".deploy li:nth-child(2)").click(function() {
                $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 8GB+128GB 全网通版（蜜语红·星耀版）");
                $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 8GB+128GB 全网通版（蜜语红·星耀版）")
                $(".price_one span em").text("¥2899");
                $(".price_one del").text("¥3199");
                $(".selected .seleTwo").text(" 2000万超广角三摄 8GB+128GB/");
                $(".selected .seleThree").text("官方标配");
            })
            //2000万6+128档位
        $(".deploy li:nth-child(3)").click(function() {
            $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（蜜语红·星耀版）");
            $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（蜜语红·星耀版）")
            $(".price_one span em").text("¥2699");
            $(".price_one del").text("¥2899");
            $(".selected .seleTwo").text(" 2000万超广角三摄 6GB+128GB/");
            $(".selected .seleThree").text("官方标配");
        })
    });
    //白色的手机
    $(".colorsele .caladiumbai").click(function() {
        $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（贝母白）");
        $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（贝母白）");
        $(".selected .seleOne").text("贝母白/");
        $(".mete_title").css("height", "85px");
        //保持文本展示向下滑动不被破坏
        $(".mete_title").on({
            mouseover: function() {
                $(".mete_title").stop().animate({
                    height: 106
                }, 500);
                $(".mete_title .slogan_btn").hide();
                $(".mete_title .ulogan_btn").show();

            },
            mouseout: function() {
                $(".mete_title").stop().animate({
                    height: 85
                }, 500);
                $(".mete_title .slogan_btn").show();
                $(".mete_title .ulogan_btn").hide();
            }
        });
        //配置要跟随手机的颜色来显示
        //4800万8+128挡位   
        $(".deploy li:nth-child(1)").click(function() {
                $(".mobilename").text("HUAWEI nova 4 4800万超广角三摄 8GB+128GB 全网通版（贝母白）");
                $(".mobtitle").text("HUAWEI nova 4 4800万超广角三摄 8GB+128GB 全网通版（贝母白）")
                $(".price_one span em").text("¥3099");
                $(".price_one del").text("¥3499");
                $(".selected .seleTwo").text(" 4800万超广角三摄 8GB+128GB/");
                $(".selected .seleThree").text("官方标配");
            })
            //2000万8+128档位 
        $(".deploy li:nth-child(2)").click(function() {
                $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 8GB+128GB 全网通版（贝母白）");
                $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 8GB+128GB 全网通版（贝母白）")
                $(".price_one span em").text("¥2899");
                $(".price_one del").text("¥3199");
                $(".selected .seleTwo").text(" 2000万超广角三摄 8GB+128GB/");
                $(".selected .seleThree").text("官方标配");
            })
            //2000万6+128档位 
        $(".deploy li:nth-child(3)").click(function() {
                $(".mobilename").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（贝母白）");
                $(".mobtitle").text("HUAWEI nova 4 2000万超广角三摄 6GB+128GB 全网通版（贝母白）")
                $(".price_one span em").text("¥2699");
                $(".price_one del").text("¥2899");
                $(".selected .seleTwo").text(" 2000万超广角三摄 6GB+128GB/");
                $(".selected .seleThree").text("官方标配");
            })
            //肯定要变回成白色的手机 下面是变展示的大图和放大镜里面的图
        var bigindex = $(".mainblow li").length;
        var imgsrc = ['', "./img/mobile/1.png", "./img/mobile/2.jpg", "./img/mobile/3.jpg", "./img/mobile/4.jpg", "./img/mobile/5.jpg", "./img/mobile/6.jpg", "./img/mobile/7.jpg"];
        for (var i = 0; i < bigindex; i++) {
            $(".mainblow li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
            $(".blow li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
        }
        //改变轮播图的小图手机
        var imgsrc = ['', './img/mobile/1_1s.png', "./img/mobile/2_2s.jpg", "./img/mobile/3_3s.jpg", "./img/mobile/4_4s.jpg", "./img/mobile/5_5s.jpg", "./img/mobile/6_6s.jpg", "./img/mobile/7_7s.jpg"];
        for (var i = 0; i < bigindex; i++) {
            $(".smallmobilelun li:nth-child(" + i + ")").html("<img src=" + imgsrc[i] + ">");
        }
    });
    //代码分界线
    //选择版本配置
    $(".deploy li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    });
    //多余的保障服务下拉框
    $(".guarantee .prolong").on("mouseover mouseout", function() {
        $(".guarantee .prolong").css({
            top: 1,
            borderBottom: "none",
        });
        $(".guarantee .downBox").removeClass("togglemob");
        $(".guarantee .prolong i").removeClass("icon-icon_arrow_down").addClass("icon-jiantou-copy-copy-copy");
    });
    $(".guarantee .downBox").mouseover(function() {
        $(".guarantee .prolong").css({
            top: 1,
            borderBottom: "none",
        });
        $(".guarantee .downBox").removeClass("togglemob");
        $(".guarantee .prolong i").removeClass("icon-icon_arrow_down").addClass("icon-jiantou-copy-copy-copy");
    });
    $(".guarantee .downBox").mouseout(function() {
        $(".guarantee .prolong").css({
            top: 0,
            borderBottom: "1px solid #ccc",
        });
        $(".guarantee .downBox").addClass("togglemob");
        $(".guarantee .prolong i").removeClass("icon-jiantou-copy-copy-copy").addClass("icon-icon_arrow_down ");
    });
    //多余的碎屏下拉框就不做了，我能做出一个就证明都可以做出来
    $(".guarantee .broken").mouseover(function() {
        $(".guarantee .broken").click(function() {
            $(".guarantee .broken").removeClass("current");
            $(".guarantee .broken").click(function() {
                $(".guarantee .broken").addClass("current");
            });
        });
    });
    //分期买手机，只有相信马爸爸(这一块就不做了，跳过)

    //添加数量下单了
    var numMob = $(".addnum .numShow").val()
    if (numMob < 1) {
        $(".addnum .numShow").val(1);
    }
    $(".addnum .addBtn").click(function() {
        if (numMob >= 20) {
            $(".settle .tishikuan").removeClass("togglemob");
        }
        //如果反省了取消链接跳转
        if (numMob >= 1) {
            $(".addnum .relBtn").html("-");
        }
        numMob++;
        $(".addnum .numShow").val(numMob);
    });

    $(".addnum .relBtn").click(function() {
        //了解一下中国法律
        if (numMob <= 1) {
            $(".addnum .relBtn").html('<a href="https://www.5law.cn/">-</a>');
            return 1;
        }
        numMob--;
        $(".addnum .numShow").val(numMob);
    });
    //手机展示页面跟随屏幕向下滑动一段距离
    $(window).scroll(function() {
        var scrolldistance = $(document).scrollTop();
        var scrollMax = $(".homepage .buy").outerHeight() - $(".homepage .slideMob").outerHeight();
        if (scrolldistance >= scrollMax) {
            $(".homepage .slideMob").css("top", scrollMax);
            return;
        }
        $(".homepage .slideMob").css("top", scrolldistance);
    });
});
///手机购买页面完成了，该换一个了写太多累