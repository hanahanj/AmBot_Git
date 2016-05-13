
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
     	url: 'images/ABMarker6.png',
     };

     var markers = [
	    // Detailed information for each marker, where it is located and where it lineks to
	    ['Alorton ', 38.595764, -90.129631, 'alorton.html'],    
	    ['Alton', 38.889664, -90.18045, 'alton.html'],
	    ['Alton Steel', 38.885131, -90.143911, 'insert Site'],
	    ['Central Port',  38.711324, -90.172260, 'americasCentralPort.html'],
	    ['Field Station HQ', 38.711325, -90.172261, 'insert Site'],  
	    ['Brooklyn, IL', 38.657758, -90.169039, 'brooklyn.html'],
	    ['Cahokia Courthouse', 38.571008, -90.191758, 'insert Site'],
	    ['Cahokia Creek Chanel', 38.803944, -90.054722, 'insert Site'],
	    ['Cahokia Mounds', 38.660444, -90.062153, 'insert Site'],
	    ['Chain of Rocks', 38.7585, -90.170575, 'insert Site'],
	    ['Chemetco', 38.797708, -90.098817, 'chemetco.html'],
	    ['Chouteau Island', 38.753956, -90.158042, 'insert Site'],
	    ['Columbia Bottoms', 38.806817, -90.155358, 'insert Site'],
	    ['Confluence Tower', 38.815952, -90.106004, "confluenceTower.html"],  
	    ['Dupo', 38.522706, -90.210494, 'dupo.html'],
	    ['Eagle Cliff', 38.364697, -90.261725, 'eaglecliffCemetery.html'],
	    ['East Carondelet', 38.540949, -90.232768, 'eastCarondelet.html'],
	    ['East St. Louis', 38.625597, -90.153958, 'insert Site'],
	    ['Envirotech', 8.861889, -90.115344, 'insert Site'],
	    ['Fairmount Park Raceway', 38.661958, -90.034886, 'fairmountParkRaceway.html'],
	    ['Fort Chartres', 38.085667, -90.158569, 'insert Site'],
	    ['Fults', 38.163822, -90.212572, 'insert Site'],
	    ['Gateway Commerce Center', 38.769133, -90.0667, 'gateway.html'],
	    ['Gateway Geyser', 38.621836, -90.175347, 'insert Site'],
	    ['Gateway Grizzlies Ballpark', 38.565714, -90.135919, 'insert Site'],
	    ['Gateway Motorsports Park', 38.649808, -90.134908, 'insert Site'],
	    ['Granite City', 38.7019, -90.151317, 'insert Site'],
	    ['Army Depot', 38.688181, -90.179908, 'insert Site'],
	    ['Holcim Cement Plant', 38.000328, -90.079517, 'insert Site'],
	    ['Horseradish', 38.688242, -90.011325, 'collinsville.html'],
	    ['Horseshoe Lake', 38.699222, -90.067539, 'horseshoeLake.html'],
	    ['Kaskaski River Lock and Dam', 37.984092, -89.945914, 'insert Site'],
	    ['Kaskaskia', 37.921475, -89.913522, 'kaskaskia.html'],
	    ['Kidd Lake', 38.144126, -90.170092, 'kaskaskia.html'],
	    ['Laclede Steel',  38.885131, -90.143912, 'lacledeSteel.html'],
	    ['Lewis & Clark Historical Site', 38.802469, -90.102144, 'insert Site'],
	    ['Lock & Dam #27', 38.702656, -90.1808, 'lock27.html'],
	    ['Lowland Forests', 38.417596, -90.262183, 'lowlandForests.html'],
	    ['McKinley Bridge & Tri-Cities Roadside Park', 38.66825, -90.174736, 'insert Site'],
	    ['Melvin Price Lock & Dam', 38.870622, -90.151639, 'insert Site'],
	    ['Milam', 38.655978, -90.123811,'milam.html'],
	    ['Missouri & Mississippi Confluence', 38.816378, -90.119692,'insert Site'],  
	    ['Modoc Ferry', 38.009711, -90.053083,'insert Site'],  
	    ['National Archives & Record Administration', 38.302856, -90.304133,'insert Site'], 
	    ['National City', 38.638292, -90.148397,'nationalCity.html'], 
	    ['New Valmeyer', 38.308297, -90.279775,'insert Site'],  
	    ['Old Valmeyer', 38.294528, -90.312883,'insert Site'], 
	    ['Olin Brass',  38.888360, -90.113417,'brass.html'],
	    ['Olin Brass Manufacturing Plant', 38.888492, -90.113567,'insert Site'], 
	    ['Pulcher', 38.495846, -90.231493,'insert Site'], 
	    ['Prairie Du Pont Creek', 38.551607, -90.201470,'insert Site'], 
	    ['Prairie Du Rocher', 38.082825, -90.096803,'insert Site'], 
	    ['Riverlands Audubon Center', 38.863083, -90.176272,'insert Site'], 
	    ['Rush City', 38.607606, -90.168136,'insert Site'], 
	    ['Sauget', 38.597483, -90.176611,'sauget.html'],
	    ['Sears Mail-order Homes Neighborhood', 38.85825, -90.080472,'insert Site'],
	    ['Site of 1993 Mississippi River Flood Levee Breach', 38.343228, -90.319942,'insert Site'],
	    ['South Roxana Mounds', 38.829044, -90.066011,'southRoxana.html'],
	    ['Tri-Cities Speedway', 38.752233, -90.097022,'insert Site'],
	    ['US Army Corp of Engineers Chain of Rocks Canal Overlook', 38.793739, -90.119214,'canalOverlook.html'],
	    ['US Steel Plant', 38.694903, -90.128161,'insert Site'],
	    ['USACE Levees', 38.547311, -90.187058,'insert Site'],
	    ['Watco Railroad Mechanical Dome', 38.871994, -90.106222,'railroadDome.html'],
	    ['Watco Railroad Refinery Museum', 38.838406, -90.074638,'railroadMuseum.html'],
	    ['Wood River Historical Society Museum', 38.860592, -90.099431,'insert Site'],
	    ['Wood River Power Station', 38.863922, -90.133911,'insert Site'],
	    ['Wood River Refinery', 38.845214, -90.068736,'insert Site'],
	    ['Wood River Refinery Museum',  38.838406, -90.074638,'refineryMuseum.html'],
	    ['1993 Levee Breach', 38.340653, -90.321088,'refineryMuseum.html'],
	    ['Cahokia Canal Pump Station', 38.637083, -90.171982, 'pumpStation.html'],
	    ];


