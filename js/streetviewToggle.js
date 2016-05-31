
$(document).ready(function(){
///////////////////////////// Fade in Streetview
// var par = $('.streetView');
//   $(par).hide();

//   $('.menuFloatStreetview').click(function(e) {
//       $(par).fadeToggle(800);
//       e.preventDefault();
//   });




/////////////////////////////// Buttons

$('.menuFloatStreetview').mouseover(function() {
	$(this).css({"font-style": "italic"});        
});


$('.menuFloatStreetview').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});  
});


$('.menuFloatDescription').mouseover(function() {
	$(this).css({"font-style": "italic"});          
});


$('.menuFloatDescription').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});  
});

$('.menuFloatInt').mouseover(function() {
	$(this).css({"font-style": "italic"});           
});


$('.menuFloatInt').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});        
});

$('.menuFloatVisit').mouseover(function() {
	$(this).css({"font-style": "italic"});        
});


$('.menuFloatVisit').mouseleave('click touchstart', function() {
	$(this).css({"font-style": "normal"});         
});



/////////////////////////////// Canvas


$('.menuFloatDescription').mouseover('click touchstart', function() { 
	// $('#bgContainer').animate({top: '6%', left: "6%", height: '88%', width: "88%", }, 300);
	// $('#bgContainer').animate({opacity: '1'}, 300);
	$('#bgContainer').animate({opacity: '0.5'}, 200);
	// $('.site_Title').animate({bottom: '78%',}, 300);   
	$('.siteText').animate({top: '23%',}, 300);
	$('.siteText').css({"z-index": '10'});
	$('.close').animate({opacity: '1'}, 300); 
	// $('.streetView').css({"z-index": '-10'});
	// $('.directions').css({"z-index": '-10'});

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatView').css({"text-decoration":"none", "font-style": "normal"});
});

$('.menuFloatView').mouseover('click touchstart', function() { 
	$('#bgContainer').animate({top: '6%', left: "6%", height: '88%', width: "88%", }, 300);
	$('#bgContainer').animate({opacity: '1'}, 300);
	$('#titleImage').animate({opacity: '1'}, 800);
	$('.streetView').animate({opacity: '0'}, 800);
	$('.directions').animate({opacity: '0'}, 800);
	// $('.streetView').css({"z-index": '-10'});
	// $('.directions').css({"z-index": '-10'});

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
});

$('.menuFloatStreetview').mouseover('click touchstart', function() {
	$('#bgContainer').animate({top: '6%', left: "0%", height: '88%', width: "100%", }, 300);
	$('#bgContainer').animate({opacity: '1'}, 300);
	// $('.site_Title').animate({bottom: '1%',}, 300); 
	// $('.siteText').animate({top: '100%',}, 300); 
	$('.streetView').animate({opacity: '1'}, 800); 
	$('#titleImage').animate({opacity: '0'}, 800);
	$('.directions').animate({opacity: '0'}, 800);

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	// $('.streetView').css({"z-index": '10'});
	// $('.directions').css({"z-index": '-10'});
	

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatView').css({"text-decoration":"none", "font-style": "normal"});
});

$('.menuFloatVisit').mouseover('click touchstart', function() {  
	$('#bgContainer').animate({width: '100%', height: "100%", top: "0%", left:"0%"}, 300);  
	$('#bgContainer').animate({opacity: '1'}, 300); 
	$('.directions').animate({opacity: '1'}, 800); 
	$('.streetView').animate({opacity: '0'}, 800);
	$('#titleImage').animate({opacity: '0'}, 800); 
	// $('.streetView').css({"z-index": '-10'});
	// $('.directions').css({"z-index": '10'});


	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatView').css({"text-decoration":"none", "font-style": "normal"});    
});

$('.close').on('click touchstart', function() { 
	$('.site_Title').animate({bottom: '1%',}, 300); 
	$('.siteText').animate({top: '100%',}, 300);
	$('#bgContainer').animate({opacity: '1'}, 300); 
	$(this).animate({opacity: '0'}, 300);  

	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});    
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatView').css({"text-decoration":"none", "font-style": "normal"});
});

$('.home').click('click touchstart', function() {
	$('.menu').animate({opacity: '1'}, 120); 
	$('.menuLinks').animate({opacity: '1'}, 120); 
	$('.menuLinks').css({"z-index": '-10'}, 120); 
	$(this).animate({opacity: '0'}, 300);
	$(this).css({"z-index": '1000'}, 120);

	$('.homeClose').animate({opacity: '1'}, 300);
	$('.homeClose').css({"z-index": '2000'}, 120); 
});

$('.homeClose').click('click touchstart', function() {
	$('.menu').animate({opacity: '0'}, 120); 
	$('.menuLinks').animate({opacity: '0'}, 120); 
	$('.menuLinks').css({"z-index": '-10'}, 120); 
	$(this).animate({opacity: '0'}, 300);  
	$(this).css({"z-index": '1000'}, 120);  
	$('.home').animate({opacity: '1'}, 300);
	$('.home').css({"z-index": '2000'}, 120); 
});

// Trying to get directions iframe to reload when clicked so it returns to satellite.... not working currently

$('.close').click(function() {
	document.getElementById('.directions').location.reload(true);       
});


$('.menuFloatVisit').click(function() {
	document.getElementById('.directions').location.reload(true);    
});


$('.menuFloatInt').mouseover('click touchstart', function() { 
	$('#bgContainer').animate({top: '6%', left: "6%", height: '88%', width: "88%", }, 300);
	$('.site_Title').animate({bottom: '1%',}, 300); 
	$('.siteText').animate({top: '100%',}, 300); 
	$('#bgContainer').animate({opacity: '.5'}, 300); 
	$('.listItineraries').animate({opacity: '1'}, 800);  
	$('.listItineraries').css({"z-index": '10'});  
	$('.streetView').animate({opacity: '0'}, 300); 
	$('.directions').animate({opacity: '0'}, 300);
	// $('.close').animate({opacity: '1'}, 300); 

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});   
});


});
