
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

     var map_options = {
     	center: new google.maps.LatLng(38.613844, -90.167799),
     	mapTypeId: google.maps.MapTypeId.TERRAIN,
     	zoom: 12,
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
	    
	   ['Site 1', 37.921475, -89.913523, 'insert Site'],
	    ['Site 2', 38.302856, -90.304, 'insert Site'],
	    ['Site 3', 38.277725, -90.350111, 'insert Site'],
	    ['Site 4', 38.3636, -90.261725, 'insert Site'],
	    ['Site 5', 38.451045, -90.228953, 'insert Site'],
	    ['Site 6', 38.550942, -90.200618, 'insert Site'],
	    ['Site 7', 38.558776, -90.172563, 'insert Site'],
	    ['Site 8', 38.594559, -90.167283, 'insert Site'],
	    ['Site 9', 38.613844, -90.167799, 'insert Site'],
	    ['Site 10', 38.63111, -90.17217, 'insert Site'],
	    ['Site 11', 38.626846, -90.159777, 'insert Site'],
	    ['Site 12', 38.645277, -90.152113, 'insert Site'],
	    ['Site 13', 38.664595, -90.176686, 'insert Site'],
	    ['Site 14', 38.66493, -90.16711, 'insert Site'],
	    ['Site 15', 38.700301, -90.156967, 'insert Site'],
	    ['Site 16', 38.698900, -90.150652, 'insert Site'],
	    ['Site 17', 38.800444, -90.082706, 'insert Site'],
	   
	    
	    ];


// Content is what is displayed on Hover
var content = [

// ['<div id="bodyContent">' + '<p>Prairie Du Rocher</p>'],
// ['<div id="bodyContent">' + '<p>Fort Chartres</p>'],
// ['<div id="bodyContent">' + '<p>St. Phillipe</p>'],
// ['<div id="bodyContent">' + '<p>Le Grande Passe</p>'],
// ['<div id="bodyContent">' + '<p>Fults Hill Prairie</p>'],
// ['<div id="bodyContent">' + '<p>Kidd Lake</p>'],
// ['<div id="bodyContent">' + '<p>Bluffs</p>'],


];

// Draw Itinerary Path

var pathCoordinate = [
{lat: 37.92273, lng: -89.91339},//Point 4

];
var flightPath = new google.maps.Polyline({
	path: pathCoordinate,
	geodesic: true,
	strokeColor: '#000000',
	strokeOpacity: 0.8,
	strokeWeight: 10
	// runSnapToRoad(path)
});

flightPath.setMap(map);

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
var mc = new MarkerClusterer(map, gmarkers, mcOptions);
map.fitBounds(bounds);
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

