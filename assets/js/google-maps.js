$(document).ready(function(){
    initMap = function(){
        var myLatlng = new google.maps.LatLng(33.6942888,73.0351711);
        var mapOptions = {
          center: myLatlng,
          zoom: 15,
          disableDefaultUI: true,
          zoomControl: true,
        };
        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"Hello World!"
        });
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        marker.setMap(map);
      
    }; 
    initMap();
});