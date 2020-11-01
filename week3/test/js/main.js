
$(document).ready(function(){
    console.log('ok');

    $('.js-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},700,'swing');
    })
    let posY;
    $(document).scroll(function() {
        posY = $('html').scrollTop();
        if(posY >= 4500){return $('.js-to-top').addClass('active');}
        else {return $('.js-to-top').removeClass('active');}
    })
    
})


