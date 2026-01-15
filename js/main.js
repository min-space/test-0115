
$(document).ready(function(){

    AOS.init();

});


$(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
});


// 검색영역
$(".search").hide();
$(".btn_sch").click(function () {
    $(this).toggleClass("active");
    $(".search").fadeToggle();
    $(".search input[type=text]").focus();
});


$(".ham").click(function () {
    $(".mgnb_wrap").animate({
        left: '0'
    });
});

$(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
        left: '100%'
    });
});

//모바일 2차메뉴
$(".mdepth2").hide();

$(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
});


// 배너 슬라이드
const banner_list = new Swiper(".banner_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    loop: true,
});


// 상품 슬라이드
const prd_list = new Swiper(".prd_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1.5,
    breakpoints: {
        576: {
            // 가로해상도가 768px 이상일 경우
            slidesPerView: 2.5,
        },
        1200: {
            // 가로해상도가 1024px 이상일 경우
            slidesPerView: 4.5,
        },
    },
});



