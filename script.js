
var dict = {
    "AN": "Andaman and Nicobar",
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CH": "Chandigarh",
    "CT": "Chattisgarh",
    "DL": "Delhi",
    "DN": "Dadra & Nagar and Diu & Daman",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HP": "Himachal Pradesh",
    "HR": "Haryana",
    "JH": "Jharkhand",
    "JK": "Jammu & Kashmir",
    "KA": "Karnataka",
    "KL": "Kerala",
    "LA": "Ladakh",
    "LD": "Lakshdweep Islands",
    "MH": "Maharashtra",
    "ML": "Meghalaya",
    "MN": "Manipur",
    "MP": "Madhya Pradesh",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Orissa",
    "PB": "Punjab",
    "PY": "Pondicherry",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TG": "Telangana",
    "TN": "Tamil Nadu",
    "TR": "Tirupura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarkhand",
    "WB": "West Bengal",
    "TT": "India"
  };
var Sdata;
function buildTable(commits,codes){
  var table=document.getElementById('tr');
        table.innerHTML='';
    for(var i=0;i<codes.length;i++)
      { 
        var row=`
                    <tr>
                        <td>${dict[codes[i]]}</td>
                        <td>${commits[codes[i]].total.vaccinated1}</td>
                        <td>${commits[codes[i]].total.vaccinated2}</td>
                    </tr>
        `;
        table.innerHTML+=row;
      }
}
fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(commits => {
       Sdata=commits;
       var codes=[];
       for(var i in commits) codes.push(i);
       buildTable(commits,codes);
});

function searchTable(val, data){
  var filteredData=[];
  for(var i in data){
      var name=dict[i].toLowerCase();
      if(name.includes(val)){
          filteredData.push(i);
      }
  }
  return filteredData;
}
//Search Input
$('#input').on('keyup',()=>{
  var value=$('#input').val();
  value=value.toLowerCase();
  var filteredData=searchTable(value,Sdata);
  buildTable(Sdata,filteredData);
});