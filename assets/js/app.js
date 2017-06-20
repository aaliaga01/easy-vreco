function initMap(){

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: -33.4569400, lng: -70.6482700}//mapa parte en santiago
        });
        directionsDisplay.setMap(map);

        /*var input =  @type {!HTMLInputElement} (
            document.getElementById('origen'));

        var infowindow = new google.maps.InfoWindow();

        var marker = new google.maps.Marker({
          map: map,
          anchorPoint: new google.maps.Point(0, -29)});

        var autocomplete = new google.maps.places.Autocomplete(input1);
        autocomplete.bindTo('bounds', map);

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          marker.setVisible(false);
        });*/

  
    document.getElementById("ruta").addEventListener("click", function(){//para que funcione con el boton
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });


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

    function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
          position: location,
          icon: '/assets/img/icono2.png',
          map: map
        });
      }

}


/*var  autocompletar= function(map){
    var originInput = document.getElementById('origen');
    var destinationInput = document.getElementById('destino');

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)});

    var orAutocomplete = new google.maps.places.Autocomplete(originInput, destinationInput);
        orAutocomplete.bindTo('bounds', map);*/



/*function AutocompleteDirection(map) {
        
        this.map = map;
        this.originPlaceId = document.getElementById('origen');
        this.destinationPlaceId = document.getElementById('destino');
        this.travelMode = 'BICYCLING';
        var originInput = document.getElementById('origen');
        var destinationInput = document.getElementById('destino');
        //var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput, {placeIdOnly: true});

        var destinationAutocomplete = new google.maps.places.Autocomplete(
          destinationInput, {placeIdOnly: true});

       //this.setupClickListener('changemode-walking', 'WALKING');
       //this.setupClickListener('changemode-transit', 'TRANSIT');
       //this.setupClickListener('changemode-driving', 'DRIVING');

        //this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        //this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
      }*/

     /*AutocompleteDirection.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
         if (mode === 'ORIG') {
          me.originPlaceId = place.place_id;
         } 
          else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };*/

     /* AutocompleteDirection.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;

        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      };*/

