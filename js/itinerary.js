
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
},10000);

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

