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

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    const filter = "win16|win32|win64|mac|macintel";
    const webType = "";
    const header = $(".header");

    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            //mobile
            mobileStatus = true;
            header.remove();
            
            $('body').prepend("<div class='sidebarWrap'></div>");
            $(".sidebarWrap").load("/mobile/sideBar");

            $(function () {
                $.getScript("/js/fragments/mobileSideBar.js", function (data, textStatus, jqxhr) {
                    console.log(data); // Data returned
                    console.log(textStatus); // Success
                    console.log(jqxhr.status); // 200
                    console.log("Load was performed.");
                });
            });
        }
    }

});