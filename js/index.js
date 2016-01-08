
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
     	center: new google.maps.LatLng(38.725, -90.2),
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

     map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

     var image = {
     	url: 'images/ABMarker4.png',
     };

     var markers = [
	    // Milam
	    ['Milam', 38.655978, -90.123811, 1, 'milam.html'], 

	      // Alorton  
	      ['Alorton ', 38.595764, -90.129631, 2],

	     // Alton    
	     ['Marker3', 38.889664, -90.18045, 3],


	     ['Marker4', 38.885131, -90.143911, 4],
	     ['Marker5', 38.711325, -90.172261, 5],
	     ['Marker6', 38.711325, -90.172261, 6],
	     ['Marker7', 38.657758, -90.169039, 7],
	     ['Marker8', 38.571008, -90.191758, 8],
	     ['Marker9', 38.803944, -90.054722, 9],
	     ['Marker10', 38.660444, -90.062153, 10],
	     ['Marker11', 38.7585, -90.170575, 11],
	     ['Marker12', 38.797708, -90.098817, 12],
	     ['Marker13', 38.753956, -90.158042, 13],
	     ['Marker14', 38.806817, -90.155358, 14],
	     ['Marker15', 38.815953, -90.106003, 15],
	     ['Marker16', 38.522706, -90.210494, 16],
	     ['Marker17', 38.364697, -90.261725, 17],
	     ['Marker18', 38.540947, -90.232769, 18],
	     ['Marker19', 38.625597, -90.153958, 19],
	     ['Marker20', 8.861889, -90.115344, 20],
	     ['Marker21', 38.661958, -90.034886, 21],
	     ['Marker22', 38.085667, -90.158569, 22],
	     ['Marker23', 38.163822, -90.212572, 23],
	     ['Marker24', 38.769133, -90.0667, 24],
	     ['Marker25', 38.621836, -90.175347, 25],
	     ['Marker26', 38.565714, -90.135919, 26],
	     ['Marker27', 38.649808, -90.134908, 27],
	     ['Marker28', 38.7019, -90.151317, 28],
	     ['Marker29', 38.688181, -90.179908, 29],
	     ['Marker30', 38.000328, -90.079517, 30],
	     ];

	     var content = [
	     ['<div id="bodyContent">' + '<p>Milam Landfill</p>'],
	     ['<div id="bodyContent">' + '<p>Alorton</p>'],
	     ['<div id="bodyContent">' + '<p>Alton</p>'],
	     ['<div id="bodyContent">' +'<p>Alton Steel</p>'],
	     ['<div id="bodyContent">' + '<p>Central Port</p>'],
	     ['<div id="bodyContent">' + '<p>Field Station HQ</p>'],
	     ['<div id="bodyContent">' + '<p>Brooklyn, IL</p>'],
	     ['<div id="bodyContent">' + '<p>Cahokia Courhouse</p>'],
	     ['<div id="bodyContent">' + '<p>Cahokia Creek Chanel</p>'],
	     ['<div id="bodyContent">' + '<p>Cahokia Mounds</p>'],
	     ['<div id="bodyContent">' + '<p>Chain of Rocks</p>'],
	     ['<div id="bodyContent">' + '<p>Chemetco </p>'],
	     ['<div id="bodyContent">' + '<p>Chouteau Island</p>'],
	     ['<div id="bodyContent">' + '<p>Columbia Bottoms</p>'],
	     ['<div id="bodyContent">' + '<p>Confluence Tower</p>'],
	     ['<div id="bodyContent">' + '<p>Dupo</p>'],
	     ['<div id="bodyContent">' + '<p>Eagle Cliff</p>'],
	     ['<div id="bodyContent">' + '<p>East Carondelet</p>'],
	     ['<div id="bodyContent">' + '<p>East St. Louis</p>'],
	     ['<div id="bodyContent">' + '<p>Envirotech</p>'],
	     ['<div id="bodyContent">' + '<p>Fairmount Park Raceway</p>'],
	     ['<div id="bodyContent">' + '<p>Fort Chartres</p>'],
	     ['<div id="bodyContent">' + '<p>Fults</p>'],
	     ['<div id="bodyContent">' + '<p>Gateway Commerce Center</p>'],
	     ['<div id="bodyContent">' + '<p>Gateway Geyser</p>'],
	     ['<div id="bodyContent">' + '<p>Gateway Grizzlies Ballpark</p>'],
	     ['<div id="bodyContent">' + '<p> Gateway Motorsports Park</p>'],
	     ['<div id="bodyContent">' + '<p>Granite City</p>'],
	     ['<div id="bodyContent">' + '<p>Army Depot</p>'],
	     ['<div id="bodyContent">' + '<p>Holcim</p>'],
	     ];

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
	     		url:markers[i][4]
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









});

