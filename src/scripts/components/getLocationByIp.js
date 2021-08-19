import { apikeys } from '../vars.js';

// need to refactor to use API route
const getLocationByIp = async () => {
  var ipaddress = localStorage.getItem('ip');;
  var http = new XMLHttpRequest();
  // var url = `http://localhost:3030/users`
  var url = `http://api.ipstack.com/${ipaddress}?access_key=${apikeys.API_KEY_IPSTACK}`;
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE) {
      var response = JSON.parse(http.responseText);
      setLocation(response);
      // console.log(response)
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

  return locationdata.city
}


export default getLocationByIp;
