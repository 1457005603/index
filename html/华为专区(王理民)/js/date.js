$(function() {
    $(".Boutique-lunbo li").mouseenter(function() {
        $(this).find(".box-wlm").animate({
            left: 0

        });
    });
    $(".Boutique-lunbo li").mouseleave(function() {
        $(this).find(".box-wlm").animate({
            left: -213

        });
    });



    $(".Boutique-lunbo-right").click(function() {
        var max1 = $(this).siblings(".Boutique-lunbo").children("li");
        var set1 = max1.outerWidth() * max1.length;
        // console.log(set);
        var box1 = -(set1 - 1200) + "px";
        // console.log(box1);
        $(this).siblings(".Boutique-lunbo").css({
            "transform": 'translateX(  ' + box1 + ')'
        })
    })
    $(".Boutique-lunbo-left").click(function() {
        // var max = $(this).parent().children().eq(0).children("li");
        // var set = max.outerWidth() * max.length;
        // // console.log(set);
        // var box = set - 1200 + 'px';
        // console.log(box);
        $(this).siblings(".Boutique-lunbo").css({
            "transform": 'translateX(' + 0 + ')'
        })
    })

});
// var Boutiquelunbo = document.querySelector(".Boutique-lunbo");
// // var Boutiquexh = document.querySelector(".Boutique-xh");
// var left = document.querySelector(".Boutique-lunbo-left")
// var right = document.querySelector(".Boutique-lunbo-right")
// var pink = document.querySelectorAll(".Boutique-lunbo li");

// var max = Boutiquelunbo.offsetWidth;
// // var set = Boutiquexh.offsetWidth;
// left.onclick = function() {
//     var pink1 = this.parentNode.firstChild.children();
//     console.log(pink1);

//     for (var i = 0; i < pink1.length; i++) {
//         var sum = pink[i].offsetWidth;
//     }
//     var ren = sum * pink.length;
//     console.log(sum);
//     console.log(ren);
//     // $(".Boutique-lun
// }