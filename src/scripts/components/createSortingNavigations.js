var dayjs = require('dayjs');
import {
  attachNavTitle,
  createClickableElement,
  removeDuplicates,
} from './utilities';
import requestEvents from './requestEvents';
import trackClickEvent from './trackClickEvent';

function createSortingNavigations(locationsData, eventData) {
  /* Locations */
  var locationsContainer = document.getElementById('city-list');
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
    var locationsElement = document.createElement('div');
    locationsElement.innerHTML = venue.city;
    locationsContainer.appendChild(locationsElement);
    var ID = venue.id;
    var theCity = venue.city;
    locationsElement.addEventListener('click', function () {
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

  attachNavTitle(locationsContainer, 'Cities');

  //  This sets the city on the h1 element, need to refactor
  let locationCity = document.querySelector('.local-city');
  locationCity.innerHTML = eventData[0].venuecity;

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

  // Navigation Events
  createClickableElement(venueArray, venueContainer, manualSearch);
  // Sidebar events
  createClickableElement(venueArray, venuesidebarContainer, manualSearch);
  attachNavTitle(venueContainer, 'Venues');

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

  createClickableElement(artistArray, artistContainer, manualSearch);
  createClickableElement(artistArray, artistsidebarContainer, manualSearch);
  attachNavTitle(artistContainer, "DJ's & Artists");

  /* Dates */

  var dateContainer = document.getElementById('date-list');
  var dateArray = [];

  eventData.forEach(function (item) {
    var date = item.date;
    dateArray.push(date);
  });

  dateArray = removeDuplicates(dateArray);

  dateArray.forEach(function (date) {
    var element = document.createElement('div');
    var formatted = dayjs(date).format('dddd, MMMM D');
    element.innerHTML = formatted;
    dateContainer.appendChild(element);
    element.addEventListener('click', manualSearch);
  });

  attachNavTitle(dateContainer, 'Upcoming Dates');

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
