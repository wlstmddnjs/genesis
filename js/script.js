$(document).ready(function(){
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);
        if(sct >= 200){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }

        if(sct >= 1800){
            $('.des-1').addClass('active');
        }else{}

        if(sct >= 2700){
            $('.des-2').addClass('active');
        }else{}

        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });



    $('.btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        const result = $(this).attr('data-alt');

        $('.tabs div').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    let btn = $('.top-btn');
    
    btn.click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    $('#hamburger').click(function(){
        $('.m-main_menu').toggleClass('active');
    })
});