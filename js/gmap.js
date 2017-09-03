// Add googleMap display
function initMap() {
  var map = new google.maps.Map(document.getElementById("googlemap"), {
    center: {lat: 22.336464, lng: 114.265033},
    zoom: 17,
    scrollwheel: false,
    draggable: true,
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(22.336464, 114.265033),
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initMap);
