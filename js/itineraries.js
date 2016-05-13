$(document).ready(function(){

	$('.home').mouseover('click touchstart', function() {
    // $('#mapContainer').animate({height: '82.5%', width: "100%", top: '17.5%', }), 300;
    $(".menuLinks #Iabout").animate({opacity: '1'}, 300); 
    $(".menuLinks #Iarchive").animate({opacity: '1'}, 300); 
    $(".menuLinks #Imap").animate({opacity: '1'}, 300); 
});

	$('.menuLinks #Iint').mouseover('click touchstart', function() {
    $(".menuLinks #Iabout").animate({opacity: '1'}, 300); 
    $(".menuLinks #Iarchive").animate({opacity: '1'}, 300);
    $(".menuLinks #Imap").animate({opacity: '1'}, 300);  
});

	$('.menu').mouseleave('click touchstart', function() {
    $(".menuLinks #Iabout").animate({opacity: '0'}, 300); 
    $('.menuLinks #Iarchive').animate({opacity: '0'}, 300);
    $('.menuLinks #Imap').animate({opacity: '0'}, 300);
});


	$('#IT1').mouseover('click touchstart', function() {  
		$('#map1').animate({opacity: '1'}, 500); 
	});
	$('#IT1').mouseleave('click touchstart', function() {  
		$('#map1').animate({opacity: '0'}, 800); 
	});


	$('#IT2').mouseover('click touchstart', function() {  
		$('#map2').animate({opacity: '1'}, 500); 
	});
	$('#IT2').mouseleave('click touchstart', function() {  
		$('#map2').animate({opacity: '0'}, 800); 
	});

	$('#IT3').mouseover('click touchstart', function() {  
		$('#map3').animate({opacity: '1'}, 500); 
	});
	$('#IT3').mouseleave('click touchstart', function() {  
		$('#map3').animate({opacity: '0'}, 800); 
	});


});

