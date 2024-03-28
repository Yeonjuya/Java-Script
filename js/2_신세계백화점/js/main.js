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
        type: "fraction", //버튼 종류 설정 'bullets' ㅣ 'fraction' ㅣ 'progressbar'
        clickable: true, // 버튼 클릭 여부

    },

});

const event_list = new Swiper('.event_list', {
    autoplay: {
        delay: 2500, // 2.5초
        disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
    },
    loop: true, // 반복여부
    speed: 1000, // 슬라이드넘어가는 속도 ms
    slidesPerView: 3.5, //화면에 보이는 슬라이드 갯수
    spaceBetween: 20,
});
