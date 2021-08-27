import getLocationID from "./getLocationID";

const getLocationByIp = async (ipaddress) => {
  var ipaddress = ipaddress;
  var url = `https://ipapi.co/${ipaddress}/json/`

  await fetch(url)
    .then(function (response) {
      response.json().then(jsonData => {
        setLocation(jsonData);
      });
    })
    .catch(function (error) {
      console.log(error)
    });
}

function setLocation(data) {
  let locationdata = data;
  let city = data.city;
  let state = data.region;
  let country = data.country_code;

  localStorage.setItem("city", city);
  localStorage.setItem("state", state);
  localStorage.setItem("country", country);

  getLocationID(locationdata.city, locationdata.state);
}


export default getLocationByIp;
