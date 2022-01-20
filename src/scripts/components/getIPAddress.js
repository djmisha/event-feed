import getLocationByIp from './getLocationByIp';

const getIPAddress = async () => {
  let ipaddress;
  const url = 'https://api.ipify.org?format=json';

  await fetch(url)
    .then(function (response) {
      response.json().then(jsonData => {
        setIPAddress(jsonData);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  function setIPAddress(response) {
    ipaddress = response.ip;
    localStorage.setItem('ip', ipaddress);
    getLocationByIp(ipaddress);
  }

  return ipaddress;
};

export default getIPAddress;
