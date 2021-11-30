jQuery(document).ready(function(){
    $('.nav > li').mouseover(function(){
        $(this).find('.nav-in').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.nav-in').stop().slideUp(500);
    });
    
    $('.image_slide span:gt(0)').hide();
    setInterval(function(){
        $('.image_slide span:first-child').fadeOut('slow')
        .next('span').fadeIn('slow')
        .end().appendTo('.image_slide');}, 7000);
});