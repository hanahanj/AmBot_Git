$(document).ready(function(){

	$('.home').mouseover('click touchstart', function() {
    // $('#mapContainer').animate({height: '82.5%', width: "100%", top: '17.5%', }), 300;
    $(".menu").animate({opacity: '.9'}, 300); 
    $('.menu').css({"z-index": '100'}); 
});

	$('.menu').mouseleave('click touchstart', function() {
    // $('#mapContainer').animate({top: '0%', left: "0%", height: '100%', width: "100%", }, 300);
    $(".menu").animate({opacity: '0'}, 800); 
    $('.menu').css({"z-index": '-10'});  
});

	$('#IT1').mouseover('click touchstart', function() {  
		$('.itineraryMap').animate({opacity: '1'}, 100); 
	});
	$('#IT1').mouseleave('click touchstart', function() {  
		$('.itineraryMap').animate({opacity: '0'}, 300); 
	});


});

