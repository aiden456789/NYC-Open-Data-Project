let data, output, result;
async function init(){
  let link = "violation.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
function ByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    if(violation.boro == "QUEENS"){
      q++;
    }else if(violation.boro == "MANHATTAN"){
      m++;
    }else if(violation.boro == "BROOKLYN"){
      bk++;
    }else if(violation.boro == "BRONX"){
      bx++;
    }else if(violation.boro == "STATEN ISLAND"){
      s++;
    }
  }

  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ]
  
  let chartType = get("chartType").value;
  
 
  displayChart(chartData,"output",chartType)
}
