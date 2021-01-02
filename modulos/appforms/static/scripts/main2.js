getData();
async function getData() {
  const response = await fetch("../static/Reportes.csv");
  const data = await response.text();
  console.log(data);
  const rows = data.trim().split("\n").slice([1]);
  console.log(rows);
  i = 0
  var fech = new Date()
  var icono = L.icon({
    iconUrl: '../static/images/peligro.png',

    iconSize:     [38, 60], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 65], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  rows.forEach(elt => {
    console.log(fech)
    i = i+1
    const row = elt.split(",");
    var anon = ""
    if (String(row[1])==="True"){
       var anon = "Anónimo";
    }
    else {
      var anon = row[0];
    }
    const lat = row[2];
    const lat1 = parseFloat(String(row[2]));
    const lng = row[3];
    const lng1 = parseFloat(String(row[3]));
    const det = row[4];
    const fecha = String(row[5]).split(" ");
    console.log(anon, lat, lng, det, fecha);
    var diferencia = (parseInt(fech - new Date(fecha)))/86400000
    console.log(diferencia)

    //Condicionales Para generar zonas de colores personalizadas
    if (diferencia >= 0 && diferencia < 14) {
      var marker = L.marker([lat, lng], {icon: icono}).addTo(map);
      marker.bindPopup("<b>"+String(anon)+" el "+String(fecha[0])+" a las "+String(fecha[1])+"</b><br>"+String(det)+"");
      var circle = L.circle([lat, lng], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.6,
      radius: 170
      }).addTo(map);
    }
    else if (diferencia >= 14 && diferencia < 21) {
      var marker = L.marker([lat, lng], {icon: icono}).addTo(map);
      marker.bindPopup("<b>"+String(anon)+" el "+String(fecha[0])+" a las "+String(fecha[1])+"</b><br>"+String(det)+"");
      var circle = L.circle([lat, lng], {
      color: 'orange',
      fillColor: '#ff7e00',
      fillOpacity: 0.6,
      radius: 170
      }).addTo(map);
    }
    else if (diferencia >= 21 && diferencia < 28 ) {
      var marker = L.marker([lat, lng], {icon: icono}).addTo(map);
      marker.bindPopup("<b>"+String(anon)+" el "+String(fecha[0])+" a las "+String(fecha[1])+"</b><br>"+String(det)+"");
      var circle = L.circle([lat, lng], {
      color: 'yellow',
      fillColor: '#F0DB4F',
      fillOpacity: 0.6,
      radius: 170
      }).addTo(map);
    }
  });
}