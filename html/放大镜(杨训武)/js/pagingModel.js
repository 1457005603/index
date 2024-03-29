getPage(1);
//翻页
function getPage(pn) {
    var dataCount = 50; //总数据条数
    var pageSize = 8; //每页显示条数
    var pageCount = Math.ceil(dataCount / pageSize); //总页数
    if (pn == 0 || pn > pageCount) {
        return;
    }
    var ul = $(".listul");
    ul.empty();
    //console.log(pageCount+"..."+pn)
    paintPage(pageCount, pn); //绘制页码
    var startPage = pageSize * (pn - 1);

    if (pageCount == 1) { // 当只有一页时 
        for (var j = 0; j < dataCount; j++) {
            var e = '<li><div class="user_photo"><p class="user_photoImg"><img src="./img/user.jpg"class="headimg"><i class="icon-vip"></i></p><p class="user_name">是个**人</p></div><div class="user_comment"><span class="star"></span></div><div class="timer">2019-05-07 15:48:24</div><div class="user-comment-word">一直用华为质量就不用说了，物流速度也很快。一天昨晚下单中午就到了。棒<p class="usershow"><img src="./img/show.jpg" alt="" class="showimg"></p></div></li>';
            ul.append(e);
        }
    } else { // 当超过一页时 
        var e = "";
        var endPage = pn < pageCount ? pageSize * pn : dataCount;
        for (var j = startPage; j < endPage; j++) {
            var e = '<li><div class="user_photo"><p class="user_photoImg"><img src="./img/user1.jpg "class="headimg"><i class="icon-vip"></i></p><p class="user_name">是个**人</p></div><div class="user_comment"><span class="star"></span></div><div class="timer">2019-05-07 15:48:24</div><div class="user-comment-word">用华为和荣耀的大佬们都会发大财的~~哈哈哈<p class="usershow"><img src="./img/show.jpg" alt="" class="showimg"></p></div></li>';
            ul.append(e);
        }
    }
}

//绘制页码
function paintPage(number, currNum) //number 总页数,currNum 当前页  
{
    var pageUl = $(".fenye");
    pageUl.empty();
    var ulDetail = "";

    if (number == 1) {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>" +
            "<li class=\"numb choose\"><a href=\"javascript:getPage(1)\">1</a></li>" +
            "<li class=\"next\"><a href=\"javascript:void(0)\">下一页</a></li>";
    } else if (number == 2) {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:getPage(1)\">上一页</a></li>" +
            "<li class=\"numb" + choosele(currNum, 1) + "\"><a href=\"javascript:getPage(1)\">1</a></li>" +
            "<li class=\"numb" + choosele(currNum, 2) + "\"><a href=\"javascript:getPage(2)\">2</a></li>" +
            "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
    } else if (number == 3) {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:getPage(" + parseInt(currNum - 1) + ")\">上一页</a></li>" +
            "<li class=\"numb" + choosele(currNum, 1) + "\"><a href=\"javascript:getPage(1)\">1</a></li>" +
            "<li class=\"numb" + choosele(currNum, 2) + "\"><a href=\"javascript:getPage(2)\">2</a></li>" +
            "<li class=\"numb" + choosele(currNum, 3) + "\"><a href=\"javascript:getPage(3)\">3</a></li>" +
            "<li class=\"next\"><a href=\"javascript:getPage(" + parseInt(currNum + 1) + ")\">下一页</a></li>";
    } else if (number == currNum && currNum > 3) {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:getPage(" + parseInt(currNum - 1) + ")\">上一页</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(" + parseInt(currNum - 2) + ")\">" + parseInt(currNum - 2) + "</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(" + parseInt(currNum - 1) + ")\">" + parseInt(currNum - 1) + "</a></li>" +
            "<li class=\"numb choose\"><a href=\"javascript:getPage(" + currNum + ")\">" + currNum + "</a></li>" +
            "<li class=\"next\"><a href=\"javascript:getPage(" + currNum + ")\">下一页</a></li>";
    } else if (currNum == 1 && number > 3) {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:void(0)\">上一页</a></li>" +
            "<li class=\"numb choose\"><a href=\"javascript:void(0)\">1</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(2)\">2</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(3)\">3</a></li>" +
            "<li class=\"next\"><a href=\"javascript:getPage(2)\">下一页</a></li>";
    } else {
        ulDetail = "<li class=\"prev\"><a href=\"javascript:getPage(" + parseInt(currNum - 1) + ")\">上一页</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(" + parseInt(currNum - 1) + ")\">" + parseInt(currNum - 1) + "</a></li>" +
            "<li class=\"numb choose\"><a href=\"javascript:getPage(" + currNum + ")\">" + currNum + "</a></li>" +
            "<li class=\"numb\"><a href=\"javascript:getPage(" + parseInt(currNum + 1) + ")\">" + parseInt(currNum + 1) + "</a></li>" +
            "<li class=\"next\"><a href=\"javascript:getPage(" + parseInt(currNum + 1) + ")\">下一页</a></li>";
    }

    $(".fenye").append(ulDetail);

}

function choosele(num, cur) {
    if (num == cur) {
        return " choose";
    } else {
        return "";
    }
}