let sideBarStatus = true;
let subMenuStatus = [true, true, true, true];
let menuFirstColor;

$(document).ready(function () {

    $('#menu').on('click', function (e) {
        sidebar();
    });

    $('.menuContent').on('click', function (e) {
        subMenu($(this));
    });

});

function sidebar() {
    const sideBar = $('.sidebar');
    const menu =  $('#menu');
    const languageSelectContainer = $('.languageSelectContainer');
    const sideBarContentContainer = $('.sideBarContentContainer');
    const sideBarLogo = $('.sideBarLogo');
    if(sideBarStatus){
        menuFirstColor = menu.css("color");
        menu.css("color", "black");
        sideBar.css("width", "100vw");
        sideBar.css("background-color", "white");
        setTimeout(function () {
            languageSelectContainer.css("opacity", "1");
            sideBarContentContainer.css("opacity", "1");
            languageSelectContainer.css("display", "block");
            sideBarContentContainer.css("display", "block");
            sideBarLogo.css("opacity", "1");
            sideBarLogo.css("display", "block");
            menu.removeClass();
            menu.addClass("fas fa-times");
            sideBarStatus = false;
        }, 300)
    }else{
        menu.css("color", menuFirstColor);
        sideBar.css("width", "50px");
        sideBar.css("background-color", "rgba(0,0,0,0)");
        setTimeout(function () {
            languageSelectContainer.css("opacity", "0");
            sideBarContentContainer.css("opacity", "0");
            languageSelectContainer.css("display", "none");
            sideBarContentContainer.css("display", "none");
            sideBarLogo.css("opacity", "0");
            sideBarLogo.css("display", "none");
            menu.removeClass();
            menu.addClass("fas fa-bars");
            sideBarStatus = true;
        },300)
    }
}

function subMenu(nowContent) {
    let subMenuBox = nowContent.children('div.subMenuBox');
    let suMenuBoxIcon = nowContent.children('i');

    let nowContentName = nowContent.attr('name');

    let allSubMenuBox = $('.subMenuBox');
    let allSuMenuBoxIcon = $('.menuContent > i');
    allSubMenuBox.css("height", "0");
    allSuMenuBoxIcon.removeClass();
    allSuMenuBoxIcon.addClass('fas fa-plus');
    allSuMenuBoxIcon.css("color", "#666666");

    if(nowContentName === "company"){
        if(subMenuStatus[0]){
            subMenuBox.css("height", "150px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[0] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[0] = true;
        }
        subMenuStatusReset(0);

    }else if(nowContentName === "unit"){
        if(subMenuStatus[1]){
            subMenuBox.css("height", "200px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[1] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[1] = true;
        }
        subMenuStatusReset(1);

    }else if(nowContentName === "service"){
        if(subMenuStatus[2]){
            subMenuBox.css("height", "200px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[2] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[2] = true;
        }
        subMenuStatusReset(2);

    }else if(nowContentName === "plan"){
        if(subMenuStatus[3]){
            subMenuBox.css("height", "250px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[3] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[3] = true;
        }
        subMenuStatusReset(3);
    }else if(nowContentName === "contactUs"){
        if(subMenuStatus[4]){
            subMenuBox.css("height", "100px");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-minus');
            suMenuBoxIcon.css("color", "red");
            subMenuStatus[4] = false;
        }else{
            subMenuBox.css("height", "0");
            suMenuBoxIcon.removeClass();
            suMenuBoxIcon.addClass('fas fa-plus');
            suMenuBoxIcon.css("color", "#666666");
            subMenuStatus[4] = true;
        }
        subMenuStatusReset(4);
    }
}


function subMenuStatusReset(nowVal) {
    for(let i = 0; i<5; i++){
        if(i !== nowVal) {
            subMenuStatus[i] = true;
        }
    }
}


