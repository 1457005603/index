$(function() {
    //注册方式切换
    $(".telLogon").click(function() {
        $(this).css("backgroundColor", "rgba(180,7,7)").siblings(".emailLogon").css("backgroundColor", "rgba(204,204,204)");
    });
    $(".emailLogon").click(function() {
        $(this).css("backgroundColor", "rgba(180,7,7)").siblings(".telLogon").css("backgroundColor", "rgba(204,204,204)");
    });
    //校验手机号
    $(".telinput").blur(function() {
        var telverify = document.querySelector(".telinput").value;
        if ((/^1[34578]\d{9}$/.test(telverify))) {
            $(".tureTel").show();
            $(".errorTel").hide();
        } else if (telverify == "") {
            $(".tureTel").hide();
            $(".errorTel").hide();
        } else {
            $(".errorTel").show();
            $(".tureTel").hide();
        }
    });
    //滑动验证模块
    $(".inner").mousedown(function(e) {
            var el = $(".inner"),
                os = el.offset(),
                dx, $span = $(".outer>span"),
                $filter = $(".filter-box"),
                _differ = $(".outer").width() - el.width();
            $(document).mousemove(function(e) {
                dx = e.pageX - os.left;
                if (dx < 0) {
                    dx = 0;
                } else if (dx > _differ) {
                    dx = _differ;
                }
                $filter.css('width', dx);
                el.css("left", dx);
            });
            $(document).mouseup(function(e) {
                $(document).off('mousemove');
                $(document).off('mouseup');
                dx = e.pageX - os.left;
                if (dx < _differ) {
                    dx = 0;
                    $span.html("滑动验证");
                } else if (dx >= _differ) {
                    dx = _differ;
                    $(".outer").addClass("act");
                    $span.html("验证通过！");
                    el.html('<img src="./upload/正确.png">');
                    $(".inner").css({
                        "z-index": 0,
                        "backgroundColor": "rgb(225,233,220)"
                    });
                    $(" .sliderCheck").css("backgroundColor", "rgb(225,233,220)")
                }
                $filter.css('width', dx);
                el.css("left", dx);

            })
        })
        //获取短信验证码
    $(".reacquirecode").click(function() {
        $(".oneCode").css("display", "none");
        $(".threeCode").hide();
        $(".twoCode").show();
        var i = 59;
        $(".twoCode").text(60 + "s");
        var countdown = setInterval(function() {
            $(".twoCode").text(i + "s");
            i--;
            if (i < 0) {
                $(".threeCode").show();
                clearInterval(countdown);
                $(".twoCode").hide();
            }
        }, 900);
    });
    //输入密码
    $('#passwordField').passwordRulesValidator({
        'msgRules': '',
        'rules': {
            'length': {
                'regex': '.{8,}',
                'name': 'length',
                'message': '密码必须大于8个字符',
                'enable': true
            },
            'lowercase': {
                'regex': '[a-z]{1,}',
                'name': 'lowercase',
                'message': '至少需要一个小写字母',
                'enable': true
            },
            'uppercase': {
                'regex': '[A-Z]{1,}',
                'name': 'uppercase',
                'message': '至少需要一个大写字母',
                'enable': true
            },
            'number': {
                'regex': '[0-9]{1,}',
                'name': 'number',
                'message': '至少需要一个数字',
                'enable': true
            },
            'specialChar': {
                'regex': '[^a-zA-Z0-9]{1,}',
                'name': 'special-char',
                'message': '至少需要一个特殊字符',
                'enable': true
            }
        }
    });
    $(".onepass").focus(function() {
        $(".rules-list").show();
        $(".nullpass").hide();
    })
    $(".onepass").blur(function() {
        $(".rules-list").hide();
        $(".nullpass").hide();
    })
    $(".twopass").focus(function() {

            $(".nullpass").hide();
        })
        // 密码验证开始 
    $(".onepass ").blur(function() {
        var onepassval = $(this).val();
        $(".twopass").blur(function() {
            var twopassval = $(this).val();
            if (onepassval === twopassval && onepassval !== "") {
                $(".turepass").show();
                $(".errorpass").hide();
                $(".nullpass").hide();
            } else if (twopassval === "" || onepassval === '') {
                $(".turepass").hide();
                $(".errorpass").hide();
                $(".nullpass").show();
            } else if (twopassval === "" && onepassval === '') {
                $(".turepass").hide();
                $(".errorpass").hide();
                $(".nullpass").hide();
            } else {
                $(".turepass").hide();
                $(".errorpass").show();
                $(".nullpass").hide();
            }
        });

    });

    let nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    this.datetime = year + "-" + month + "-" + day;
    $(".datechoose").html(this.datetime);

});