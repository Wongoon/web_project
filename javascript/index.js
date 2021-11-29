jQuery(document).ready(function(){
    $('.image_slide span:gt(0)').hide();
    setInterval(function(){
        $('.image_slide span:first-child').fadeOut('slow')
        .next('span').fadeIn('slow')
        .end().appendTo('.image_slide');}, 7000);

    $('ul.tabnav_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.tabnav_ul li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});