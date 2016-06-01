$(document).ready(function(){

$('.home').click('click touchstart', function() {
    $('.menu').animate({opacity: '1'}, 120); 
    $('.menuLinks #Iabout').animate({opacity: '1'}, 120); 
    $('.menuLinks #Iarchive').animate({opacity: '1'}, 120); 
    $('.menuLinks #Imap').animate({opacity: '1'}, 120); 
    $('.menuLinks').css({"z-index": '-10'}, 120); 
    $(this).animate({opacity: '0'}, 300);
    $(this).css({"z-index": '1000'}, 120);

    $('.homeClose').animate({opacity: '1'}, 300);
    $('.homeClose').css({"z-index": '2000'}, 120); 
});

$('.homeClose').click('click touchstart', function() {
    $('.menu').animate({opacity: '0'}, 120); 
    $('.menuLinks #Iabout').animate({opacity: '0'}, 120); 
    $('.menuLinks #Iarchive').animate({opacity: '0'}, 120); 
    $('.menuLinks #Imap').animate({opacity: '0'}, 120); 
    $('.menuLinks').css({"z-index": '-10'}, 120); 
    $(this).animate({opacity: '0'}, 300);  
    $(this).css({"z-index": '1000'}, 120);  
    $('.home').animate({opacity: '1'}, 300);
    $('.home').css({"z-index": '2000'}, 120); 
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

	$('#IT5').mouseover('click touchstart', function() {  
		$('#map5').animate({opacity: '1'}, 500); 
	});
	$('#IT5').mouseleave('click touchstart', function() {  
		$('#map5').animate({opacity: '0'}, 800); 
	});

	$('#IT6').mouseover('click touchstart', function() {  
		$('#map6').animate({opacity: '1'}, 500); 
	});
	$('#IT6').mouseleave('click touchstart', function() {  
		$('#map6').animate({opacity: '0'}, 800); 
	});


});

