// THIS IS FOR VOGLER COMPANY TOWN ITINERARY 
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
     	center: new google.maps.LatLng(38.7015, -90.14894),
     	mapTypeId: google.maps.MapTypeId.TERRAIN,
     	zoom: 11,
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
	    
	    ['Site 1', 38.86022, -90.0866, 'insert Site'],
	    ['Site 2', 38.84863, -90.07887, 'insert Site'],
	    ['Site 3', 38.84091, -90.09385, 'insert Site'],
	    ['Site 4', 38.7015, -90.14894, 'insert Site'],
	    ['Site 5', 38.64335, -90.15166, 'insert Site'],
	    ['Site 6', 38.59996, -90.12801, 'insert Site'],
	    ['Site 7', 38.5902, -90.16919, 'insert Site'],
	    
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
{lat:38.8601619, lng:-90.1003361},//point 1
{lat:38.8599949, lng:-90.0805092},//point 2
{lat:38.85291, lng:-90.0802946},//point 3
{lat:38.8528766, lng:-90.079093},//point 4
{lat:38.8424486, lng:-90.0789213},//point 5
{lat:38.8416798, lng:-90.0787497},//point 6
{lat:38.8409778, lng:-90.0782776},//point 7
{lat:38.8408775, lng:-90.0971174},//point 8
{lat:38.839975, lng:-90.0972462},//point 9
{lat:38.8386045, lng:-90.0971603},//point 10
{lat:38.8376685, lng:-90.0972033},//point 11
{lat:38.8326876, lng:-90.0987911},//point 12
{lat:38.8309492, lng:-90.0993919},//point 13
{lat:38.8279069, lng:-90.0999928},//point 14
{lat:38.8279069, lng:-90.0999928},//point 15
{lat:38.8182443, lng:-90.0987053},//point 16
{lat:38.8053365, lng:-90.0991344},//point 17
{lat:38.8033967, lng:-90.0994778},//point 18
{lat:38.8021927, lng:-90.0969028},//point 19
{lat:38.7991827, lng:-90.0942421},//point 20
{lat:38.7986475, lng:-90.0924397},//point 21
{lat:38.7973097, lng:-90.0926113},//point 22
{lat:38.7949015, lng:-90.0904655},//point 23
{lat:38.7914228, lng:-90.0842857},//point 24
{lat:38.7802497, lng:-90.0850582},//point 25
{lat:38.7801159, lng:-90.0869465},//point 26
{lat:38.7711495, lng:-90.0925255},//point 27
{lat:38.7614457, lng:-90.0938129},//point 28
{lat:38.7580323, lng:-90.0977612},//point 29
{lat:38.757363, lng:-90.1008511},//point 30
{lat:38.7557566, lng:-90.1038551},//point 31
{lat:38.7619141, lng:-90.1040268},//point 32
{lat:38.7621819, lng:-90.1244545},//point 33
{lat:38.7518744, lng:-90.1248837},//point 34
{lat:38.749063, lng:-90.1259136},//point 35
{lat:38.738352, lng:-90.1326942},//point 36
{lat:38.7358079, lng:-90.1357841},//point 37
{lat:38.7339332, lng:-90.140419},//point 38
{lat:38.7325942, lng:-90.1446247},//point 39
{lat:38.7300499, lng:-90.1484871},//point 40
{lat:38.7183315, lng:-90.158186},//point 41
{lat:38.7161215, lng:-90.1611042},//point 42
{lat:38.7133087, lng:-90.1660824},//point 43
{lat:38.7115004, lng:-90.1678848},//point 44
{lat:38.7082186, lng:-90.1681423},//point 45
{lat:38.7014536, lng:-90.1676273},//point 46
{lat:38.7015206, lng:-90.1441956},//point 47
{lat:38.7044008, lng:-90.140419},//point 48
{lat:38.7020565, lng:-90.1374149},//point 49
{lat:38.7021904, lng:-90.1223087},//point 50
{lat:38.6985063, lng:-90.1222229},//point 51
{lat:38.6947549, lng:-90.1325226},//point 52
{lat:38.6913384, lng:-90.1393032},//point 53
{lat:38.6851078, lng:-90.1483154},//point 54
{lat:38.6782066, lng:-90.1481438},//point 55
{lat:38.6754593, lng:-90.1472855},//point 56
{lat:38.6666137, lng:-90.1437664},//point 57
{lat:38.6643351, lng:-90.1425648},//point 58
{lat:38.6574319, lng:-90.1565552},//point 59
{lat:38.6552201, lng:-90.1596451},//point 60
{lat:38.6571638, lng:-90.1625633},//point 61
{lat:38.655153, lng:-90.1686573},//point 62
{lat:38.6505951, lng:-90.1658249},//point 63
{lat:38.6491874, lng:-90.1657391},//point 64
{lat:38.6406738, lng:-90.155611},//point 65
{lat:38.6433553, lng:-90.1516628},//point 66
{lat:38.6332989, lng:-90.1396465},//point 67
{lat:38.6353103, lng:-90.1369858},//point 68
{lat:38.629343, lng:-90.1300335},//point 69
{lat:38.6261916, lng:-90.1211071},//point 70
{lat:38.6250516, lng:-90.1222229},//point 71
{lat:38.6162669, lng:-90.1274586},//point 72
{lat:38.6162669, lng:-90.1274586},//point 73
{lat:38.6084201, lng:-90.1316643},//point 74
{lat:38.6061396, lng:-90.128746},//point 75
{lat:38.6082189, lng:-90.1277161},//point 76
{lat:38.6082189, lng:-90.1261711},//point 77
{lat:38.6076152, lng:-90.1211071},//point 78
{lat:38.6076152, lng:-90.1149273},//point 79
{lat:38.6065421, lng:-90.1112366},//point 80
{lat:38.6014444, lng:-90.1114082},//point 81
{lat:38.6011761, lng:-90.1132107},//point 82
{lat:38.5990967, lng:-90.1144981},//point 83
{lat:38.5962122, lng:-90.1152706},//point 84
{lat:38.5943339, lng:-90.1146698},//point 85
{lat:38.5915163, lng:-90.118103},//point 86
{lat:38.6235094, lng:-90.1558685},//point 87
{lat:38.6148586, lng:-90.1674557},//point 88
{lat:38.6139867, lng:-90.1685715},//point 89
{lat:38.6005053, lng:-90.172863},//point 90
{lat:38.5994991, lng:-90.1668549},//point 91
{lat:38.601109, lng:-90.1647091},//point 92
{lat:38.5982246, lng:-90.1611042},//point 93
{lat:38.5958935, lng:-90.1644945},//point 94
{lat:38.5953233, lng:-90.1677132},//point 95
{lat:38.5948035, lng:-90.1685071},//point 96
{lat:38.5937469, lng:-90.1688504},//point 97
{lat:38.5902081, lng:-90.1691937},//point 98
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

