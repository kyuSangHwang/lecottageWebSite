let mobileStatus = false;
let nowSearchData = "";

$(document).ready(function () {
    nowSearchData = location.search;

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

    let inquiryBodyContentP = $('.inquiryBodyContent P');
    let categoryBodyContent = $('.categoryBodyContent P');
    if(nowSearchData === "?lang=ko"){
        inquiryBodyContentP.css("font-size", "13px");
        inquiryBodyContentP.css("line-height", "19px");

        categoryBodyContent.css("font-size", "13px");
        categoryBodyContent.css("line-height", "19px");
    }else{
        inquiryBodyContentP.css("font-size", "14px");
        inquiryBodyContentP.css("line-height", "21px");

        categoryBodyContent.css("font-size", "13px");
        categoryBodyContent.css("line-height", "19px");
    }

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

(function($){

    $.fn.quickMenu = function(){
        return this.each(function(){
            let idx = 0;
            let h = [];
            let $wrap = $(this);
            let $menu = $wrap.find(".menu");
            let $btn = $menu.children("li").children("a");
            let $btnScrollTop = $wrap.find(".btn-scroll-top");
            let $section = $(".section");
            let wrapH = $wrap.outerHeight();
            let wrapT = $wrap.position().top;
            let nowScroll = 0;
            let scrolling = true;

            function btnActive(num){
                $btn.not($btn.eq(num)).removeClass("on");
                $btn.eq(num).addClass("on");
            }

            function moveScroll(num){
                if(scrolling){
                    scrolling = false;
                    $("html, body").animate({scrollTop : num}, function(){scrolling = true});
                }
            }

            btnActive(idx);

            $wrap.css({"margin-top": -(wrapH / 2)});

            $btn.on("click", function(e){
                e.preventDefault();
                idx = $(this).parent().index();
                let conT = $section.eq(idx).offset().top;

                moveScroll(conT);
            });

            $btnScrollTop.on("click", function(e){
                e.preventDefault();

                moveScroll(0);
            });

            $(window).scroll(function(){

                nowScroll = $(this).scrollTop();

                $section.each(function(idx){
                    h[idx] = $(this).offset().top

                    if(nowScroll >= h[idx]){
                        btnActive(idx);
                    }
                });
            });

        });
    }

})(jQuery);

$(function(){
    $(".box-shortcut").quickMenu();
});