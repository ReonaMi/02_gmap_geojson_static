let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat:-6.886497, lng: 112.008156  },
  });
   
  map.data.loadGeoJson(
    "geojson/merakurak.geojson"
  );

  map.data.loadGeoJson(
    "geojson/parengan.geojson"
  );

  map.data.setStyle(function(feature){
    let color = feature.getProperty('color');
    return {
      fillColor: color,
      strokeWeight: 1
    }
  });

  let infoWindow = new google.maps.InfoWindow({
    content: "hai"
  })

  map.data.addListener('click', function(event){
    let namaKecamatan = event.feature.getProperty('letter');
    let html = namaKecamatan;
    infoWindow.setContent(html);
    infoWindow.setPosition(event.latLng);
    infoWindow.setOptions({
      pixelOffset: new google.maps.Size(0, 0)
    });
    infoWindow.open(map);
  });
}
