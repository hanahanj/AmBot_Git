
function geoTest() {

	if (google.loader.ClientLocation) {

		var latitude = google.loader.ClientLocation.latitude;
		var longitude = google.loader.ClientLocation.longitude;
		var city = google.loader.ClientLocation.address.city;
		var country = google.loader.ClientLocation.address.country;
		var country_code = google.loader.ClientLocation.address.country_code;
		var region = google.loader.ClientLocation.address.region;

        //var text = latitude + ' ,' + longitude;
        var text = city + ' ,' + region;

    } else {

    	var text = '';

    }

    return text;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
		function(m,key,value) {
			vars[key] = value;
		});
	return vars;
}

var fType = getUrlVars()["q"];





(function(mapDemo, $, undefined) {
	mapDemo.Directions = (function() {
		function _Directions() {
			var map,   
			directionsService, directionsDisplay, 
			autoSrc, autoDest, pinA, pinB, 

			markerA = new google.maps.MarkerImage('m1.png')		
			markerB = new google.maps.MarkerImage('m_None.png')

				// Caching the Selectors		
				$Selectors = {
					mapCanvas: jQuery('#mapCanvas')[0], 
					dirPanel: jQuery('#directionsPanel'),
					dirInputs: jQuery('.directionInputs'),
					dirSrc: jQuery('#dirSource'),
					dirDst: jQuery('#dirDestination'),
					getDirBtn: jQuery('#getDirections'),
					dirSteps: jQuery('#directionSteps'), 
					paneToggle: jQuery('#paneToggle'), 
					useGPSBtn: jQuery('#useGPS'), 
					paneResetBtn: jQuery('#paneReset')
				},
				
				autoCompleteSetup = function() {
					autoSrc = new google.maps.places.Autocomplete($Selectors.dirSrc[0]);
					autoDest = new google.maps.places.Autocomplete($Selectors.dirDst[0]);
				}, // autoCompleteSetup Ends

				directionsSetup = function() {
					directionsService = new google.maps.DirectionsService();
					directionsDisplay = new google.maps.DirectionsRenderer({
						polylineOptions: { 
							strokeColor: "black",
							strokeWeight: 10,
							strokeOpacity: 0.8
						},
						suppressMarkers: true
					});	
					
					directionsDisplay.setPanel($Selectors.dirSteps[0]);											
				}, // direstionsSetup Ends
				
				
				
				mapSetup = function() {		

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
	
     map = new google.maps.Map($Selectors.mapCanvas, {

     	// Update this location for Each site

     	center: new google.maps.LatLng(     38.689296, -90.008848),	
     	zoom: 16,
     	styles: styles,

     	 disableDefaultUI: true,

     	mapTypeId: google.maps.MapTypeId.SATELLITE
     });

     	// Update this location for Each site

     var Milam_Loc = new google.maps.LatLng(  38.689296, -90.008848);
    var imageMark1 = '../images/ABMarker6.png';

     var Milam_Mark = new google.maps.Marker({
     	position: Milam_Loc,
     	map: map,
     	icon: imageMark1,
	// animation: google.maps.Animation.DROP,
	title: 'Frank Holten State Park'
});


     autoCompleteSetup();
     directionsSetup();
     trafficSetup();
				}, // mapSetup Ends 
				
				directionsRender = function(source, destination) {
					$Selectors.dirSteps.find('.msg').hide();
					directionsDisplay.setMap(map);
					
					var request = {
						origin: source,
						destination: destination,
						provideRouteAlternatives: false, 
						travelMode: google.maps.DirectionsTravelMode.DRIVING
					};		
					
					directionsService.route(request, function(response, status) {
						if (status == google.maps.DirectionsStatus.OK) {

							directionsDisplay.setDirections(response);
							
							var _route = response.routes[0].legs[0]; 
							
							pinA = new google.maps.Marker({position: _route.start_location, map: map, icon: markerA}), 
							pinB = new google.maps.Marker({position: _route.end_location, map: map, icon: markerB});																	
						}
					});
				}, // directionsRender Ends
				
				fetchAddress = function(p) {
					var Position = new google.maps.LatLng(p.coords.latitude, p.coords.longitude),  
					Locater = new google.maps.Geocoder();
					
					Locater.geocode({'latLng': Position}, function (results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							var _r = results[0];
							$Selectors.dirSrc.val(_r.formatted_address);
						}
					});
				}, // fetchAddress Ends
				
				invokeEvents = function() {
					// Get Directions
					$Selectors.getDirBtn.on('click', function(e) {
						e.preventDefault();
						var src = $Selectors.dirSrc.val(), 
						dst = $Selectors.dirDst.val();
						
						directionsRender(src, dst);
					});
					
					// Reset Btn
					$Selectors.paneResetBtn.on('click', function(e) {
						$Selectors.dirSteps.html('');
						$Selectors.dirSrc.val('');
						$Selectors.dirDst.val('');
						
						if(pinA) pinA.setMap(null);
						if(pinB) pinB.setMap(null);		
						
						directionsDisplay.setMap(null);					
					});
					
					// Toggle Btn
					$Selectors.paneToggle.toggle(function(e) {
						$Selectors.dirPanel.animate({'left': '-=305px'});
						jQuery(this).html('&gt;');
					}, function() {
						$Selectors.dirPanel.animate({'left': '+=305px'});
						jQuery(this).html('&lt;');
					});
					
					// Use My Location / Geo Location Btn
					$Selectors.useGPSBtn.on('click', function(e) {		
						if (navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(function(position) {
								fetchAddress(position);
							});	
						}
					});
				}, //invokeEvents Ends 
				
				_init = function() {
					mapSetup();
					invokeEvents();
				}; // _init Ends
				
				this.init = function() {
					_init();

					var newStr = fType.split("+").join(" ");

					document.getElementById("dirDestination").value = newStr;
					document.getElementById("dirSource").value = "Enter Your Location Here";


				return this; // Refers to: mapDemo.Directions
			}
			return this.init(); // Refers to: mapDemo.Directions.init()
		} // _Directions Ends
		return new _Directions(); // Creating a new object of _Directions rather than a funtion
	}()); // mapDemo.Directions Ends
})(window.mapDemo = window.mapDemo || {}, jQuery);
