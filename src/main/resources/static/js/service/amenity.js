$(document).ready(function () {

    new Swiper(".mySwiper", {
        loop: true, //무한루프일때, true
        keyboard: { //키보드로 슬라이드
            enabled: true,
        },
        navigation: { //네이게이션 버튼 관련 자바스크립트
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});