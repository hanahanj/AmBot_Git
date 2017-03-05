// THIS IS FOR MICHAEL ALLEN ITINERARY LINK ON ITINERARIES.HTML (NO PATH)
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
     	center: new google.maps.LatLng(38.757004, -90.043843),
     	mapTypeId: google.maps.MapTypeId.TERRAIN,
     	zoom: 12,
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
	    
	    ['Site 1', 38.757004, -90.043843, 'insert Site'],
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


});

