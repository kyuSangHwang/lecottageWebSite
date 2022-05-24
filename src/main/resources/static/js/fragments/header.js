let mobileStatusHeader = false;
let nowPath = "";

let prevScrollTop = 0;
let nowScrollTop = 0;

$(document).ready(function () {

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

function headerManager() {
    const $header = $('.header');
    const $headerLogo = $('.js-header-container__company-logo');
    let pathName = location.pathname;

    if (pathName != "/") {
        $header.css('position', 'absolute');

    } else {
        $header.css('position', 'fixed');
        $header.css('color', 'white');
        $header.css('background-color', 'rgba(0,0,0,0)');
        $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidthWhite.png")');

    }
}

function mainHeaderManager(index) {
    if (mobileStatusHeader) {
        const menu = $('#menu');
        if (index > 0) {
            menu.css("color", "black");
        } else {
            menu.css("color", "white");
        }
    } else {
        const $header = $('.header');
        const $headerLogo = $('.js-header-container__company-logo');
        console.log(index);

        if (index > 0) {
            $header.css('color', 'black');
            $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidth.png")');
        } else {
            $header.css('color', 'white');
            $header.css('background-color', 'rgba(0,0,0,0)');
            $headerLogo.css('background-image', 'url("/images/headerFooter/logoFullWidthWhite.png")');
        }
    }
}

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

