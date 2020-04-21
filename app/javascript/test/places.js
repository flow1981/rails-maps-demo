window.initMap = function (lat, lng) {
    let myCoords = new google.maps.LatLng(lat, lng);
    let mapOptions = {
    center: myCoords,
    zoom: 14
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    return map
}

console.log("places")

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: -34.397, lng: 150.644},
//       zoom: 8
//     });
// }
