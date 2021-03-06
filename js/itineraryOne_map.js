// Andrew Thiesing Itinerary (PATH)
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
     	scrollwheel: false, 
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
{lat: 38.59923, lng: -90.09554},//East St. Louis
{lat: 38.60016, lng: -90.09415},
{lat: 38.60114, lng: -90.09518},
{lat: 38.60338, lng: -90.10029},
{lat: 38.60764, lng: -90.11479},
{lat: 38.60754, lng: -90.12097},
{lat: 38.60828, lng: -90.12651},
{lat: 38.60815, lng: -90.12767},
{lat: 38.60939, lng: -90.13114},
{lat: 38.60748, lng: -90.13196},
{lat: 38.60043, lng: -90.14149},
{lat: 38.6116, lng: -90.15479},
{lat: 38.60982, lng: -90.15608},//Lincoln Park
{lat: 38.6116, lng: -90.15479},
{lat: 38.617, lng: -90.16123},
{lat: 38.6288, lng: -90.14501},
{lat: 38.62529, lng: -90.14097},//Sunken Garden
{lat: 38.62495, lng: -90.14029},
{lat: 38.62592, lng: -90.13977},
{lat: 38.62669, lng: -90.13874},
{lat: 38.62521, lng: -90.13715},
{lat: 38.62317, lng: -90.13144},
{lat: 38.62304, lng: -90.12926},
{lat: 38.62126, lng: -90.12436},
{lat: 38.62505, lng: -90.12196}//Jones Park
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

