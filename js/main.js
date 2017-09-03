$(document).on("click", ".nav a", function(item) {
  // Collapse navbar automatically after click on an item
  $("#ipelNavbar").collapse("hide");
})

$(document).on("click", "a[href='#ipel']", function(item) {
  // Add smooth scrolling to all internal links
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
    });
  }
})

$(document).ready(function() {
  // Last modified field
  if (document.getElementById("lastupdate") !== null)
    document.getElementById("lastupdate").innerHTML = "Last modified: " + document.lastModified;
})

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
