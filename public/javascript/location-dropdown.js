var citiesByState = { New York: ["New York City","Buffalo","Albany"],
      Texas: ["Austin","Houston","Dallas"], California: ["L.A.","San Francisco"]
      } function makeSubmenu(value) { if(value.length==0)
      document.getElementById("citySelect").innerHTML = "<option></option>";
      else { var citiesOptions = ""; for(cityId in citiesByState[value]) {
      citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>"; }
      document.getElementById("citySelect").innerHTML = citiesOptions; } }
      function displaySelected() { var country =
      document.getElementById("countrySelect").value; var city =
      document.getElementById("citySelect").value; alert(country+"\\\\n"+city);
      } function resetSelection() {
      document.getElementById("countrySelect").selectedIndex = 0;
      document.getElementById("citySelect").selectedIndex = 0; }