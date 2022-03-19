// Consumer Key	Oiu77A9j14GwnLKIr9KWPVZGxyi3M98s
// Consumer Secret	gQh6Cw9omkJOMDk4

function requestEventsTMXHR(cityID, locations) {
  var theFeed = document.getElementById('eventfeed');
  var eventData = [];

  theFeed.innerHTML = '';

  var http = new XMLHttpRequest();
  var url =
    'https://app.ticketmaster.com/discovery/v2/events.json?keyword=edm&countryCode=US&apikey=Oiu77A9j14GwnLKIr9KWPVZGxyi3M98s/';
  // var url =
  // 'https://edmtrain.com/api/events?locationIds=' +
  // cityID +
  // '&client=47211b0d-26f7-424c-b81c-45613a70f865'

  http.open('GET', url);
  // http.setRequestHeader('Access-Control-Allow-Headers', '*'); // ?
  http.send();

  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var PostResponce = JSON.parse(http.responseText);

      console.log(PostResponce);
      /*Puts the Data into our array*/
      parseData(PostResponce);

      /*Attaches the data to the page*/
      attachToPage(eventData, locations, theFeed);
    }
  };

  // function parseData(result) {
  //   for (var g = 0; g < result.data.length; g++) {
  //     /*get date converted to numerical value*/
  //     //   console.log(result.data[g].startTime);
  //     /*convert date to ISO for Schema and Readble Formats*/
  //     //   var eventDateParsed = Date.parse(result.data[g].date);
  //     var eventDateISO = new Date(result.data[g].date);
  //     var readableDate = new Date(result.data[g].date).toDateString();

  //     // Create Event Object
  //     var singleEventListing = {
  //       id: result.data[g].id,
  //       name: result.data[g].name,
  //       date: readableDate,
  //       link: result.data[g].link,
  //       venuename: result.data[g].venue.name,
  //       venueaddress: result.data[g].venue.address,
  //       venuecity: result.data[g].venue.location,
  //       venuestate: result.data[g].venue.state,
  //       artist: [result.data[g].artistList],
  //       image: '',
  //       schemadate: eventDateISO,
  //       starttime: result.data[g].startTime,
  //       // image: data[g].eventImage,
  //       // age: data[g].ageLabel,
  //     };

  //     /*Push To Array*/
  //     eventData.push(singleEventListing);
  //   }
  // }
  // return eventData;
}

export default requestEventsTMXHR;
