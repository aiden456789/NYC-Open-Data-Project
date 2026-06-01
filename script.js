let data, mapObj;

async function init() {
  let link = "violation.json";
  let info = await fetch(link);
  data = await info.json();

  let cards_output = document.getElementById("cards_output");

  let build = "";
  for (let i = 0; i < data.length; i++) {
    let violation = data[i];
    build += card(violation);
  }

  cards_output.innerHTML = build;
}

function card(violation) {
  return `
    <div class="card fitted">
      <h3>${violation.borough}</h3>
      <hr>
      <p>${violation.housenumber}</p>
      <p>${violation.streetname}</p>
      <p>${violation.zip}</p>
      <p>${violation.currentstatus}</p>
    </div>
  `;
}