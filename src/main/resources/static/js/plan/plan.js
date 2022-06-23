
$(document).ready(function () {

    const secondContentImage = $(".js-plan-container__content-wrapper__summary-box__second-content__box__img");
    const planExplanationPart = document.querySelectorAll('.js-plan-explanation-part');

    planExplanationPart.forEach( (planExplanationPart) => {
        planExplanationPart.addEventListener('mouseover', (event) => {
            let planExplanationPartId = event.target.getAttribute('id');
            let partNumber = planExplanationPartId.substr(-1);
            let backURL = '../../images/plan/planPart' + partNumber + '/' + planExplanationPartId + '.jpg';

            secondContentImage.css({'background-image': 'url(' + backURL + ')'});
            secondContentImage.css({'transition': 'all ease-in 0.5s'});
        });

        planExplanationPart.addEventListener('mouseout', (event) => {
            secondContentImage.css({'background-image': 'url(../../images/main/main.jpg)'});
            secondContentImage.css({'transition': 'all ease-in 0.5s'});
        });
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

    let lastScroll2 = 0;
    $(window).scroll(function(event){
        let scroll = $(this).scrollTop();
        if (scroll > 1100){
            $(".quick_wrap").addClass("active");
        }
        else {
            $(".quick_wrap").removeClass("active");
        }
        lastScroll2 = scroll;
    });

    quickNaviInit();

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

function quickNaviInit(){
    let controller = new ScrollMagic.Controller();
    let quick = document.querySelectorAll('.quick_wrap');
    if(quick.length === 0){
        return
    }
    if(quick.length > 1){
        return;
    }
    quick = quick[0];
    let quickMenus = quick.querySelectorAll('li')

    let listMenu = [];
    for(let i = 0; i < quickMenus.length; i++){
        if(quickMenus[i].querySelector('a') === undefined){
            break;
        }
        if(quickMenus[i].querySelector('a').href.split('#')[1] === undefined){
            break;
        }

        quickMenus[i].querySelector('a').addEventListener('click',function(eve){
            eve.preventDefault();
            $('html').animate({scrollTop:$(this.hash.replace('#','#')).offset().top - 100}, 600, function(){

            });
        })

        listMenu.push({
            listTarget:quickMenus[i].querySelector('a'),
            listName:quickMenus[i].querySelector('a').innerText,
            listAnchor:quickMenus[i].querySelector('a').href.split('#')[1]
        });
    }
    for(let i = 0; i < listMenu.length; i++){
        if(document.querySelector('#' + listMenu[i].listAnchor) === undefined){
            break;
        }
        new ScrollMagic.Scene({
            triggerElement: '#' + listMenu[i].listAnchor,
            duration: document.querySelector('#' + listMenu[i].listAnchor).offsetHeight
        }).addTo(controller).setClassToggle(listMenu[i].listTarget.parentElement, 'on')
    }
}