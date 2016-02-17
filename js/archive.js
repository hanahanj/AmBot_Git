$(document).ready(function(){

$('#site_Milam').mouseover(function() {
    $( "#title_Milam").css({"opacity": "1"});          
});
$('#site_Milam').mouseleave(function() {
    $( "#title_Milam").css({"opacity": "0"});          
});


$('#site_CentralPort').mouseover(function() {
    $( "#title_CentralPort").css({"opacity": "1"});          
});
$('#site_CentralPort').mouseleave(function() {
    $( "#title_CentralPort").css({"opacity": "0"});          
});

$('#site_NationalCity').mouseover(function() {
    $( "#title_NationalCity").css({"opacity": "1"});          
});
$('#site_NationalCity').mouseleave(function() {
    $( "#title_NationalCity").css({"opacity": "0"});          
});

$('.home').mouseover('click touchstart', function() {
	$('.archiveContain').animate({height: '77%', width: "100%", top: '17.5%', }), 300;
	$('.site_Title').animate({top: '20%',}), 300;
	$(".menu").animate({opacity: '1'}, 800);  
	$(".close").animate({opacity: '1'}, 800);  


});

$('.close').on('click touchstart', function() { 
	$('.archiveContain').animate({top: '6%', width: "100%", }, 300);
	$(this).animate({opacity: '0'}, 300);  
	$(".menu").animate({opacity: '0'}, 300);

});






});

