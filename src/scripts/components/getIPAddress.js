
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
      console.log(response)
    }
  };

  function setIPAddress(response) {
    ipaddress = response.ip
    localStorage.setItem("ip", ipaddress);
  }

  return ipaddress;
}

export default getIPAddress;


function resolveAfter2Seconds() {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow")
      console.log("slow promise is done")
    }, 2000)
  })
}