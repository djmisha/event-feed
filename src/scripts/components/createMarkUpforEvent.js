/* create a list of all Artists for an event*/

function listArtists(event) {
  var theArtists = [];
  // console.log(event);
  for (let a = 0; a < event.artist.length; a++) {
    for (let b = 0; b < event.artist[a].length; b++) {
      var singleArtistListingObject = {
        link: event.artist[a][b].link,
        name: event.artist[a][b].name,
      };

      var singleArtist =
        '<div class="artist artist-' +
        singleArtistListingObject.name +
        '">&nbsp;' +
        // '">&nbsp;<a href="' +
        // singleArtistListingObject.link +
        // '" target="_blank">' +
        singleArtistListingObject.name +
        // "</a></div>";
        ' &nbsp;</div>';

      // push artists to array
      theArtists += singleArtist;
    }
    theArtists.toString(',');
    // theArtists.split(',');
    // console.log(typeof theArtists, theArtists);
    return theArtists
  }
}

/*  Checks if Event name exists */

function checkEventName(event) {
  if (event.name === null) {
    return '';
  } else {
    return event.name;
  }
}

/*  Match Images to Events --> need to change to artists */

function matchImageswithEvents(images, id) {
  for (let i = 0; i < images.length; i++) {
    if (id === images[i].id) {
      let artistImage = images[i].url;
      return artistImage;
    }
  }
}

function createShowLocation(event) {
  var location =
    '<div class="event-location" itemscope itemtype="http://schema.org/PostalAddress"  itemprop="address" content="' +
    event.venueaddress +
    '"><a href="https://www.google.com/maps/search/' +
    event.venuename +
    ' ' +
    event.venueaddress +
    '" target=_blank><span>' +
    event.venueaddress +
    '</span></a></div> \n';

  return location;
}

// currently returns 5pm for everything - need to figure out why
function calcTime(event) {
  let date = event.schemadate;
  let time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return time;
}

// Format Date

function formatDate(date) {
  //   // do stuff
  //   switch (new Date().getDay()) {
  //     case 0:
  //       day = "Sunday";
  //       break;
  //     case 1:
  //       day = "Monday";
  //       break;
  //     case 2:
  //        day = "Tuesday";
  //       break;
  //     case 3:
  //       day = "Wednesday";
  //       break;
  //     case 4:
  //       day = "Thursday";
  //       break;
  //     case 5:
  //       day = "Friday";
  //       break;
  //     case 6:
  //       day = "Saturday";
  //   }
}

/* Create MarkupForEvent */

export function createMarkUpforEvent(event) {
  var id = event.id;
  // var showImages = matchImageswithEvents(imageData, id);
  var showArtist = listArtists(event);
  var showName = checkEventName(event);
  var showTime = calcTime(event);
  var showDate = formatDate(event.date);

  var theEventVenueAddress = '';

  if (event.venueaddress !== null) {
    theEventVenueAddress = createShowLocation(event);
  }

  var theEventDate =
    '<div class="event-date" itemprop="startDate" content="' +
    event.schemadate +
    '">' +
    event.date +
    '</div> \n';

  var theEventTime =
    '<div class="event-time" itemprop="startTime" content="' +
    showTime +
    '">' +
    showTime +
    '</div> \n';

  // var theEventImage =
  //     "<a href=" +
  //     event.link +
  //     ' target=_blank><div class="event-image b-lazy" data-src="' +
  //     showImages +
  //     '"></div></a> \n';

  var theEventShowName =
    '<div class="event-info"><div class="event-title-artist"><span class="event-title" itemprop="name">' + showName + '</span> \n';

  var theEventArtist =
    '<span class="event-artist" itemprop="name">' + showArtist + '</span></div> \n';

  var EventVenueName =
    '<div class="event-venue" itemprop="location" itemscope itemtype="http://schema.org/Place"><span itemprop="name">' +
    event.venuename +
    '</span> </div>\n';

  var theEvenButtonLink =
    '<div class="event-link"><a href=' +
    event.link +
    ' target="_blank">View</a></div> \n';

  var singleEventMarkUp =
    theEventDate +
    // theEventTime +
    // theEventImage +
    theEventShowName +
    theEventArtist +
    EventVenueName +
    theEventVenueAddress +
    theEvenButtonLink;

  return singleEventMarkUp;
}

export default createMarkUpforEvent;
