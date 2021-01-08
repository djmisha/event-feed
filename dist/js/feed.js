/*! sdhm-event-feed v2.0.0 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */
/* Remove Duplicates Helper*/

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
}

/* Prepare  Navigations */

function navigationDropdowns() {
    var venueMenu = document.getElementById("venue-list");
    var artistMenu = document.getElementById("artist-list");
    var dateMenu = document.getElementById("date-list");
    var cityMenu = document.getElementById("city-list");

    function navToggles(menu) {
        toggler = menu.previousElementSibling;
        toggler.addEventListener("click", showHideDropdown);

        function showHideDropdown() {
            if (menu.classList.contains("visible")) {
                menu.classList.remove("visible");
                menu.parentElement.classList.remove("visible");
            } else {
                menu.classList.add("visible");
                menu.parentElement.classList.add("visible");
            }
        }
    }
    navToggles(venueMenu);
    navToggles(artistMenu);
    navToggles(dateMenu);
    navToggles(cityMenu);
}

/* Create Events*/

/* Get todays date*/
var todaysDate = Date.now();

/* Where we'll attach our app */
var theFeed = document.getElementById("evenfeed");

/* Array to hold event data */
var eventData = [];

/* Locations Data */
var locationsData = [];

/* Array to hold Image Data */
var imageData = [];

/* Request Images JSON */

function requestImagesXHR() {
    var http = new XMLHttpRequest();
    var url = "images.json";
    http.open("GET", url);
    http.send();

    // console.log(http);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var PostResponce = JSON.parse(http.responseText);
            /*Puts the Data into our array*/
            parseData(PostResponce);
            /*Attaches the data to the page*/
            matchImageswithEvents(imageData);
        }
    };

    function parseData(result) {
        for (var g = 0; g < result.length; g++) {
            // Create Event Object
            var singleImageListing = {
                url: result[g].url,
                id: result[g].id,
            };

            imageData.push(singleImageListing);
        }
    }
}

/* Request Locations JSON */

function requestLocationsXHR() {
    var http = new XMLHttpRequest();
    var url = "locations.json";
    http.open("GET", url);
    http.send();

    // console.log(http);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var PostResponce = JSON.parse(http.responseText);
            /*Puts the Data into our array*/
            parseLocationsData(PostResponce);
        }
    };

    function parseLocationsData(result) {
        // var data = result;
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
}

/* Request Events JSON */

function requestEventsXHR(cityID) {
    theFeed.innerHTML = "";
    // eventData = [];
    var http = new XMLHttpRequest();
    var url =
        "https://edmtrain.com/api/events?locationIds=" +
        cityID +
        "&client=" +
        config.theGoods;
    http.open("GET", url);
    http.send();

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var PostResponce = JSON.parse(http.responseText);
            /*Puts the Data into our array*/
            parseData(PostResponce);

            /*Attaches the data to the page*/
            // console.log(PostResponce);

            attachToPage();
        }
    };

    function parseData(result) {
        for (var g = 0; g < result.data.length; g++) {
            /*get date converted to numerical value*/
            var eventDateParsed = Date.parse(result.data[g].date);

            /*convert date to ISO for Schema and Readble Formats*/
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
                image: "",
                schemadate: eventDateISO,
                // image: data[g].eventImage,
                // age: data[g].ageLabel,
            };

            /*Push To Array*/
            eventData.push(singleEventListing);
        }
    }
}

/* Atatch Events To Page */

function attachToPage() {
    /* Init Lazy Loading Images for faster performance */

    var bLazy = new Blazy({});

    /* loop through all event data and attach them to page */

    for (var i = 0; i < eventData.length; i++) {
        var singleEventElement = document.createElement("div");
        singleEventElement.classList.add("single-event");
        singleEventElement.setAttribute("itemscope", "");
        singleEventElement.setAttribute("data-id", eventData[i].id);
        singleEventElement.setAttribute("itemtype", "http://schema.org/Event");

        /*Set Content for each Event*/
        singleEventElement.innerHTML = createMarkUpforEvent(eventData[i]);

        /*Attach To the page*/
        theFeed.appendChild(singleEventElement);

        /* Add Event Click for more info frame */

        singleEventElement.addEventListener("click", (function (event) {
            // event.preventDefault();
            // console.log(event);
            // console.log(this);
            // var body = get("body");
            // var overlay = "tetst";
            // body.appendChild(overlay);
        }));
    }

    /* Create Sorting Navigation */
    createSortingNavigations();
}

/* Create Navigations */

