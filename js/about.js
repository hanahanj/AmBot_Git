$(document).ready(function(){

$('.home').click('click touchstart', function() {
    $('.menu').animate({opacity: '1'}, 120); 
    $('.menuLinks #ABint').animate({opacity: '1'}, 120); 
    $('.menuLinks #ABarchive').animate({opacity: '1'}, 120); 
    $('.menuLinks #ABmap').animate({opacity: '1'}, 120); 
    $('.menuLinks').css({"z-index": '-10'}, 120); 
    $(this).animate({opacity: '0'}, 300);
    $(this).css({"z-index": '1000'}, 120);

    $('.homeClose').animate({opacity: '1'}, 300);
    $('.homeClose').css({"z-index": '2000'}, 120); 
});

$('.homeClose').click('click touchstart', function() {
    $('.menu').animate({opacity: '0'}, 120); 
    $('.menuLinks #ABint').animate({opacity: '0'}, 120); 
    $('.menuLinks #ABarchive').animate({opacity: '0'}, 120); 
    $('.menuLinks #ABmap').animate({opacity: '0'}, 120); 
    $('.menuLinks').css({"z-index": '-10'}, 120); 
    $(this).animate({opacity: '0'}, 300);  
    $(this).css({"z-index": '1000'}, 120);  
    $('.home').animate({opacity: '1'}, 300);
    $('.home').css({"z-index": '2000'}, 120); 
});

});

