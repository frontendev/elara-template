
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  console.log("tooltip enabled");
});

function initMap() {
  console.log("Loading map...");
  var myLatlng = new google.maps.LatLng(-25.5492078,-54.5524406);
  var mapDiv = document.getElementById('c-map');

  var map = new google.maps.Map(mapDiv, {
    center: myLatlng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hotel'
  });
  marker.setMap(map);
}