function createSortingNavigations() {
    /* Loop throught Locations and attach them to page */

    var locationsContainer = document.getElementById("city-list");
    locationsContainer.innerHTML = "";
    var locationsArray = [];

    locationsData.forEach((function (item) {
        var location = {
            id: item.id,
            city: item.city,
        };
        if (location.city) {
            locationsArray.push(location);
        }
    }));

    locationsArray.forEach((function (venue) {
        var locationsElement = document.createElement("div");
        locationsElement.innerHTML = venue.city;
        locationsContainer.appendChild(locationsElement);
        var ID = venue.id;
        var theCity = venue.city;
        locationsElement.addEventListener("click", (function (event) {
            city = document.getElementById("city-list");
            cityName = document.querySelector(".sort-city #drop-trigger");
            cityName.innerHTML = theCity;
            city.classList.remove("visible");
            city.parentElement.classList.remove("visible");
            requestEventsXHR(ID);
        }));
    }));

    /* Loop throught Venues and attach them to page */

    var venueContainer = document.getElementById("venue-list");
    venueContainer.innerHTML = "";
    var venueArray = [];

    eventData.forEach((function (item) {
        var venue = item.venuename;
        venueArray.push(venue);
    }));

    venueArray = removeDuplicates(venueArray);

    venueArray.forEach((function (venue) {
        var venuleElement = document.createElement("div");
        venuleElement.innerHTML = venue;
        venueContainer.appendChild(venuleElement);
        venuleElement.addEventListener("click", manualSearch);
    }));

    /*  Artists  */

    var artistContainer = document.getElementById("artist-list");
    artistContainer.innerHTML = "";
    artistArray = [];
    eventData.forEach((function (item) {
        var artist = item.artist;
        artist.forEach((function (a) {
            a.forEach((function (b) {
                artistArray.push(b.name);
            }));
        }));
    }));

    artistArray = removeDuplicates(artistArray);

    artistArray.forEach((function (artist) {
        var element = document.createElement("div");
        element.innerHTML = artist;
        // console.log(element);
        artistContainer.appendChild(element);
        element.addEventListener("click", manualSearch);
    }));

    /* Loop throught Venues and attach them to page */

    var dateContainer = document.getElementById("date-list");
    var dateArray = [];

    eventData.forEach((function (item) {
        var date = item.date;
        dateArray.push(date);
    }));

    dateArray = removeDuplicates(dateArray);

    // console.log(dateContainer);

    dateArray.forEach((function (date) {
        var element = document.createElement("div");
        element.innerHTML = date;
        // console.log(element);
        dateContainer.appendChild(element);
        element.addEventListener("click", manualSearch);
    }));

    /* Manual Search by populating input and clicking button*/

    function manualSearch() {
        console.log(this.parentElement);
        this.parentElement.classList.remove("visible");
        // showHideDropdown();
        var searchInput = document.getElementById("input-search");
        var searchButton = document.getElementById("submit-search");
        searchInput.value = this.innerHTML;
        searchButton.click();
    }
}

/* function to list out all Artists*/

function listArtists(event) {
    var theArtists = [];
    // console.log(event);
    for (a = 0; a < event.artist.length; a++) {

        for (b = 0; b < event.artist[a].length; b++) {

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
                "</div>";

                // push artists to array
                theArtists.push(singleArtist);
             
        }
        // console.log(theArtists);

        return theArtists;
    }
}

/* function to Check for Event name*/

function checkEventName(event) {
    if (event.name === null) {
        return "";
    } else {
        return event.name;
    }
}

/* function to Match Images to Events */

function matchImageswithEvents(images, id) {
    for (i = 0; i < images.length; i++) {
        if (id === images[i].id) {
            artistImage = images[i].url;
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
        " " +
        event.venueaddress +
        '" target=_blank><span>' +
        event.venueaddress +
        "</span></a></div></div> \n";

    return location;
}

/* Create MarkupForEvent */

function createMarkUpforEvent(event) {
    var id = event.id;
    var showImages = matchImageswithEvents(imageData, id);
    var showArtist = listArtists(event);
    var showName = checkEventName(event);
    var theEventVenueAddress = "";
    
    if (event.venueaddress !== null) {
        theEventVenueAddress = createShowLocation(event);
    }

    var theEventDate =
        '<div class="event-date" itemprop="startDate" content="' +
        event.schemadate +
        '">' +
        event.date +
        "</div> \n";

    var theEventImage =
        "<a href=" +
        event.link +
        ' target=_blank><div class="event-image b-lazy" data-src="' +
        showImages +
        '"></div></a> \n';

    var theEventShowName =
        '<div class="event-title" itemprop="name">' + showName + "</div> \n";

    var theEventArtist =
        '<div class="event-artist" itemprop="name">' + showArtist + "</div> \n";

    var EventVenueName =
        '<div class="event-venue" itemprop="location" itemscope itemtype="http://schema.org/Place"><span itemprop="name">' +
        event.venuename +
        "</span> \n";

    var theEvenButtonLink =
        '<div class="event-link"><a href=' +
        event.link +
        ' target="_blank">View Event</a></div> \n';

    var singleEventMarkUp =
        theEventDate +
        theEventImage +
        theEventShowName +
        theEventArtist +
        EventVenueName +
        theEventVenueAddress +
        theEvenButtonLink;

    return singleEventMarkUp;
}

/* Initialize our App */

requestLocationsXHR();
requestImagesXHR();
requestEventsXHR(81);
navigationDropdowns();
