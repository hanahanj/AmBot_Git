
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


$('.menuFloatStreetview').on('click touchstart', function() {
	$('#bgContainer').animate({top: '6%', left: "0%", height: '88%', width: "100%", }, 300);
	$('.streetView').animate({opacity: '1'}, 800); 
	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	$('.streetView').css({"z-index": '100'});
	$('.directions').css({"z-index": '0'});
	$('.close').animate({opacity: '1'}, 300); 

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});



});


$('.menuFloatDescription').on('click touchstart', function() { 
	$('#bgContainer').animate({top: '6%', left: "30%", height: '88%', width: "64%", }, 300);  
	$('#titleImage').animate({width: '118%',}, 300);
	$('.site_Title').animate({opacity: '1'}, 800); 
	$('.siteText').animate({opacity: '1'}, 800); 
	$('.streetView').animate({opacity: '0'}, 300); 
	$('.directions').animate({opacity: '0'}, 300);
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300); 

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});  
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});

});

$('.menuFloatInt').on('click touchstart', function() {  
	$('#bgContainer').animate({width: '75%', height: "88%", top: "6%", left:"6%"}, 300); 
	$('#listItineraries').animate({opacity: '1'}, 800);  
	$('.site_Title').animate({opacity: '0'}, 300); 
	$('.siteText').animate({opacity: '0'}, 300);  
	$('.streetView').animate({opacity: '0'}, 300); 
	$('.directions').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300); 

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});   
});


$('.menuFloatVisit').on('click touchstart', function() {  
	$('#bgContainer').animate({width: '100%', height: "100%", top: "0%", left:"0%"}, 300);  
	$('.directions').animate({opacity: '1'}, 800); 
	$('.site_Title').animate({opacity: '0'}, 300); 
	$('.site_Title').css({"z-index": '-10'});
	$('.siteText').animate({opacity: '0'}, 300); 
	$('.streetView').animate({opacity: '0'}, 300); 
	$('#listItineraries').animate({opacity: '0'}, 300); 
	$('.streetView').css({"z-index": '0'});
	$('.directions').css({"z-index": '100'});
	$('.close').animate({opacity: '1'}, 300); 


	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});      
});

$('.close').on('click touchstart', function() { 
	$('#bgContainer').animate({top: '6%', left: "6%", height: '88%', width: "88%", }, 300);
	$(this).animate({opacity: '0'}, 300);  
	$('#titleImage').animate({width: '100%',}, 300);
	$('.site_Title').animate({opacity: '0'}, 800);
	$('.site_Title').css({"z-index": '0'}); 
	$('.siteText').animate({opacity: '0'}, 800); 
	$('.streetView').animate({opacity: '0'}, 300); 
	$('.directions').animate({opacity: '0'}, 300);
	$('#listItineraries').animate({opacity: '0'}, 300);
	$(".menu").animate({opacity: '0'}, 300); 

	$('.menuFloatStreetview').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatDescription').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});    
	$('.menuFloatVisit').css({"text-decoration":"none", "font-style": "normal"});
	$('.site_Title').animate({top: '12%',}), 300;

});

$('.home').mouseover('click touchstart', function() {
	$('#bgContainer').animate({height: '77%', width: "88%", top: '17.5%', }), 300;
	$('.site_Title').animate({top: '20%',}), 300;
	$(".menu").animate({opacity: '1'}, 800);  
	$(".close").animate({opacity: '1'}, 800);  


});

// $('.menu').mouseleave('click touchstart', function() {
// 	$('#bgContainer').animate({top: '6%', left: "6%", height: '88%', width: "88%", }, 300);
// 	$(".menu").animate({opacity: '0'}, 800);  
// 	$('.site_Title').animate({top: '12%',}), 300;

// });




});