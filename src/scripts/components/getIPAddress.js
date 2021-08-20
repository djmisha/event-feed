
const getIPAddress = () => {
  var ipaddress;
  var http = new XMLHttpRequest();
  var url = "https://api.ipify.org?format=json";
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE) {
      var response = JSON.parse(http.responseText);
      setIPAddress(response);
    }
  };

  function setIPAddress(response) {
    ipaddress = response.ip
    localStorage.setItem("ip", ipaddress);
  }

  return ipaddress;
}

export default getIPAddress;

