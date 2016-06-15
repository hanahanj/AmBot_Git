// THIS IS FOR MICHAEL ALLEN ITINERARY
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
{lat:37.9227376, lng:-89.9133968},//point 4
{lat:37.9182688, lng:-89.9115086},//point 5
{lat:37.9054704, lng:-89.9568272},//point 6
{lat:37.8911795, lng:-89.9498749},//point 7
{lat:37.8875217, lng:-89.9438667},//point 8
{lat:37.8793248, lng:-89.9491882},//point 9
{lat:37.8747179, lng:-89.9427509},//point 10
{lat:37.8697042, lng:-89.9474716},//point 11
{lat:37.8561518, lng:-89.9306488},//point 12
{lat:37.8558807, lng:-89.8983765},//point 13
{lat:37.8588625, lng:-89.8921967},//point 14
{lat:37.8575072, lng:-89.8578644},//point 15
{lat:37.8542543, lng:-89.8328018},//point 16
{lat:37.8637414, lng:-89.8303986},//point 17
{lat:37.8726853, lng:-89.8321152},//point 18
{lat:37.8957177, lng:-89.8431015},//point 19
{lat:37.9043868, lng:-89.8338318},//point 20
{lat:37.9604406, lng:-89.9048996},//point 21
{lat:37.9880455, lng:-89.9258423},//point 22
{lat:38.0069841, lng:-89.9158859},//point 23
{lat:38.0091482, lng:-89.904213},//point 24
{lat:38.0175335, lng:-89.9083328},//point 25
{lat:38.0159106, lng:-89.9687576},//point 26
{lat:38.0507947, lng:-90.0374222},//point 27
{lat:38.0537685, lng:-90.0357056},//point 28
{lat:38.0605268, lng:-90.0611115},//point 29
{lat:38.0840407, lng:-90.0971603},//point 30
{lat:38.0869456, lng:-90.0982761},//point 31
{lat:38.087959, lng:-90.0972462},//point 32
{lat:38.0892425, lng:-90.1009369},//point 33
{lat:38.0987669, lng:-90.1093483},//point 34
{lat:38.1020089, lng:-90.1143265},//point 35
{lat:38.1184871, lng:-90.1284027},//point 36
{lat:38.1350967, lng:-90.1512337},//point 37
{lat:38.1583167, lng:-90.1953506},//point 38
{lat:38.1645254, lng:-90.2034187},//point 39
{lat:38.169654, lng:-90.2142334},//point 40
{lat:38.1857121, lng:-90.236721},//point 41
{lat:38.1909741, lng:-90.2429008},//point 42
{lat:38.2140415, lng:-90.2653885},//point 43
{lat:38.2120183, lng:-90.2689934},//point 44
{lat:38.2164692, lng:-90.2762032},//point 45
{lat:38.2276626, lng:-90.2863312},//point 46
{lat:38.2337306, lng:-90.2885628},//point 47
{lat:38.2484265, lng:-90.291996},//point 48
{lat:38.2555712, lng:-90.2988625},//point 49
{lat:38.2569191, lng:-90.2966309},//point 50
{lat:38.2699932, lng:-90.301609},//point 51
{lat:38.2726885, lng:-90.3010941},//point 52
{lat:38.2732276, lng:-90.3175735},//point 53
{lat:38.2765967, lng:-90.3258133},//point 54
{lat:38.278079, lng:-90.3256416},//point 55
{lat:38.278618, lng:-90.3311348},//point 56
{lat:38.2759229, lng:-90.3314781},//point 57
{lat:38.2776747, lng:-90.3500175},//point 58
{lat:38.2871071, lng:-90.3486443},//point 59
{lat:38.2923618, lng:-90.3440094},//point 60
{lat:38.296673, lng:-90.3287315},//point 61
{lat:38.2945174, lng:-90.3175735},//point 62
{lat:38.2947869, lng:-90.3110504},//point 63
{lat:38.296673, lng:-90.3077888},//point 64
{lat:38.2964036, lng:-90.2993774},//point 65
{lat:38.3012534, lng:-90.2890778},//point 66
{lat:38.30287, lng:-90.2816963},//point 67
{lat:38.3058335, lng:-90.2765465},//point 68
{lat:38.3067765, lng:-90.2816963},//point 69
{lat:38.311895, lng:-90.2822113},//point 70
{lat:38.3124338, lng:-90.2777481},//point 71
{lat:38.3135113, lng:-90.2753448},//point 72
{lat:38.3202455, lng:-90.2720833},//point 73
{lat:38.3283258, lng:-90.2782631},//point 74
{lat:38.3326349, lng:-90.2724266},//point 75
{lat:38.3388287, lng:-90.2751732},//point 76
{lat:38.3510803, lng:-90.2758598},//point 77
{lat:38.3622529, lng:-90.280323},//point 78
{lat:38.3625221, lng:-90.2725983},//point 79
{lat:38.3664254, lng:-90.2622986},//point 80
{lat:38.3854005, lng:-90.2561188},//point 81
{lat:38.389168, lng:-90.2566338},//point 82
{lat:38.3981822, lng:-90.2535439},//point 83
{lat:38.4363796, lng:-90.2344894},//point 84
{lat:38.453992, lng:-90.227623},//point 85
{lat:38.4623261, lng:-90.2279663},//point 86
{lat:38.462595, lng:-90.2204132},//point 87
{lat:38.4643423, lng:-90.2231598},//point 88
{lat:38.4690465, lng:-90.2238464},//point 89
{lat:38.4831573, lng:-90.2200699},//point 90
{lat:38.4948469, lng:-90.2125168},//point 91
{lat:38.4986087, lng:-90.2114868},//point 92
{lat:38.503445, lng:-90.2078819},//point 93
{lat:38.5055944, lng:-90.2039337},//point 94
{lat:38.5164746, lng:-90.2109718},//point 95
{lat:38.5370215, lng:-90.2025604},//point 96
{lat:38.5436007, lng:-90.1974106},//point 97
{lat:38.5506491, lng:-90.2016163},//point 98
{lat:38.5547436, lng:-90.200243},//point 99
{lat:38.5587036, lng:-90.1979256},//point 100
{lat:38.5668914, lng:-90.1908016},//point 101
{lat:38.5708507, lng:-90.1898575},//point 102
{lat:38.5721257, lng:-90.1877975},//point 103
{lat:38.5670927, lng:-90.1814461},//point 104
{lat:38.5641398, lng:-90.1763821},//point 105
{lat:38.5619251, lng:-90.1752663},//point 106
{lat:38.5590392, lng:-90.1721764},//point 107
{lat:38.5619251, lng:-90.1752663},//point 108
{lat:38.5641398, lng:-90.1763821},//point 109
{lat:38.5650794, lng:-90.1725197},//point 110
{lat:38.5649452, lng:-90.1671124},//point 111
{lat:38.5669585, lng:-90.1647949},//point 112
{lat:38.5680993, lng:-90.1671124},//point 113
{lat:38.5754138, lng:-90.1760387},//point 114
{lat:38.5764874, lng:-90.1761246},//point 115
{lat:38.5803791, lng:-90.172348},//point 116
{lat:38.5859479, lng:-90.1698589},//point 117
{lat:38.5941326, lng:-90.168829},//point 118
{lat:38.5954072, lng:-90.1676273},//point 119
{lat:38.5957426, lng:-90.1646233},//point 120
{lat:38.5984259, lng:-90.1611042},//point 121
{lat:38.601109, lng:-90.1642799},//point 122
{lat:38.5994321, lng:-90.1668549},//point 123
{lat:38.6006395, lng:-90.172863},//point 124
{lat:38.6137855, lng:-90.1687431},//point 125
{lat:38.617407, lng:-90.1642799},//point 126
{lat:38.6214306, lng:-90.1690006},//point 127
{lat:38.6223694, lng:-90.1764679},//point 128
{lat:38.6377239, lng:-90.1731205},//point 129
{lat:38.6289407, lng:-90.1750088},//point 130
{lat:38.6278679, lng:-90.1652241},//point 131
{lat:38.6256551, lng:-90.1625633},//point 132
{lat:38.6288066, lng:-90.1555252},//point 133
{lat:38.6253199, lng:-90.1514912},//point 134
{lat:38.6308852, lng:-90.1439381},//point 135
{lat:38.6407408, lng:-90.155611},//point 136
{lat:38.6433553, lng:-90.1514053},//point 137
{lat:38.6459698, lng:-90.1545811},//point 138
{lat:38.6433553, lng:-90.1514053},//point 139
{lat:38.6407408, lng:-90.155611},//point 140
{lat:38.6492544, lng:-90.1656532},//point 141
{lat:38.650461, lng:-90.1656532},//point 142
{lat:38.6582362, lng:-90.1702023},//point 143
{lat:38.6613863, lng:-90.1686573},//point 144
{lat:38.6632628, lng:-90.1701164},//point 145
{lat:38.6688252, lng:-90.1702023},//point 146
{lat:38.6713717, lng:-90.1729488},//point 147
{lat:38.6716397, lng:-90.1759529},//point 148
{lat:38.6691603, lng:-90.1748371},//point 149
{lat:38.6628607, lng:-90.1750088},//point 150
{lat:38.6691603, lng:-90.1748371},//point 151
{lat:38.6716397, lng:-90.1759529},//point 152
{lat:38.6757273, lng:-90.1741505},//point 153
{lat:38.6832318, lng:-90.1729488},//point 154
{lat:38.6936831, lng:-90.1678848},//point 155
{lat:38.7014536, lng:-90.1676273},//point 156
{lat:38.7015876, lng:-90.1438522},//point 157
{lat:38.7042669, lng:-90.1402473},//point 158
{lat:38.7019895, lng:-90.1371574},//point 159
{lat:38.7022574, lng:-90.1156998},//point 160
{lat:38.7023914, lng:-90.1136398},//point 161
{lat:38.7054725, lng:-90.1134682},//point 162
{lat:38.7096251, lng:-90.1035118},//point 163
{lat:38.7558235, lng:-90.1038551},//point 164
{lat:38.7582331, lng:-90.097332},//point 165
{lat:38.7618472, lng:-90.0935555},//point 166
{lat:38.7710825, lng:-90.0923538},//point 167
{lat:38.780049, lng:-90.0870323},//point 168
{lat:38.7799152, lng:-90.0849724},//point 169
{lat:38.7915566, lng:-90.0839424},//point 170
{lat:38.7971759, lng:-90.0923538},//point 171
{lat:38.79838, lng:-90.0920105},//point 172
{lat:38.798246, lng:-90.0827408},//point 173
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

