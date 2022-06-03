
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

});