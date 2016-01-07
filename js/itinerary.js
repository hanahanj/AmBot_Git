
$(document).ready(function(){


//Menu Move Map Canvas ///////////////////// 



$('.menuFloatInt').mouseover(function() {
    $(this).css({"font-style": "italic"});          
});


$('.menuFloatInt').mouseleave('click touchstart', function() {
    $(this).css({"font-style": "normal"});          
});



$('.menuFloatSites').mouseover(function() {
   $(this).css({"font-style": "italic"});          
});


$('.menuFloatSites').mouseleave('click touchstart', function() {
    $(this).css({"font-style": "normal"});    
});

$('.menuFloatAbout').mouseover(function() {
   $(this).css({"font-style": "italic"});           
});


$('.menuFloatAbout').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});  
});




$('#des1').mouseover(function() {
	$(this).animate({top: '0%', left: "-22%", height: "500px", width: "145%", }, 300);
  
   $('.streetView').animate({opacity: '1', "z-index": 100}, 800);        
});


$('#des1').mouseleave('click touchstart', function() {
	$(this).animate({top: '0%', left: "0%",width: "100%", }, 300);
	$('.streetView').animate({opacity: '0'}, 800); 
});


$('#des2').mouseover(function() {
	$(this).animate({top: '0%', left: "-22%", height: "500px", width: "145%", }, 300);
  
   $('.streetView').animate({opacity: '1', "z-index": 100}, 800);        
});


$('#des2').mouseleave('click touchstart', function() {
	$(this).animate({top: '0%', left: "0%",width: "100%", }, 300);
	$('.streetView').animate({opacity: '0'}, 800); 
});



$('.close').on('click touchstart', function() { 
$('#mapContainer').animate({top: '0%', left: "0%", height: '100%', width: "100%", }, 300);
$(this).animate({opacity: '0'}, 300);  
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);

	});









});

