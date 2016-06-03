
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
     ['Downtown Airport', 38.578027,-90.162731, 'airport.html'],
     ['Alorton',  38.598275, -90.124939, 'alorton.html'],
     ['Alton', 38.890194,-90.186743, 'alton.html'],
     ['Central Port',  38.711324, -90.172260, 'americasCentralPort.html'],
     ['Booker T. Washington Cemetery', 38.553772, -90.102634, 'bookerTWashington.html'],
     ['Olin Brass',  38.888360, -90.113417, 'brass.html'],
     ['1993 Levee Breach', 38.340653, -90.321088, 'breach.html'],
     ['Chain of Rocks Bridge', 38.757970,-90.167914, 'bridge.html'],
     ['Brooklyn',  38.657758, -90.169039, 'brooklyn.html'],
     ['Cahokia Canal', , 'cahokiaCanal.html'],
     ['Chain of Rocks Canal', 38.760148, -90.139328, 'canal.html'],
     ['Canal Overlook',  38.793738, -90.119215, 'canalOverlook.html'],
     ['Old Channel of Wood River ',  38.861303, -90.111696, 'channel.html'],
     ['Chemetco',  38.797708, -90.098816, 'chemetco.html'],
     ['Collinsville',  38.688242, -90.011326, 'collinsville.html'],
     ['Confluence', 38.812718, -90.118006, 'confluence.html'],
     ['Confluence Tower',  38.815952, -90.106004, 'confluenceTower.html'],
     ['Prairie du Pont Creek', 38.551607, -90.201470, 'creek.html'],
     ['Dam No. 27', 38.756382,-90.171517, 'dam27.html'],
     ['Deer Park', 38.846784, -90.082470, 'deerPark.html'],
     ['Granite City Army Depot', 38.691183, -90.176091, 'depot.html'],
     ['Cahokia Diversion Canal', 38.804668, -90.067069, 'diversionCanal.html'],
     ['Camp DuBois', 38.849717, -90.119760, 'duBois.html'],
     ['Dupo',  38.522706, -90.210495, 'dupo.html'],
     ['Eagle Cliff',  38.364697, -90.261725, 'eaglecliffCemetery.html'],
     ['East Carondelet',  38.540949, -90.232768, 'eastCarondelet.html'],
     ['East St. Louis', 38.626846,-90.159777, 'eastStLouis.html'],
     ['Fairmount Park Raceway',  38.662895, -90.035565, 'fairmountParkRaceway.html'],
     ['Modoc Ferry', 38.009568, -90.053401, 'ferry.html'],
     ['Fults Hill Prairie', 38.155910,-90.189697, 'fults.html'],
     ['Gateway Commerce Center', 38.769133, -90.066700, 'gateway.html'],
     ['Grand Marais', 38.582509,-90.084609, 'grandMarais.html'],
     ['Gateway Grizzlies', 38.565715, -90.135919, 'grizzlies.html'],
     ['Horseshoe Lake',  38.699222, -90.067540, 'horseshoeLake.html'],
     ['Kaskaskia',  37.921475, -89.913523, 'kaskaskia.html'],
     ['Kidd Lake Wetland', 38.144126, -90.170092, 'kidd.html'],
     ['Laclede Steel',  38.885131, -90.143912, 'lacledeSteel.html'],
     ['Lewis & Clark Monument',  38.802470, -90.102143, 'lewisClark.html'],
     ['Lock No. 27',  38.702655, -90.180801, 'lock27.html'],
     ['Long Lake', 38.731564,-90.075837, 'longLake.html'],
     ['Lowland Forests', 38.417596, -90.262183, 'lowlandForests.html'],
     ['McKinley Bridge + Tri-Cities Roadside Park',  38.668249, -90.174737, 'mcKinley.html'],
     ['Milam Landfill', 38.655978, -90.123811, 'milam.html'],
     ['Moredock Lake', 38.324877,-90.295534, 'moredock.html'],
     ['Gateway Motorsports Park', 38.649807, -90.134907, 'motorsport.html'],
     ['Rock City', 38.302856,-90.304134, 'NARA.html'],
     ['National City',  38.641784, -90.149812, 'nationalCity.html'],
     ['Old Man River', 38.636745, -90.165637, 'oldManRiver.html'],
     ['Powell Mound', 38.661052, -90.091028, 'powellMound.html'],
     ['Wood River Power Station', 38.863923, -90.133911, 'power.html'],
     ['Cahokia Power Plant', 38.606402, -90.180386, 'powerPlant.html'],
     ['Pulcher Site', 38.495846, -90.231493, 'pulcher.html'],
     ['Cahokia Canal Pump Station', 38.637083, -90.171982, 'pumpStation.html'],
     ['Watco Railroad Mechanical Dome', 38.871994, -90.106222, 'railroadDome.html'],
     ['Wood River Refinery Museum', 38.838406, -90.074638, 'refineryMuseum.html'],
     ['Sauget',  38.600529, -90.172838, 'sauget.html'],
     ['South Roxana Mound',  38.829046, -90.066011, 'southRoxana.html'],
     ['Falling Spring', 38.530724,-90.185428, 'spring.html'],
     ['Spring Lake', 38.636963,-90.063592, 'springLake.html'],
     ['St. Phillipe', 38.122228,-90.208355, 'stPhillipe.html'],
     ['Valmeyer', 38.294528,-90.312885, 'valmeyer.html'],
     ['Wann Junction Disaster', 38.883727, -90.109685, 'wannJunction.html'],
     ['Wilson Mound', 38.652007,-90.101660, 'wilson.html'],
     ['Old American Zinc', 38.647372,-90.097819, 'zinc.html'],
     ];


