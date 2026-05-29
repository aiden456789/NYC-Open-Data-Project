let data, mapObj;

async function init(){
  let link = "violation.json"
  info = await fetch(link);
  data = await info.json();
  
  let cards_output = get("cards_output");
  let build = "";
  for(let i = 0; i < data.length; i+=1) {
    let violation = data[i];
    build += card(violation);
  }
  cards_output.innerHTML = build;
}