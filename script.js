var dict = {
    "AN": "Andaman & Nicobar",
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
    "TG": "Telungana",
    "TN": "Tamil Nadu",
    "TR": "Tirupura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarkhand",
    "WB": "West Bengal",
    "TT": "India"
  };
fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(commits => {
        var table=document.getElementById('tr');
        table.innerHTML='';
    for(var i in commits)
      { 
        console.log(commits[i]);
        var row=`
                    <tr>
                        <td>${dict[i]}</td>
                        <td>${commits[i].total.vaccinated1}</td>
                        <td>${commits[i].total.vaccinated2}</td>
                    </tr>
        `;
        table.innerHTML+=row;
      }
    // var code=document.getElementById("container").innerHTML=commits.AN.delta7.vaccinated1;
});

