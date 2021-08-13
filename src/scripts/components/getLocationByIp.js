
const getLocationByIp = async () => {
  var ipaddress = localStorage.getItem('ip');;
  var http = new XMLHttpRequest();
  var url = `https://api.ipstack.com/${ipaddress}?access_key=316340baee8e3995e8d261a746a2571a`;
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE) {
      var response = JSON.parse(http.responseText);
      setLocation(response);
      console.log(response)
    }
  };
}

function setLocation(response) {
  let locationdata = response;
  let city = response.city;
  let state = response.region_name;
  let country = response.country_code;
  let zip = response.zip;
  let latitude = response.latitude;
  let longitude = response.longitude;

  localStorage.setItem("city", city);
  localStorage.setItem("state", state);
  localStorage.setItem("country", country);
  localStorage.setItem("zip", zip);
  localStorage.setItem("latitude", latitude);
  localStorage.setItem("longitude", longitude);
  // console.table(locationdata.city);
  return locationdata.city
}


export default getLocationByIp;
