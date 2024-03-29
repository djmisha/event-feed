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

  return ipaddress;
};

function setIPAddress(response) {
  const ipaddress = response.ip;
  getLocationByIp(ipaddress);
}

export default getIPAddress;
