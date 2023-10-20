/*

Template: Sam Martin - Personal Vcard Resume HTML Template
Author: potenzaglobalsolutions.com
Version: 1.1 
Design and Developed by: potenzaglobalsolutions.com

NOTE:  

*/

(function($){
  "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */

    function initialize_map() {

        // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

      var myLatLng = new google.maps.LatLng(50.935595,6.961713);

      var mapOptions = {
          zoom: 8,
          center: myLatLng,
          disableDefaultUI: true,
          scrollwheel: true,
          navigationControl: true,
          mapTypeControl: true,
          scaleControl: false,
          draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
       styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions,{gestureHandling: "ccoperative",});

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.935595,6.961713),
        map: map,
    icon: 'images/icons/map-marker.png',
    });
    }

    google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);
