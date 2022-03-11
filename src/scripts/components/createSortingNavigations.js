var dayjs = require('dayjs');
import removeDuplicates from './removeDuplicates';
import requestEvents from './requestEvents';
import trackClickEvent from './trackClickEvent';

/* Create Navigations */

function createSortingNavigations(locationsData, eventData, city) {
  /* Locations */

  var locationsContainer = document.getElementById('city-list');
  var locationsArray = [];

  // locationIcon.innerHTML = city;

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
    var locationsElement = document.createElement('div');
    locationsElement.innerHTML = venue.city;
    locationsContainer.appendChild(locationsElement);
    var ID = venue.id;
    var theCity = venue.city;
    locationsElement.addEventListener('click', function (event) {
      let city = document.getElementById('city-list');
      let cityName = document.querySelector('.sort-city #drop-trigger span');
      cityName.innerHTML = theCity;
      city.classList.remove('visible');
      city.parentElement.classList.remove('visible');
      locationsContainer.innerHTML = '';
      dateContainer.innerHTML = '';
      requestEvents(ID, locationsData, city);
      trackClickEvent('Select City', 'Click', theCity);
    });
  });

  let locationCity = document.querySelector('.local-city');
  locationCity.innerHTML = city;

  // let iconCity = document.querySelector('.sort-city span');
  // iconCity.innerHTML = city;

  // var locationIcon = document.querySelector('.sort-city .sort-trigger span');
  // locationIcon.innerHTML = city;
  // console.log(locationIcon);

  /* Venues */

  var venueContainer = document.getElementById('venue-list');
  var venuesidebarContainer = document.querySelector('.sidebar-venues');

  venueContainer.innerHTML = '';
  venuesidebarContainer.innerHTML = '';
  var venueArray = [];

  eventData.forEach(function (item) {
    var venue = item.venuename;
    venueArray.push(venue);
  });

  venueArray = removeDuplicates(venueArray);

  venueArray.sort();

  // To Refactor: this is WET
  // Navigation Events
  venueArray.forEach(function (venue) {
    var venuleElement = document.createElement('div');
    venuleElement.innerHTML = venue;
    venueContainer.appendChild(venuleElement);
    venuleElement.addEventListener('click', manualSearch);
  });

  // Sidebar events
  venueArray.forEach(function (venue) {
    var venuleElement = document.createElement('div');
    venuleElement.innerHTML = venue;
    venuesidebarContainer.appendChild(venuleElement);
    venuleElement.addEventListener('click', manualSearch);
  });

  /* Artists */

  var artistContainer = document.getElementById('artist-list');
  var artistsidebarContainer = document.querySelector('.sidebar-artist');

  artistContainer.innerHTML = '';
  artistsidebarContainer.innerHTML = '';

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
    var element = document.createElement('div');
    element.innerHTML = artist;
    artistContainer.appendChild(element);
    element.addEventListener('click', manualSearch);
  });

  artistArray.forEach(function (artist) {
    var element = document.createElement('div');
    element.innerHTML = artist;
    artistsidebarContainer.appendChild(element);
    element.addEventListener('click', manualSearch);
  });

  /* Dates */

  var dateContainer = document.getElementById('date-list');
  var dateArray = [];
  eventData.forEach(function (item) {
    var date = dayjs(item.date).format('dddd, MMMM D');
    dateArray.push(date);
  });

  dateArray = removeDuplicates(dateArray);

  dateArray.forEach(function (date) {
    var element = document.createElement('div');
    element.innerHTML = date;
    dateContainer.appendChild(element);
    element.addEventListener('click', manualSearch);
  });

  /* Manual Search by populating input and clicking button*/

  function manualSearch() {
    this.parentElement.classList.remove('visible');
    this.parentElement.parentElement.classList.remove('visible');
    var searchInput = document.getElementById('input-search');
    var searchButton = document.getElementById('submit-search');
    searchInput.value = this.innerHTML;
    searchButton.click();
    location.href = '#top';
    trackClickEvent('Sorting', 'Click', this.innerHTML);
  }
}

export default createSortingNavigations;