// Content is what is displayed on Hover
var content = [
['<div id="bodyContent">' + '<p>Alorton</p>'],
['<div id="bodyContent">' + '<p>Alton</p>'],
['<div id="bodyContent">' +'<p>Alton Steel</p>'],
['<div id="bodyContent">' + '<p>Central Port</p>'],
['<div id="bodyContent">' + '<p>Field Station HQ</p>'],
['<div id="bodyContent">' + '<p>Brooklyn</p>'],
['<div id="bodyContent">' + '<p>Courthouse</p>'],
['<div id="bodyContent">' + '<p>Creek Chanel</p>'],
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
['<div id="bodyContent">' + '<p>Raceway</p>'],
['<div id="bodyContent">' + '<p>Fort Chartres</p>'],
['<div id="bodyContent">' + '<p>Fults</p>'],
['<div id="bodyContent">' + '<p>Commerce Center</p>'],
['<div id="bodyContent">' + '<p>Geyser</p>'],
['<div id="bodyContent">' + '<p>Grizzlies</p>'],
['<div id="bodyContent">' + '<p>Motorsports</p>'],
['<div id="bodyContent">' + '<p>Granite City</p>'],
['<div id="bodyContent">' + '<p>Army Depot</p>'],
['<div id="bodyContent">' + '<p>Holcim</p>'],
['<div id="bodyContent">' + '<p>Horseradish</p>'],
['<div id="bodyContent">' + '<p>Horseshoe</p>'],
['<div id="bodyContent">' + '<p>Kaskaski</p>'],
['<div id="bodyContent">' + '<p>Kaskaskia</p>'],
['<div id="bodyContent">' + '<p>Kidd</p>'],
['<div id="bodyContent">' + '<p>Laclede Steel</p>'],
['<div id="bodyContent">' + '<p>Lewis & Clark</p>'],
['<div id="bodyContent">' + '<p>Lock & Dam #27</p>'],
['<div id="bodyContent">' + '<p>Lowland Forests</p>'],
['<div id="bodyContent">' + '<p>McKinley Bridge</p>'],
['<div id="bodyContent">' + '<p>Melvin Price</p>'],
['<div id="bodyContent">' + '<p>Landfill</p>'],
['<div id="bodyContent">' + '<p>Confluence</p>'],
['<div id="bodyContent">' + '<p>Modoc Ferry</p>'],
['<div id="bodyContent">' + '<p>National Archives</p>'],
['<div id="bodyContent">' + '<p>National City</p>'],
['<div id="bodyContent">' + '<p>New Valmeyer</p>'],
['<div id="bodyContent">' + '<p>Old Valmeyer</p>'],
['<div id="bodyContent">' + '<p>Olin Brass</p>'],
['<div id="bodyContent">' + '<p>//</p>'],
['<div id="bodyContent">' + '<p>Pulcher</p>'],
['<div id="bodyContent">' + '<p>Prairie Du Pont</p>'],
['<div id="bodyContent">' + '<p>//</p>'],
['<div id="bodyContent">' + '<p>Riverlands</p>'],
['<div id="bodyContent">' + '<p>Rush City</p>'],
['<div id="bodyContent">' + '<p>Sauget</p>'],
['<div id="bodyContent">' + '<p>Sears Neighborhood</p>'],
['<div id="bodyContent">' + '<p>Levee Breach</p>'],
['<div id="bodyContent">' + '<p>South Roxana Mound</p>'],
['<div id="bodyContent">' + '<p>Speedway</p>'],
['<div id="bodyContent">' + '<p>Overlook</p>'],
['<div id="bodyContent">' + '<p>US Steel</p>'],
['<div id="bodyContent">' + '<p>USACE</p>'],
['<div id="bodyContent">' + '<p>Watco</p>'],
['<div id="bodyContent">' + '<p>Railroad Museum</p>'],
['<div id="bodyContent">' + '<p>Historical Museum</p>'],
['<div id="bodyContent">' + '<p>Power Station</p>'],
['<div id="bodyContent">' + '<p>Refinery</p>'],
['<div id="bodyContent">' + '<p>Refinery Museum</p>'],
['<div id="bodyContent">' + '<p>Breach</p>'],
['<div id="bodyContent">' + '<p>Pump Station</p>'],
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


// $('.splashClose').on('click touchstart', function() {
// 	$(this).animate({opacity: '0'}, 300);
// 	$('.splashDescription').animate({opacity: '0'}, 300);
// 	$('.splashDescription').css({"z-index": '-10'}, 300); 
// });

$(document).on('ready', checkSplash);

function checkSplash(){
	var visit = localStorage.getItem("visit");
	localStorage.setItem("visit", "true");
    //once the mouse is clicked the <splashClose>
    $(".splashClose").on('click touchstart', function(){
         //get the variable value from local storage and compare it
         
         $(this).animate({opacity: '0'}, 300);
         $('.splashDescription').animate({opacity: '0'}, 300);
         $('.splashDescription').css({"z-index": '-10'}, 300); 	
         if(visit==="true") {
         	localStorage.setItem("visit", "false");
         }
     });

    if (visit === "false") {
    	$('.splashClose').animate({opacity: '0'}, 10);
    	$('.splashDescription').animate({opacity: '0'}, 10);
    	$('.splashDescription').css({"z-index": '-10'}, 10); 	
    };
}

$('.home').mouseover('click touchstart', function() {
	$('.menu').animate({opacity: '1'}, 120); 
	$('.menuLinks').animate({opacity: '1'}, 120); 
	$('.menuLinks').css({"z-index": '-10'}, 120); 
	$('.home').animate({opacity: '0'}, 120); 

});

$('.menu').mouseleave('click touchstart', function() {
	$('.menuLinks').animate({opacity: '0'}, 120); 
	$('.home').animate({opacity: '1'}, 120); 
});

// hover over the home
// menulinks show up
// leave menu, everything disappear



});

