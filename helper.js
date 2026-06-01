function get(id){
  return document.getElementById(id);
}
function showMap(lat, lon){
let location = [lat, lon];
if(!mapObj){
    mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

function card(info){

  let location = [info.latitude, info.longitude];

  let mapButton = "";
  if(info.latitude && info.longitude){
    mapButton = `<input type="button" onclick="showMap(${info.latitude}, ${info.longitude})" value="Map">`;
  }

  let build = `
    <div class="card fitted">
      <h3>${info.borough}</h3>
      <hr>
      <p>${info.housenumber}</p>
      <p>${info.streetname}</p>
      <p>${info.zip}</p>
      <p>${info.currentstatus}</p>
      ${mapButton}
    </div>
  `;

  return build;
}