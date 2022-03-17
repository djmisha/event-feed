import attachToPage from './attachToPage';
import { readableDate } from './utilities';

function requestEvents(cityID, locations) {
  var theFeed = document.getElementById('evenfeed');
  var sidebar = document.querySelector('.sidebar');
  var eventData = [];

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
      parseData(response);
      /*Attaches the data to the page*/
      theFeed.innerHTML = '';
      sidebar.classList.remove('isloading');
      attachToPage(eventData, locations, theFeed);
    }
  };

  function parseData(response) {
    const { data } = response;
    for (var g = 0; g < data.length; g++) {
      /*Convert date to ISO for Schema */
      var eventDateISO = new Date(data[g].date);

      /*Create Event Object*/
      var singleEventListing = {
        id: data[g].id,
        name: data[g].name,
        date: data[g].date,
        formattedDate: readableDate(data[g].date),
        link: data[g].link,
        venuename: data[g].venue.name,
        venueaddress: data[g].venue.address,
        venuecity: data[g].venue.location,
        venuestate: data[g].venue.state,
        artist: [data[g].artistList],
        image: '',
        schemadate: eventDateISO,
        starttime: data[g].startTime,
        eventsource: 'edmtrain.com',
      };
      eventData.push(singleEventListing);
    }
  }
  return eventData;
}

export default requestEvents;
