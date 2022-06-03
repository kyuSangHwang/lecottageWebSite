
let prevScrollTop = 0;
let nowScrollTop = 0;

$(document).ready(function () {

    $(window).on('load', function(){

        let pageName = document.location.pathname.includes('contactUs');

        if (pageName) {
            $(".header").css('color', 'Black');
        }

    });

    $(window).on('scroll', function(){
        nowScrollTop = $(this).scrollTop();
        let upDownLocation = prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';

        if (!!nowScrollTop) {
            if(upDownLocation === 'down'){
                $('.header').addClass('on');
            }
            if(upDownLocation === 'up'){
                $('.header').removeClass('on');
            }
        }
        prevScrollTop = nowScrollTop;
    });

});

function mainHome() {
    locationSearch();
    location.href = "/" + locationSearch();
}

function businessInfo() {
    locationSearch();
    location.href = "/businessInfo" + locationSearch();
}

function directions() {
    locationSearch();
    location.href = "/directions" + locationSearch();
}

function unit() {
    locationSearch();
    location.href = "/unit" + locationSearch();
}

function amenity() {
    locationSearch();
    location.href = "/amenity" + locationSearch();
}

function concierge() {
    locationSearch();
    location.href = "/concierge" + locationSearch();
}

function premiumInfra() {
    locationSearch();
    location.href = "/premiumInfra" + locationSearch();
}

function plan() {
    locationSearch();
    location.href = "/plan" + locationSearch();
}

function contactUs() {
    locationSearch();
    location.href = "/contactUs" + locationSearch();
}

function locationSearch() {
    return  location.search;
}

