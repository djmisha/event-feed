import { parseData } from './utilities';
import attachToPage from './attachToPage';

function requestEvents(cityID, locations) {
  var targetElement = document.getElementById('eventfeed');
  var sidebar = document.querySelector('.sidebar');
  var data = [];

  var http = new XMLHttpRequest();

  var url =
    'https://edmtrain.com/api/events?locationIds=' +
    cityID +
    '&client=47211b0d-26f7-424c-b81c-45613a70f865';

  http.open('GET', url);
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var response = JSON.parse(http.responseText);
      /*Puts the Data into our array*/
      parseData(response, data);
      /*Attaches the data to the page with some cleanup*/
      sidebar.classList.remove('isloading');
      attachToPage(data, locations, targetElement);
    }
  };

  return data;
}

export default requestEvents;
