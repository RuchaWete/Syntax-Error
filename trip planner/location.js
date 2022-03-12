let map, showLocation;
var locations = [
    ['User1', 28.648608, 77.250925, 1],
    ['User2', 29.618174, 77.242686, 2],
    ['User3', 28.663973, 78.241656, 3],
    ['User4', 29.620585, 78.228609, 4],
    ['User5', 30.636219, 77.213846, 5],
    ['User6', 28.622658, 79.277704, 6]
];
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
 showLocation = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Show everyone's Location";
  locationButton.classList.add("map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          
         showLocation.setPosition(pos);
         showLocation.setContent("My Location");
         showLocation.open(map);
          map.setCenter(pos);

        },
        () => {
          handleLocationError(true, showLocation, map.getCenter());
        }

        
      );
      
    } else {
      
      handleLocationError(false, showLocation, map.getCenter());
    }
  });
  var infowindow = new google.maps.InfoWindow();
            var marker, i;
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                });
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(`${locations[i][0]}`);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
  
}

function handleLocationError(browserHasGeolocation, showLocation, pos) {
 showLocation.setPosition(pos);
 showLocation.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
 showLocation.open(map);
}
