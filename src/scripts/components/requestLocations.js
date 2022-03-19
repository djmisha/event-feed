function requestLocationsXHR() {
  var http = new XMLHttpRequest();
  var url = 'locations.json';
  http.open('GET', url);
  http.send();

  var locationsData = [];

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var response = JSON.parse(http.responseText);
      /*Puts the Data into our array*/
      parseLocationsData(response);
    }
  };

  function parseLocationsData(result) {
    for (var g = 0; g < result.length; g++) {
      // Create Location Object
      var singleLocationsListing = {
        id: result[g].id,
        city: result[g].city,
        state: result[g].state,
      };

      locationsData.push(singleLocationsListing);
    }
  }
  return locationsData;
}

export default requestLocationsXHR;
