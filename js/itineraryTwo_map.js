// Insignificant Mounds Itinerary (PATH)
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
     	center: new google.maps.LatLng(38.7051, -90.16234),
     	mapTypeId: google.maps.MapTypeId.TERRAIN,
     	zoom: 11,
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
	    
	    ['WoodRiver PP', 38.86878, -90.1326, 'insert Site'],
	    ['Roxana Mound', 38.85366, -90.07574, 'insert Site'],
	    ['Chemetco', 38.80113, -90.09743, 'insert Site'],
	    ['American Steel', 38.7051, -90.16234, 'insert Site'],
	    ['Venice', 38.67539, -90.17586, 'insert Site'],
	    ['Milam', 38.65625, -90.12934, 'insert Site'],
	    ['Sam Chucallo', 38.64385, -90.11559, 'insert Site'],
	    ['Powell Mound', 38.65342, -90.09604, 'insert Site'],
	    ['Cahokia', 38.65682, -90.06231, 'insert Site'],
	    ['Alorton', 38.60379, -90.12042, 'insert Site'],
	    ['Sauget', 38.60805, -90.18028, 'insert Site'],
	    ['Mulch', 38.58463, -90.19097, 'insert Site'],
	    ['Pulcher', 38.49603, -90.23869, 'insert Site'],
 
	    ];


// Content is what is displayed on Hover
var content = [

['<div id="bodyContent">' + '<p>Wood River Power Plant</p>'],
['<div id="bodyContent">' + '<p>Roxana Mound</p>'],
['<div id="bodyContent">' + '<p>Chemetco</p>'],
['<div id="bodyContent">' + '<p>American Steel</p>'],
['<div id="bodyContent">' + '<p>Venice</p>'],
['<div id="bodyContent">' + '<p>Milam</p>'],
['<div id="bodyContent">' + '<p>Sam Chucallo</p>'],
['<div id="bodyContent">' + '<p>Powell Mound</p>'],
['<div id="bodyContent">' + '<p>Cahokia</p>'],
['<div id="bodyContent">' + '<p>Alorton</p>'],
['<div id="bodyContent">' + '<p>Sauget</p>'],
['<div id="bodyContent">' + '<p>Mulch</p>'],
['<div id="bodyContent">' + '<p>Pulcher</p>'],


];

// Draw Itinerary Path

var pathCoordinate = [
{lat: 38.8629, lng: -90.13372}, //Wood River
{lat: 38.86069, lng: -90.12728},
{lat: 38.85775, lng: -90.11896},
{lat: 38.85728, lng: -90.11295},
{lat: 38.85708, lng: -90.10763},
{lat: 38.85147, lng: -90.10196},
{lat: 38.84532, lng: -90.09853},
{lat: 38.8373, lng: -90.09784},
{lat: 38.83369, lng: -90.09904},
{lat: 38.83315, lng: -90.07141},
{lat: 38.82807, lng: -90.06754}, // Grassy Lake
{lat: 38.79804, lng: -90.09235},
{lat: 38.80239, lng: -90.09681},
{lat: 38.80346, lng: -90.09922},
{lat: 38.78138, lng: -90.10934},
{lat: 38.76867, lng: -90.12359},
{lat: 38.7522, lng: -90.12445},
{lat: 38.73654, lng: -90.13441},
{lat: 38.73199, lng: -90.14591},
{lat: 38.71766, lng: -90.15895},
{lat: 38.71283, lng: -90.16668},
{lat: 38.70989, lng: -90.16839},
{lat: 38.69381, lng: -90.16788},
{lat: 38.6847, lng: -90.17269},
{lat: 38.67505, lng: -90.17389},
{lat: 38.6713, lng: -90.1756},
{lat: 38.6709, lng: -90.172},
{lat: 38.66862, lng: -90.17011},
{lat: 38.66332, lng: -90.1702},
{lat: 38.66152, lng: -90.16857},
{lat: 38.6583, lng: -90.1702},
{lat: 38.65522, lng: -90.16865},
{lat: 38.65702, lng: -90.16264},
{lat: 38.65535, lng: -90.15973},
{lat: 38.65783, lng: -90.15561},
{lat: 38.66426, lng: -90.14247},
{lat: 38.6589, lng: -90.13655},
{lat: 38.65575, lng: -90.13415},
{lat: 38.64992, lng: -90.13278},
{lat: 38.64811, lng: -90.132},
{lat: 38.6467, lng: -90.12969},
{lat: 38.64402, lng: -90.12745},
{lat: 38.64188, lng: -90.12711},
{lat: 38.64194, lng: -90.11981},
{lat: 38.64385, lng: -90.11559},// Sam Chucallo
{lat: 38.64576, lng: -90.11269},
{lat: 38.64798, lng: -90.10806},
{lat: 38.65314, lng: -90.10033},
{lat: 38.65689, lng: -90.09673},
{lat: 38.65944, lng: -90.09278},
{lat: 38.65837, lng: -90.04712},
{lat: 38.63645, lng: -90.04669},
{lat: 38.63691, lng: -90.04935},
{lat: 38.63685, lng: -90.09304},
{lat: 38.59869, lng: -90.09235},
{lat: 38.60104, lng: -90.09492},
{lat: 38.60399, lng: -90.10145},
{lat: 38.60761, lng: -90.11475},
{lat: 38.60748, lng: -90.12102},
{lat: 38.60815, lng: -90.12771},
{lat: 38.60587, lng: -90.12874},
{lat: 38.60345, lng: -90.13209},//70
{lat: 38.6236, lng: -90.15586},
{lat: 38.61509, lng: -90.16741},
{lat: 38.61425, lng: -90.16848},
{lat: 38.61308, lng: -90.16917},
{lat: 38.60053, lng: -90.17286},
{lat: 38.60134, lng: -90.17758},
{lat: 38.60204, lng: -90.1793},
{lat: 38.60134, lng: -90.17758},
{lat: 38.60053, lng: -90.17286},
{lat: 38.58749, lng: -90.17749},  //80
{lat: 38.5734, lng: -90.18608},
{lat: 38.57111, lng: -90.18985},
{lat: 38.56669, lng: -90.19105},
{lat: 38.5546, lng: -90.2005},
{lat: 38.55078, lng: -90.20144},
{lat: 38.54373, lng: -90.19723},
{lat: 38.53715, lng: -90.20238},
{lat: 38.51929, lng: -90.2108},
{lat: 38.5162, lng: -90.21097},
{lat: 38.50814, lng: -90.20462}, //90
{lat: 38.50646, lng: -90.20419},
{lat: 38.50505, lng: -90.20496},
{lat: 38.50317, lng: -90.20813},
{lat: 38.4986, lng: -90.21157},
{lat: 38.49585, lng: -90.21191},//95
{lat: 38.48906, lng: -90.21655},
{lat: 38.49182, lng: -90.22032},
{lat: 38.49901, lng: -90.22496},
{lat: 38.49363, lng: -90.2265}


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

var clusterStyles = [{
	url: 'http://oi62.tinypic.com/zjbf9l.jpg',
	height: 80,
	width: 150,
	textSize: 16,
	backgroundPosition: "-4 0"
}];

var mcOptions = {
	gridSize: 30,
	styles: clusterStyles,
	maxZoom: 15
};

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

