
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

    let lastScroll1 = 0;
    $(window).scroll(function(event){
        let scroll = $(this).scrollTop();
        if (scroll > 1100){
            $(".quick_wrap").addClass("active");
        }
        else {
            $(".quick_wrap").removeClass("active");
        }
        lastScroll1 = scroll;
    });

    quickNaviInit();

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