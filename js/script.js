
/*header*/
$(document).ready(function () {
    var jbOffset = $('#header').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 970) {//여기 지정된 길이 이후부터 적용됩니다
            $('#header').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('#header').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
});

/*header sub_gmb*/
$(function () {
    /*gnb>li에 마우스를 올렸을때 sub와 sub_bg가 슬라이드되어 내려온다.*/

    $("#gnb>li:nth-child(2), #gnb>li:nth-child(5)").mouseover(function () {
        $(this).children(".sub_box").stop().slideDown();
        $(this).children(".sub_bg").stop().slideDown();
    });
    /*header_inner에서 마우스가 나가면 sub와 sub_bg가 슬라이드되어 올라간다.*/
    $("#gnb>li:nth-child(2), #gnb>li:nth-child(5)").mouseleave(function () {
        $(this).children(".sub_box").stop().slideUp();
        $(this).children(".sub_bg").stop().slideUp();
    });
    $("#gnb>li").mouseover(function () {
        $("#header").addClass("bg_on");
    });
    // /*header_inner에서 마우스가 나가면 sub와 sub_bg가 슬라이드되어 올라간다.*/
    $("#header").mouseleave(function () {
        $("#header").removeClass("bg_on");
    });

});

/*shop_icon_heart*/
$(function () {
    $(".shop_icon_heart").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "../images/icon_heart.png");
        } else {
            $(this).attr("src", "../images/icon_heart_on.png");
        }
    });
});

/*top버튼*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {//아이콘이 나타나길 원하는 높이를 설정하세요
        $('.top').fadeIn();//나타날 아이콘 클래스 수정!
    } else {
        $('.top').fadeOut();//나타날 아이콘 클래스 수정!
    }
});

/*community faq */
$(function () {
    $(".faq> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
        $(this).siblings().children(".text_info").slideUp();
    });
});
$(function () {
    $(".faq> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
});
/*main_banner*/

var swiper = new Swiper(".mb", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000
});


/*best_seller*/
var swiper = new Swiper(".bs", {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    navigation: {
        nextEl: ".bs_next",
        prevEl: ".bs_prev",
    },
    breakpoints: {
        599: {
            slidesPerView: "auto",
            spaceBetween: 30,
        },
    },
});


/*best_seller icon_heart*/
$(function () {
    $(".icon_heart").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "./images/icon_heart.png");
        } else {
            $(this).attr("src", "./images/icon_heart_on.png");
        }
    });
});



/*product_slide*/
var swiper = new Swiper(".ps", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },

});

/*md_pick icon_heart*/
$(function () {
    $(".icon_heart_s").click(function () {
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(this).attr("src", "./images/icon_heart_s.png");
        } else {
            $(this).attr("src", "./images/icon_heart_s_on.png");
        }
    });
});



/*md_pick md_slide*/
var swiper = new Swiper(".md", {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        599: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
    },
});







