$(function() {
    // 商品列表
    let date = [
        { url: 'upload/HUAWEI Mate 10 Pro.png', name: 'HUAWEI Mate 10 Pro', price: 699, comment: 10000, type: 'Mate' },
        { url: 'upload/荣耀V10 移动4G.png', name: '荣耀V10 移动4G', price: 1088, comment: 87887, type: 'honer' },
        { url: 'upload/HUAWEI Mate 10.png', name: 'HUAWEI Mate 10', price: 499, comment: 999, type: 'Mate' },
        { url: 'upload/荣耀V10.png', name: '荣耀V10', price: 3299, comment: 8888, type: 'honer' },
        { url: 'upload/HUAWEI nova 3.png', name: 'HUAWEI nova 3', price: 2799, comment: 423, type: 'nova' },
        { url: 'upload/荣耀Play.png', name: '荣耀Play', price: 788, comment: 787866, type: 'honer' },
        { url: 'upload/HUAWEI nova 3i.png', name: 'HUAWEI nova 3i', price: 2199, comment: 666, type: 'nova' },
        { url: 'upload/荣耀10.png', name: '荣耀10', price: 1899, comment: 4545, type: 'honer' },
        { url: 'upload/HUAWEI Mate 20.png', name: 'HUAWEI Mate 20', price: 3499, comment: 311999, type: 'Mate' },
        { url: 'upload/HUAWEI Mate 20 X.png', name: 'HUAWEI Mate 20 X', price: 4499, comment: 31331999, type: 'Mate' },
        { url: 'upload/HUAWEI P20 Pro.png', name: 'HUAWEI P20 Pro', price: 3288, comment: 2222 },
        { url: 'upload/HUAWEI P20.png', name: 'HUAWEI P20', price: 2588, comment: 3656533 },
        { url: 'upload/荣耀9i.png', name: '荣耀9i', price: 1199, comment: 121212, type: 'honer' },
        { url: 'upload/HUAWEI nova 4e.png', name: 'HUAWEI nova 4e', price: 1999, comment: 3666, type: 'nova' },
        { url: 'upload/HUAWEI nova 4.png', name: 'HUAWEI nova 4', price: 2999, comment: 355666, type: 'nova' },
        { url: 'upload/荣耀10 移动4G.jpg', name: '荣耀10 移动4G', price: 2688, comment: 56565, type: 'honer' },
        { url: 'upload/荣耀畅玩7 移动4G.png', name: '荣耀畅玩7 移动4G', price: 988, comment: 3333, type: 'honer' },
        { url: 'upload/荣耀畅玩7.png', name: '荣耀畅玩7', price: 4188, comment: 66363, type: 'honer' },
    ];
    //创建一个新数组
    var newdate = [];
    var create_newarr = function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            newdate.push(date[i]);
        }
    };
    create_newarr();
    // 在页面上创建出商品的封装函数
    var create_list = function(arr) {
        let html = "";
        for (let { url, name, price, comment }
            of arr) {
            html += `
                    <div>
                    <img src = "${url}">
                    <i>${name}</i> 
                    <span class = "price">¥${price}</span> 
                    <span class = "buy">加入购物车</span> 
                    <span class = "comment">${comment}人给了好评</span> 
                    </div>
                    `
        };
        $('article').html(html);
    }
    create_list(date);

    // 点击价格就进行排序
    // 价格
    var flag = true;
    $('.box_b ul li:eq(0)').click(function() {
        var temp = [];
        if (flag) {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].price < newdate[j + 1].price) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -90px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag = false;
        } else {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].price > newdate[j + 1].price) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -110px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag = true;
        }
    });
    //评论
    var flag1 = true;
    $('.box_b ul li:eq(1)').click(function() {
        var temp = [];
        if (flag1) {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].comment < newdate[j + 1].comment) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -90px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag1 = false;
        } else {
            for (var i = 0; i <= newdate.length - 1; i++) {
                for (var j = 0; j < newdate.length - i - 1; j++) {
                    if (newdate[j].comment > newdate[j + 1].comment) {
                        temp = newdate[j];
                        newdate[j] = newdate[j + 1];
                        newdate[j + 1] = temp;
                    }
                }
            }
            $('article').empty();
            create_list(newdate);
            $(this).children('i').css('backgroundPosition', ' 0 -110px').parent().siblings().children('i').css('backgroundPosition', ' 0 -70px');
            flag1 = true;
        }
    });
    // 类型
    // 全部
    $('.box_f ul li:eq(0)').click(function() {
        create_newarr();
        $('article').empty();
        create_list(newdate);
    });

    //荣耀
    $('.box_f ul li:eq(1)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'honer') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // Mate
    $('.box_f ul li:eq(2)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'Mate') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // nova
    $('.box_f ul li:eq(3)').click(function() {
        newdate.splice(0);
        for (i = 0; i < date.length; i++) {
            var type = date[i].type;
            if (type == 'nova') {
                newdate.push(date[i]);
            }
        }
        create_list(newdate);
    });
    // 点击加入购物车按钮就弹出框
    $('article').on('click', "div .buy", function() {
        $('.buy-mask').show();
        $('.buy-pop-up').show();
    });
    $('.buy-pop-up-body').children().eq(0).click(function() {
        $('.buy-mask').hide();
        $('.buy-pop-up').hide();
    });


    //商品列表动画效果
    $('article').on('mouseenter', 'div', function() {
        $(this).children('.buy').stop().slideDown(300);
        $(this).children('.comment').stop().fadeOut(300);
    })

    $('article').on('mouseleave', 'div', function() {
        $(this).children('.buy').stop().slideUp(300);
        $(this).children('.comment').stop().fadeIn(300);

    })

    // 将选中的商品加入到本地缓存
    $('article').on('click', "div .buy", function() {
        var value = localStorage.getItem('shopCar');
        var arr;
        if (!value) {
            arr = [];
        } else {
            arr = JSON.parse(value);
        }
        arr.push(newdate[$(this).parent('div').index()]);
        localStorage.setItem('shopCar', JSON.stringify(arr));
    });
    // 先创建一个本地缓存回收站

    var create_recycle_bin = function() {
        var value = localStorage.getItem('recycle_bin');
        var arr1;
        if (!value) {
            arr1 = [];
        } else {
            arr1 = JSON.parse(value);
        }
        localStorage.setItem('recycle_bin', JSON.stringify(arr1));
    };
    create_recycle_bin();
})