

//   import init from './init';
  
//   chargy.gmap.init = init;

console.log("hello map/index")

window.initMap = function (lat, lng) {
    let myCoords = new google.maps.LatLng(lat, lng);
    let mapOptions = {
    center: myCoords,
    zoom: 14
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    return map
}