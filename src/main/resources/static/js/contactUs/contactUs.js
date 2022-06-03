$(document).ready(function() {
    //휴대폰번호 정규식
    $("#reservation-tel").on("keyup",  function() {
        $(this).val(
            $(this).val()
                .replace(/[^0-9]/g, "")
                .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3")
                .replace("--", "-")
        );
    });

    $('input[type=submit]').on("click", function () {
        const name = $("#reservation-name").val();
        const age = $("#reservation-age").val();
        const tel = $("#reservation-tel").val();
        const address = $("#reservation-address").val();
        const personalInformation = $('input[name=agree01]:checked').val();
        const marketing = $('input[name=agree02]:checked').val();
        const templateParams = { name: name, age: age, tel: tel, address: address, personalInformation: personalInformation, marketing: marketing };

        //필수입력 사항이 null이면 알림 (필수항목 유효성 검사)
        if( name === "" ) {
            alert("성함을 입력해주세요.");
            $('html,body').animate({scrollTop:0},600);
            return false;
        } else if( age === "") {
            alert("나이를 선택해주세요.");
            $('html,body').animate({scrollTop:0},600);
            return false;
        } else if( tel === "" ) {
            alert("휴대폰번호를 입력해주세요.");
            $('html,body').animate({scrollTop:0},600);
            return false;
        } else if ( personalInformation === "N" ) {
            alert("개인정보의 수집 및 이용에 관한 동의를 해주세요.")
            $('html,body').animate({scrollTop:800},600);
            return false;
        } else {
            //필수항목들 다 입력했으면 메일을 보낸다.
            emailjs.init("QCZA8YWkSJYFNEDA7");

            emailjs.send('service_8zp6tpj', 'template_y0mpq4l', templateParams)
                //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
        }
    })
});