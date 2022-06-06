$(document).ready(function () {
    //카카오맵 api 왼쪽
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.470758, 127.594064), //지도의 중심좌표.
        level: 6 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도에 마커를 생성하고 표시한다
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.46191, 127.59366), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });

    // 마커 위에 표시할 인포윈도우를 생성한다
    var infowindow = new kakao.maps.InfoWindow({
        content : '<div class="info-title">사업예정지</div>' // 인포윈도우에 표시할 내용
    });

    // 인포윈도우를 지도에 표시한다
    infowindow.open(map, marker);

    var infoTitle = document.querySelectorAll('.info-title');
    infoTitle.forEach(function(e) {
        var w = e.offsetWidth + 10;
        var ml = w/2;
        // e.parentElement.style.top = "0px";
        e.parentElement.style.left = "50%";
        e.parentElement.style.marginLeft = -ml+"px";
        e.parentElement.style.width = w+"px";
        e.parentElement.previousSibling.style.display = "none";
        e.parentElement.parentElement.style.border = "0px";
        e.parentElement.parentElement.style.background = "unset";
    });

    //카카오맵 api 오른쪽
    var container = document.getElementById('map2'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.475834, 127.045323), //지도의 중심좌표.
        level: 4 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도에 마커를 생성하고 표시한다
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.475834, 127.045323), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });

    // 마커 위에 표시할 인포윈도우를 생성한다
    var infowindow = new kakao.maps.InfoWindow({
        content : '<div class="info-title">르코테지, LeCottage</div>' // 인포윈도우에 표시할 내용
    });

    // 인포윈도우를 지도에 표시한다
    infowindow.open(map, marker);

    var infoTitle = document.querySelectorAll('.info-title');
    infoTitle.forEach(function(e) {
        var w = e.offsetWidth + 10;
        var ml = w/2;
        // e.parentElement.style.top = "0px";
        e.parentElement.style.left = "50%";
        e.parentElement.style.marginLeft = -ml+"px";
        e.parentElement.style.width = w+"px";
        e.parentElement.previousSibling.style.display = "none";
        e.parentElement.parentElement.style.border = "0px";
        e.parentElement.parentElement.style.background = "unset";
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
})