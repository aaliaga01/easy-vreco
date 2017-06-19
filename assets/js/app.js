function initMap(){
	//--------------
	/*var map = new google.maps.Map(document.getElementById("map"), {
		zoom:17,
		center: {lat: -33.4569400, lng: -70.6482700},
		mapTypeControl:false,
		zoomControl: false,
		streetViewControl:false
	});

	var geocoder = new google.maps.Geocoder();

	document.getElementById("ruta").addEventListener("click",function(){
		geocodeAddress(geocoder,map)
	});

	function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('origen').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
	}*/

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: -33.4569400, lng: -70.6482700}
        });
        directionsDisplay.setMap(map);

  
		document.getElementById("ruta").addEventListener("click", function(){
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });


      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('origen').value,
          destination: document.getElementById('destino').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

//buscar mi posicion actual
/*function buscar(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
}

document.getElementById("encuentrame").addEventListener("click",buscar);
var latitud,longitud;

var funcionExito = function(posicion) {
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat:latitud, lng:longitud},
		animation: google.maps.Animation.DROP,
		map:map
	});

	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
}

var funcionError = function (error) {
	alert("Tenemos un problema para encontrar tu ubicación");
	}*/

}



/*trazar ruta
function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: -33.4569400, lng: -70.6482700}
        });
        directionsDisplay.setMap(map);

        document.getElementById('ruta').addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var waypts = [];
        var checkboxArray = document.getElementById('waypoints');
        for (var i = 0; i < checkboxArray.length; i++) {
          if (checkboxArray.options[i].selected) {
            waypts.push({
              location: checkboxArray[i].value,
              stopover: true
            });
          }
        }

        directionsService.route({
          origin: document.getElementById('salida').value,
          destination: document.getElementById('fin').value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
                  '</b><br>';
              summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
              summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
              summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });*/
      