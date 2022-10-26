$(function () {
    //메인배너 슬라이드
    let banner = $('.banner');

    bannerSlide();
    function bannerSlide() {
        let currentIndex = 0;
        let bLength = banner.find('li').length;
        bannerFade = setInterval(function () {
            currentIndex++;
            if (currentIndex >= bLength) {
                currentIndex = 0;
            };
            $('.banner>li').stop().fadeOut(2000)
                .eq(currentIndex).stop().fadeIn(2000);
            $('.banner_text>div').stop().fadeOut(2000)
                .eq(currentIndex).stop().fadeIn(2000);
        }, 6000)
    }

    // 화면 resize시 배너의 hidden box 높이값 조절
    // let hidden = $('.w_banner_wrap');
    // hidden.height($('.w_banner>li>img').height())

    // let hidden2 = $('.program_wrap');
    // hidden2.height($('.program').height())

    // $(window).on('resize', function(){
    //     let wBanner = $('.w_banner').outerHeight();
    //     let pBanner = $('.program').outerHeight();
    //     hidden.css('height',wBanner);
    //     hidden2.css('height',pBanner);
    // })

    //검색 아이콘 클릭시 검색창 내려오기
    $('.search').click(function () {
        $('.search_wrap').stop().slideDown(500);
    });
    $('.search_close').click(function () {
        $('.search_wrap').stop().slideUp(500);
    });
    //ham버튼 클릭시 mnav 슬라이드 되기
    $('.hamBtn').click(function () {
        $('.mnav_wrap').animate({ left: 0 }, 600);
    });
    $('.mnav_top>.close').click(function () {
        $('.mnav_wrap').animate({ left: '100%' }, 600);
    });
    //mnav 클릭시 서브메뉴 슬라이드및 이미지 변경
    $('#mnav>li>a').click(function () {
        $(this).parent().find('.msub').stop().slideToggle(400);
        let up = 0;
        let i = $(this).index();
        if (up != i) {
            $(this).removeClass('up');
        }
        $(this).toggleClass('up');
        up = i;
    });
    $('.m_text').height($('.mnav_mid').height() - $('#mnav').height());

    new Swiper('.swiper1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView:1.5,
        breakpoints:{
            500:{
                slidesPerView:1.1
            },
            767:{
                slidesPerView:1.4
            },
            1400:{
                slidesPerView:1.2
            },
            1740:{
                slidesPerView:1.3
            },
        },
        loop:false,
        spaceBetween : 20,
    })
    new Swiper('.swiper2',{
        spaceBetween : 20,
        breakpoints:{
            767:{
                slidesPerView:1.3
            },
            1024:{
                slidesPerView:2,
                allowTouchMove:true
            },
            3000:{
                slidesPerView:3,
                allowTouchMove:false
            },
        }
    })
});