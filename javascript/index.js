jQuery(document).ready(function(){
    $('.image_slide span:gt(0)').hide();
    setInterval(function(){
        $('.image_slide span:first-child').fadeOut('slow')
        .next('span').fadeIn('slow')
        .end().appendTo('.image_slide');}, 7000);
});