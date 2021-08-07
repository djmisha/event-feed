import attachToPage from './attachToPage';

function requestEventsXHR(cityID, locations) {
  var theFeed = document.getElementById('evenfeed');
  var eventData = [];
  var liveStreamData = [];

  theFeed.innerHTML = '';

  var http = new XMLHttpRequest();
  var url =
    'https://edmtrain.com/api/events?locationIds=' +
    cityID +
    '&client=47211b0d-26f7-424c-b81c-45613a70f865';
  http.open('GET', url);
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var PostResponce = JSON.parse(http.responseText);
      /*Puts the Data into our array*/
      parseData(PostResponce);

      /*Attaches the data to the page*/
      attachToPage(eventData, locations, theFeed);
    }
  };

  function parseData(result) {
    for (var g = 0; g < result.data.length; g++) {
      /*get date converted to numerical value*/
      //   console.log(result.data[g].startTime);
      /*convert date to ISO for Schema and Readble Formats*/
      //   var eventDateParsed = Date.parse(result.data[g].date);
      var eventDateISO = new Date(result.data[g].date);
      var readableDate = new Date(result.data[g].date).toDateString();

      // Create Event Object
      var singleEventListing = {
        id: result.data[g].id,
        name: result.data[g].name,
        date: readableDate,
        link: result.data[g].link,
        venuename: result.data[g].venue.name,
        venueaddress: result.data[g].venue.address,
        venuecity: result.data[g].venue.location,
        venuestate: result.data[g].venue.state,
        artist: [result.data[g].artistList],
        image: '',
        schemadate: eventDateISO,
        starttime: result.data[g].startTime,
        // image: data[g].eventImage,
        // age: data[g].ageLabel,
      };

      /*Push To Event DAta Array if not Live Stream*/
      if (singleEventListing.venuename != 'Live Stream') {
        eventData.push(singleEventListing);
      } else {
        liveStreamData.push(singleEventListing);
      }
    }
  }
  return eventData;
}

export default requestEventsXHR;
