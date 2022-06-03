$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {

        //무한루프일때, true
        loop: true,
        //키보드로 슬라이드
        keyboard: {
            enabled: true,
        },
        //네이게이션 버튼 관련 자바스크립트
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        //
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
})