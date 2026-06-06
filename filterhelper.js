function get(id){
  return document.getElementById(id);
}

function showMap(lat, lon){
let location = [lat, lon];
if(!mapObj){
    mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}

function card(info){

  let location = [info.latitude, info.longitude];

   let mapButton = "";
  if(info.latitude && info.longitude){
    mapButton = `<input type="button" onclick="showMap( ${location} )" value="Map">`
  }

  let build = `
    <div class="card fitted">
      <h3>${info.boro}</h3>
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

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let violation = data[i];
    if (violation.boro === borough){
      build += `<div class="fitted card">
      <h3>${violation.boro}</h3>
      <hr>
      <p>${violation.housenumber}</p>
      <p>${violation.streetname}</p>
      <p>${violation.zip}</p>
      <p>${violation.currentstatus}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  cards_output.innerHTML = build;
}

function filterByZip(){
  let output = document.getElementById("cards_output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let violation = data[i];

    if(violation.zip === zip){
      build += card(violation);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterByStatus(){
  let output = document.getElementById("cards_output");
  let status = document.getElementById("violations").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let violation = data[i];

    if (violation.currentstatus === status){
      build += card(violation);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}