import setLocationID from './setLocationID';

const getLocationByIp = async ipaddress => {
  var ipaddress = ipaddress;
  var url = `https://ipapi.co/${ipaddress}/json/`;

  await fetch(url)
    .then(function (response) {
      response.json().then(jsonData => {
        setLocation(jsonData);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

function setLocation(data) {
  let city = data.city;
  let state = data.region_code;

  localStorage.setItem('city', city);
  localStorage.setItem('state', state);

  setLocationID(city, state);
}

export default getLocationByIp;
