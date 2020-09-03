$('ul.tabs li').click(function() {
    jQuery('.tabs li').removeClass('current');
    jQuery(this).addClass('current');
    var tagid = jQuery(this).data('tab');
    jQuery('.tab-content').removeClass('current').addClass('hideDiv');
    jQuery('#' + tagid).addClass('current').removeClass('hideDiv');
});

$('.tab-content').click(function(){
    $(this).find('img').toggleClass('showImg');
    $('img.showImg').not($(this).find('img')).removeClass('showImg');
})

$('.tab-content img').each(function(){
    $(this).click(function(event){
        event.stopPropagation();
    })
});