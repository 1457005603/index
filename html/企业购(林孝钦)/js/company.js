window.addEventListener('load', function() {
    // 头部导航栏定位
    var dd = document.querySelector('.header-com')
    var zw = document.querySelector('.header-zw')
    var ddtop = dd.offsetTop;
    document.addEventListener('scroll', function() {
            if (window.pageYOffset >= ddtop) {
                dd.style.position = 'fixed';
                dd.style.top = 0;
                zw.style.display = 'block';
            } else {
                dd.style.position = 'relative';
                zw.style.display = 'none';
            }
        })
        // 头部导航栏定位结束

    $(function() {
        $('.layout-cate-gt').on('click', function() {
            $(this).css('color', '#f4f4f4');
            $(this).siblings().css('color', '#333');
        })
        $('.layout-cate-lt').on('click', function() {
            $(this).css('color', '#f4f4f4');
            $(this).siblings().css('color', '#333');
        })
    })

})