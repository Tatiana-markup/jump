$(function(){
    bxSlider ()
});


function bxSlider () {
    $('.bxslider').bxSlider({
        slideWidth: 300,
        nextText: '',
        prevText: '',
        pagerCustom: '#bx-pager'
    });
}