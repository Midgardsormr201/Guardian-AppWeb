const map = L.map('map-template').setView([-33.437280, -70.634356],17);


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var lc = L.control.locate({
    position: 'topleft',
    setView: 'always',
    strings: {
          title: "Muestrame donde estoy!"
        }
    }).addTo(map);

var c = new L.Control.Coordinates();
    c.addTo(map);
    function onMapClick(e) {
      c.setCoordinates(e);
    }
    map.on('click', onMapClick);    