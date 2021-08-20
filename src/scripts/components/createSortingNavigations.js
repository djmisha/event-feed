import removeDuplicates from './removeDuplicates'
import requestEventsXHR from './requestEvents'

/* Create Navigations */

function createSortingNavigations(locationsData, eventData, city) {

  /* Locations */

  var locationsContainer = document.getElementById("city-list");
  var locationsArray = [];

  locationsData.forEach(function (item) {
    var location = {
      id: item.id,
      city: item.city,
    };
    if (location.city) {
      locationsArray.push(location);
    }
  });

  locationsArray.forEach(function (venue) {
    var locationsElement = document.createElement("div");
    locationsElement.innerHTML = venue.city;
    locationsContainer.appendChild(locationsElement);
    var ID = venue.id;
    var theCity = venue.city;
    locationsElement.addEventListener("click", function (event) {
      let city = document.getElementById("city-list");
      let cityName = document.querySelector(".sort-city #drop-trigger");
      cityName.innerHTML = theCity;
      city.classList.remove("visible");
      city.parentElement.classList.remove("visible");
      locationsContainer.innerHTML = '';
      dateContainer.innerHTML = "";
      requestEventsXHR(ID, locationsData, city);
    });
  });

  let locationCity = document.querySelector(".local-city");
  locationCity.innerHTML = eventData[0].venuecity;

  /* Venues */

  var venueContainer = document.getElementById("venue-list");
  venueContainer.innerHTML = "";
  var venueArray = [];

  eventData.forEach(function (item) {
    var venue = item.venuename;
    venueArray.push(venue);
  });

  venueArray = removeDuplicates(venueArray);

  venueArray.sort();

  venueArray.forEach(function (venue) {
    var venuleElement = document.createElement("div");
    venuleElement.innerHTML = venue;
    venueContainer.appendChild(venuleElement);
    venuleElement.addEventListener("click", manualSearch);
  });

  /* Artists */

  var artistContainer = document.getElementById("artist-list");
  artistContainer.innerHTML = "";
  var artistArray = [];
  eventData.forEach(function (item) {
    var artist = item.artist;
    artist.forEach(function (a) {
      a.forEach(function (b) {
        artistArray.push(b.name);
      });
    });
  });

  artistArray = removeDuplicates(artistArray);

  artistArray.sort();

  artistArray.forEach(function (artist) {
    var element = document.createElement("div");
    element.innerHTML = artist;
    artistContainer.appendChild(element);
    element.addEventListener("click", manualSearch);
  });

  /* Dates */

  var dateContainer = document.getElementById("date-list");
  var dateArray = [];

  eventData.forEach(function (item) {
    var date = item.date;
    dateArray.push(date);
  });

  dateArray = removeDuplicates(dateArray);

  dateArray.forEach(function (date) {
    var element = document.createElement("div");
    element.innerHTML = date;
    dateContainer.appendChild(element);
    element.addEventListener("click", manualSearch);
  });

  /* Manual Search by populating input and clicking button*/

  function manualSearch() {
    this.parentElement.classList.remove("visible");
    this.parentElement.parentElement.classList.remove("visible");
    var searchInput = document.getElementById("input-search");
    var searchButton = document.getElementById("submit-search");
    searchInput.value = this.innerHTML;
    searchButton.click();
  }
}

export default createSortingNavigations;