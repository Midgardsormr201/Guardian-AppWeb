var map = L.map('map').setView([-33.437280, -70.634356],17);
//Función geolocalizador
var lc = L.control.locate({
initialZoomLevel: 14,
position: 'topleft',
setView: 'always',
strings: {
      title: "Muestrame donde estoy!"
    }
}).addTo(map);
//Función geolocalizador
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org/%22%3EOpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/%22%3ECC-BY-SA</a>, Imagery © <a href="http://cloudmade.com/%22%3ECloudMade</a>',
maxZoom: 18
}).addTo(map);

//Función coordenadas
var c = new L.Control.Coordinates();
c.addTo(map);
function onMapClick(e) {
  c.setCoordinates(e);
}
map.on('click', onMapClick);
//Función coordenadas

//Función buscador
var osmGeocoder = new L.Control.OSMGeocoder({
placeholder: 'Buscar Ubicación',
text: 'Buscar',
collapsed: true,
position: 'topright',
});
map.addControl(osmGeocoder);
