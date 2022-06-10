
$(document).ready(function () {

    new Swiper(".mySwiper1", {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    new Swiper(".mySwiper2", {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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

    const cookiedata = document.cookie; //쿠키
    $(".btn-modal").hide(); //팝업창 버튼 숨기기

    if (cookiedata.indexOf("close=Y") < 0) { //누르지않았으면
        $(".btn-modal").trigger("click"); //강제로 띄우기
        $(".modal").show(); //모달창 띄우기
    } else {
        $(".modal").hide(); //모달창 숨기기
    }

    $(".btn-secondary").click(function () {
        couponClose();
    });

});

function setCookie(cname, cvalue, exdays) {
    let todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));

    let expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function couponClose(){
    if($("input[name='chkbox']").is(":checked") == true){
        setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
    }
    $(".modal").hide();
}