
$(document).ready(function(){


//Menu Move Map Canvas ///////////////////// 


$('.close').on('click touchstart', function() { 
	$('#mapContainer').animate({top: '0%', left: "0%", height: '100%', width: "100%", }, 300);
	$(this).animate({opacity: '0'}, 300);  
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"}); 


});


$('.home').mouseover('click touchstart', function() {
 $(".menuLinks #Iabout").animate({opacity: '1'}, 140); 
 $(".menuLinks #Iarchive").animate({opacity: '1'}, 140); 
 $(".menuLinks #Imap").animate({opacity: '1'}, 140);

});

$('.menuLinks #Iint').mouseover('click touchstart', function() {
  $(".menuLinks #Iabout").animate({opacity: '1'}, 140); 
  $(".menuLinks #Iarchive").animate({opacity: '1'}, 140); 
  $(".menuLinks #Imap").animate({opacity: '1'}, 140);
});

$('.menu').mouseleave('click touchstart', function() {
  $(".menuLinks #Iabout").animate({opacity: '0'}, 140); 
  $(".menuLinks #Iarchive").animate({opacity: '0'}, 140); 
  $(".menuLinks #Imap").animate({opacity: '0'}, 140);
});


// Hover state so can still scroll vertically 

$('.overlay').mousedown('click touchstart', function() {
	$('.map').animate({"z-index": 100}, 100);
	$(this).animate({"z-index": 0}, 100);
});

$('.map').mouseup(function() {
	$(".overlay").css({"z-index": '0'});  
	$(this).css({"z-index": '100'});  
});

//////////// Carousel 

var currentIndex = 0,
items = $('.container div'),
itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});



});

