
$(document).ready(function(){

	


	jQuery( '#infowindow' ).hide();

	function initialize() {

		var styles = [
		{
			stylers: [ 
			{ hue: "#ff0091" },
			{ saturation: -100 }
			]
		},{
			featureType: "road", 
			elementType: "geometry",
			stylers: [
			{ lightness: 100 },
			{ visibility: "simplified" }
			]
		},
		{
			featureType: "water", 
			elementType: "geometry",
			stylers: [
			{ color: "#000000" },
			// { lightness: 250 },
			{ visibility: "simplified" }
			]
		},

		{
			featureType: "road",
			elementType: "labels",
			stylers: [
         //Turns off road labels. 
         { visibility: "off" }
         ]
     }
     ];

     var src = 'itineraries/itinerariOne.kml';

     var map_options = {
     	center: new google.maps.LatLng(38.62529, -90.09554),
     	mapTypeId: google.maps.MapTypeId.TERRAIN,
     	zoom: 13,
     	panControl: false,
     	zoomControl: true,
     	scaleControl: true,
     	streetViewControl: false,
     	styles: styles,
     	mapTypeControl: true,
     	mapTypeControlOptions: {
     		mapTypeIds: [google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.TERRAIN],
     		style: google.maps.MapTypeControlStyle.DEFAULT,
     		position: google.maps.ControlPosition.TOP_RIGHT
     	}
     };

     map = new google.maps.Map(document.getElementById("mapCanvas"), map_options);

     map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

     var image = {
     	url: '../images/ABMarker6.png',
     };


     var markers = [
	    // Detailed information for each marker, where it is located and where it lineks to
	    
	    ['Frank Holten State Park', 38.59923, -90.09554, 'insert Site'],
	    ['Lincoln Park', 38.60982, -90.15608, 'insert Site'],
	    ['Sunken Garden', 38.62529, -90.14097, 'insert Site'],
	    ['Jones Park', 38.62505, -90.12196, 'insert Site'],

	    
	    ];


// Content is what is displayed on Hover
var content = [

['<div id="bodyContent">' + '<p>Frank Holten State Park</p>'],
['<div id="bodyContent">' + '<p>Lincoln Park</p>'],
['<div id="bodyContent">' + '<p>Sunken Garden</p>'],
['<div id="bodyContent">' + '<p>Jones Park</p>'],


];

// Draw Itinerary Path

var pathCoordinate = [
{lat: 38.08491, lng: -90.09711},//Prairie


{lat: 38.16523, lng: -90.20565}, //Le Grande Passe
{lat: 38.15581, lng: -90.18976}, //Fults
{lat: 38.14481, lng: -90.16857}, //Kidd Lake
{lat: 38.12010, lng: -90.13097}, //Bluffs

{lat: 38.08691, lng: -90.09836}, 
{lat: 38.08525, lng: -90.09879}, 
{lat: 38.07860, lng: -90.10514}, 
{lat: 38.07110, lng: -90.12664}, 
{lat: 38.09197, lng: -90.16664},
{lat: 38.08827, lng: -90.15958},//Fort Charters 

{lat: 38.09572, lng: -90.16642}, 
{lat: 38.09758, lng: -90.16518}, 
{lat: 38.10400, lng: -90.16518}, 
{lat: 38.11423, lng: -90.16904}, 
{lat: 38.11841, lng: -90.17406}, 
{lat: 38.11916, lng: -90.17814}, 
{lat: 38.11848, lng: -90.18573}, 
{lat: 38.11902, lng: -90.19474}, 
{lat: 38.12226, lng: -90.20865}, //St. Philip 
{lat: 38.12723, lng: -90.21088},
{lat: 38.13266, lng: -90.21736}, 
{lat: 38.13837, lng: -90.22273}, 
{lat: 38.14090, lng: -90.22796}, 
{lat: 38.14718, lng: -90.22719}, 
{lat: 38.15143, lng: -90.23427}, 
{lat: 38.16385, lng: -90.22324}, 
{lat: 38.16607, lng: -90.21612}, 
{lat: 38.13536, lng: -90.15097}  
];

var flightPath = new google.maps.Polyline({
	path: pathCoordinate,
	geodesic: true,
	strokeColor: '#000000',
	strokeOpacity: 0.8,
	strokeWeight: 10
});

flightPath.setMap(map);
// loadKmlLayer(src, map);

// function loadKmlLayer(src, map) {
// 	var kmlLayer = new google.maps.KmlLayer(src, {
// 		suppressInfoWindows: true,
// 		preserveViewport: false,
// 		map: map
// 	});


// INFO WINDOW
var bounds = new google.maps.LatLngBounds();
var infoWindow = new google.maps.InfoWindow();
var gmarkers = [];
var marker, i;

for (i = 0; i < markers.length; i++) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(markers[i][1], markers[i][2]),
		map: map,
		icon: image,
		title: [0],
		url:markers[i][3]
	     		// zIndex: markers[i][3],
	     	});
	bounds.extend(marker.getPosition());


//Infobox appear and disappear ///////////////////// 



google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
	return function () {  
		jQuery( '#infowindow' ).show();
		jQuery( '#infowindow' ).empty();
		jQuery( '#infowindow' ).append( content[i][0] );					
	}
})(marker, i));
gmarkers.push(marker);

google.maps.event.addListener(marker, 'click', function() {
	window.location.href = this.url;
});

google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {
	return function () {  
		jQuery( '#infowindow' ).hide();					
	}
})(marker, i));
gmarkers.push(marker);

};

};
google.maps.event.addDomListener(window, 'load', initialize);




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



$('.menuFloatInt').on('click touchstart', function() { 
	$('#mapContainer').animate({width: '80%', height: "100%", top: "0%"}, 300); 
	$('#listItineraries').animate({opacity: '1'}, 800);  
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"});   
});

$('.menuFloatSites').on('click touchstart', function() {
	$('#mapContainer').animate({height: '80%', width: "100%", top: '0%'}, 300);  
	$('#sitesContain').animate({opacity: '1'}, 800);
	$('.about').animate({opacity: '0'}, 300);   
	$('.logo').animate({opacity: '0'}, 300); 
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"});
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"});
	$('.menuFloatAbout').css({"text-decoration":"none", "font-style": "normal"});     
});



$('.menuFloatAbout').on('click touchstart', function() {
	$('#mapContainer').animate({height: '75%', width: "100%", top: '25.5%', }), 300;
	$('#listItineraries').animate({opacity: '0'}, 300);
	$('.about').animate({opacity: '1'}, 300);   
	$('.logo').animate({opacity: '1'}, 300); 
	$('#sitesContain').animate({opacity: '0'}, 300);
	$('.close').animate({opacity: '1'}, 300);

	$(this).css({"text-decoration":"underline", "font-style": "italic"}); 
	$('.menuFloatInt').css({"text-decoration":"none", "font-style": "normal"}); 
	$('.menuFloatSites').css({"text-decoration":"none", "font-style": "normal"});

});

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
	// $('#mapContainer').animate({height: '82.5%', width: "100%", top: '17.5%', }), 300;
	$(".menu").animate({opacity: '.9'}, 300); 
	$('.menu').css({"z-index": '100'}); 
});

$('.menu').mouseleave('click touchstart', function() {
	// $('#mapContainer').animate({top: '0%', left: "0%", height: '100%', width: "100%", }, 300);
	$(".menu").animate({opacity: '0'}, 800); 
	$('.menu').css({"z-index": '-10'});  
});












});

