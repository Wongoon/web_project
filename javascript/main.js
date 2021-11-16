jQuery(document).ready(function(){
    $('.nav > li').mouseover(function(){
        $(this).find('.nav-in').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.nav-in').stop().slideUp(500);
    });
});