// Content is what is displayed on Hover
var content = [
['<div id=bodyContent>' + '<p>Airport</p>'],
['<div id=bodyContent>' + '<p>Alorton</p>'],
['<div id=bodyContent>' + '<p>alton</p>'],
['<div id=bodyContent>' + '<p>Central Port</p>'],
['<div id=bodyContent>' + '<p>Booker T. Washington</p>'],
['<div id=bodyContent>' + '<p>Brass</p>'],
['<div id=bodyContent>' + '<p>Breach</p>'],
['<div id=bodyContent>' + '<p>Bridge</p>'],
['<div id=bodyContent>' + '<p>Brooklyn</p>'],
['<div id=bodyContent>' + '<p>cahokiaCanal</p>'],
['<div id=bodyContent>' + '<p>Canal</p>'],
['<div id=bodyContent>' + '<p>Overlook</p>'],
['<div id=bodyContent>' + '<p>Channel</p>'],
['<div id=bodyContent>' + '<p>Chemetco</p>'],
['<div id=bodyContent>' + '<p>Horseradish</p>'],
['<div id=bodyContent>' + '<p>Confluence</p>'],
['<div id=bodyContent>' + '<p>Tower</p>'],
['<div id=bodyContent>' + '<p>Creek</p>'],
['<div id=bodyContent>' + '<p>Dam #27</p>'],
['<div id=bodyContent>' + '<p>Deer Park</p>'],
['<div id=bodyContent>' + '<p>Depot</p>'],
['<div id=bodyContent>' + '<p>Diversion Canal</p>'],
['<div id=bodyContent>' + '<p>DuBois</p>'],
['<div id=bodyContent>' + '<p>Dupo</p>'],
['<div id=bodyContent>' + '<p>Eagle Cliff</p>'],
['<div id=bodyContent>' + '<p>East Carondelet</p>'],
['<div id=bodyContent>' + '<p>East St. Louis</p>'],
['<div id=bodyContent>' + '<p>Raceway</p>'],
['<div id=bodyContent>' + '<p>Ferry</p>'],
['<div id=bodyContent>' + '<p>Fults</p>'],
['<div id=bodyContent>' + '<p>Gateway</p>'],
['<div id=bodyContent>' + '<p>Grand Marais</p>'],
['<div id=bodyContent>' + '<p>Grizzlies</p>'],
['<div id=bodyContent>' + '<p>Horseshoe</p>'],
['<div id=bodyContent>' + '<p>Kaskaskia</p>'],
['<div id=bodyContent>' + '<p>Kidd</p>'],
['<div id=bodyContent>' + '<p>Laclede Steel</p>'],
['<div id=bodyContent>' + '<p>Lewis + Clark</p>'],
['<div id=bodyContent>' + '<p>Lock No. 27</p>'],
['<div id=bodyContent>' + '<p>Long Lake</p>'],
['<div id=bodyContent>' + '<p>Lowland Forests</p>'],
['<div id=bodyContent>' + '<p>McKinley Bridge</p>'],
['<div id=bodyContent>' + '<p>Landfill</p>'],
['<div id=bodyContent>' + '<p>Moredock</p>'],
['<div id=bodyContent>' + '<p>Motorsport</p>'],
['<div id=bodyContent>' + '<p>NARA</p>'],
['<div id=bodyContent>' + '<p>National City</p>'],
['<div id=bodyContent>' + '<p>Old Man River</p>'],
['<div id=bodyContent>' + '<p>Powell Mound</p>'],
['<div id=bodyContent>' + '<p>Power</p>'],
['<div id=bodyContent>' + '<p>Power Plant</p>'],
['<div id=bodyContent>' + '<p>Pulcher</p>'],
['<div id=bodyContent>' + '<p>Pump Station</p>'],
['<div id=bodyContent>' + '<p>Watco</p>'],
['<div id=bodyContent>' + '<p>Refinery Museum</p>'],
['<div id=bodyContent>' + '<p>Sauget</p>'],
['<div id=bodyContent>' + '<p>South Roxana</p>'],
['<div id=bodyContent>' + '<p>Spring</p>'],
['<div id=bodyContent>' + '<p>Spring Lake</p>'],
['<div id=bodyContent>' + '<p>St. Phillipe</p>'],
['<div id=bodyContent>' + '<p>Valmeyer</p>'],
['<div id=bodyContent>' + '<p>Wann Junction</p>'],
['<div id=bodyContent>' + '<p>Wilson</p>'],
['<div id=bodyContent>' + '<p>Zinc</p>'],
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

//==============splashPage only appear once================
$(document).on('ready', checkSplash);

function checkSplash(){
	var visit = sessionStorage.getItem("visit");
	
	sessionStorage.setItem("visit", "true");
    //once the mouse is clicked the <splashClose>
    $(".splashClose").on('click touchstart', function(){
         //get the variable value from local storage and compare it
         $(this).animate({opacity: '0'}, 300);
         $('.splashDescription').animate({opacity: '0'}, 300);
         $('.splashDescription').css({"z-index": '-10'}, 300); 	
         if(visit === "true") {
         	sessionStorage.setItem("visit", "false");
         } 

     });
    if (visit === "false"){
    	$('.splashClose').animate({opacity: '0'}, 5);
    	$('.splashDescription').animate({opacity: '0'}, 5);
    	$('.splashDescription').css({"z-index": '-10'}, 5); 
    	sessionStorage.setItem("visit", "false");
    }
}

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

// $('.menu').mouseleave('click touchstart', function() {
// 	$('.menuLinks').animate({opacity: '0'}, 120); 
// 	$('.home').animate({opacity: '1'}, 120); 
// });




});

