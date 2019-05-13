window.addEventListener('load', function() {
    var topBanner = document.querySelector('.top-banner-img');
    var topBanner_close = topBanner.querySelector('span');

    topBanner_close.addEventListener('click', function() {
            topBanner.style.display = 'none';
        })
        // 轮播图
    var focus = document.querySelector('.hot-board div.w');
    var lunbotu = document.querySelector('.lunbotu');
    var focus_circle = document.querySelector('.focus-circle');
    var lunbotu_lis = document.querySelectorAll('.lunbotu li');
    var lunbotu_lis_width = lunbotu_lis[0].offsetWidth;
    var right_button = document.querySelector('.right-button');
    var left_button = document.querySelector('.left-button');

    focus.addEventListener('mouseenter', function() {
        clearInterval(scroll);
    })
    focus.addEventListener('mouseleave', function() {
        scroll = setInterval(function() {
            right_button.click();
        }, 2000)
    })

    for (i = 0; i < lunbotu_lis.length; i++) {
        var focus_circles = document.createElement('li');
        focus_circles.setAttribute('index', i);
        focus_circle.appendChild(focus_circles);
    }
    var focus_circles = focus_circle.children;
    focus_circles[0].className = 'focus-circle-current';

    for (i = 0; i < focus_circles.length; i++) {
        focus_circles[i].addEventListener('mouseenter', function() {
            for (i = 0; i < focus_circles.length; i++) {
                focus_circles[i].className = '';
            }
            this.className = 'focus-circle-current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(lunbotu, -index * lunbotu_lis_width);
        })
    }

    var lunbotu_firstli = lunbotu_lis[0].cloneNode(true);
    lunbotu.appendChild(lunbotu_firstli);
    // console.log(lunbotu.children.length);

    var num = 0;
    var circle = 0;
    var flag = true;
    right_button.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == lunbotu.children.length - 1) {
                lunbotu.style.left = 0;
                num = 0;
            }
            num++;
            animate(lunbotu, -num * lunbotu_lis_width, function() {
                flag = true;
            });
            for (i = 0; i < focus_circle.children.length; i++) {
                focus_circle.children[i].className = '';
            }
            circle++;
            if (circle == focus_circle.children.length) {
                circle = 0;
            }
            focus_circle.children[circle].className = 'focus-circle-current';
        }
    })

    left_button.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (num == 0) {
                    lunbotu.style.left = '-' + focus_circle.children.length * lunbotu_lis_width + 'px';
                    num = focus_circle.children.length;
                }
                num--;
                animate(lunbotu, -num * lunbotu_lis_width, function() {
                    flag = true;
                });

                for (i = 0; i < focus_circle.children.length; i++) {
                    focus_circle.children[i].className = '';
                }
                circle--;
                if (circle < 0) {
                    circle = focus_circle.children.length - 1;
                }
                focus_circle.children[circle].className = 'focus-circle-current';
            }
        })
        // console.log(focus_circle.children.length);


    var scroll = setInterval(function() {
        right_button.click();
    }, 2000)

});