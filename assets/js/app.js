function initMap(){

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: -33.4569400, lng: -70.6482700}//mapa parte en santiago
        });
        directionsDisplay.setMap(map);

        //para autocompletar
 		var origenAutoComp = (document.getElementById('origen')); //toma punto de origen
  		var autocompletar = new google.maps.places.Autocomplete(origenAutoComp);
  		autocompletar.bindTo('bounds', map);

  		var destinoAutoComp = (document.getElementById('destino')); //toma punto de destino
  		var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
  		autocompletar.bindTo('bounds', map);


  
    document.getElementById("ruta").addEventListener("click", function(){//para que funcione con el boton
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
        
        var directionsService = new google.maps.DirectionsService;// guarda la ubicacion
        var directionsDisplay = new google.maps.DirectionsRenderer;// muestra la ubicacion

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {//toma los datos de ambos input y los busca
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

//Ejercicio guiado
    function buscar(){
        if (navigator.geolocation) {
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
            animation: google.maps.Animation.BOUNCE,
            map: map,
            icon: 'assets/img/icon2.png',
        });
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
}
    var funcionError = function (error) {
    alert("No es posible encontrar tu ubicacion");
    }

}

