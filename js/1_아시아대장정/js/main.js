// 2차메뉴
$(".depth2").hide();

$(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
});


const mv = new Swiper('.mv', {
    autoplay: {
        delay: 3000, // 2.5초
        disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
    },
    loop: true, // 반복여부
    speed: 1000, // 슬라이드넘어가는 속도 ms
    navigation: {
        nextEl: ".swiper-button-next", //다음버튼
        prevEl: ".swiper-button-prev", //이전버튼
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets", //버튼 종류 설정 'bullets' ㅣ 'fraction' ㅣ 'progressbar'
        clickable: true, // 버튼 클릭 여부

    },

});

//popup
$(".popup").hide();
$(".play").click(function () {
    $(".popup").fadeIn();
    $("body").css({ "overflow": "hidden" }); // 동영상 클릭했을 때 화면에 스크롤바 생성X
});

$(".close").click(function () {
    $(".popup").fadeOut();
    $("body").css({ "overflow": "auto" }); // 동영상 닫았을 때 스크롤바 생성
});

const notice = new Swiper('.notice', {
    autoplay: {
        delay: 3000, // 2.5초
        disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
    },
    loop: true, // 반복여부
    speed: 1000, // 슬라이드넘어가는 속도 ms
    direction: "vertical", // 수직 슬라이드 높이값 지정해줘야함
});

const sns_list = new Swiper('.sns_list', {
    autoplay: {
        delay: 2500, // 2.5초
        disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
    },
    loop: true, // 반복여부
    speed: 1000, // 슬라이드넘어가는 속도 ms
    slidesPerView: 3.5, //화면에 보이는 슬라이드 갯수
    spaceBetween: 40,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true, // 드래그 했을 때 나타남
        dragSize: 200, // 드래그 사이즈
    },
});

const member_list = new Swiper('.member_list', {
    autoplay: {
        delay: 2500, // 2.5초
        disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
    },
    loop: true, // 반복여부
    speed: 1000, // 슬라이드넘어가는 속도 ms
    effect: "fade",
    fadeEffect: {
        crossFade: true, // 사진이 겹쳐지지 않음
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets", //버튼 종류 설정 'bullets' ㅣ 'fraction' ㅣ 'progressbar'
        clickable: true, // 버튼 클릭 여부
    },
});