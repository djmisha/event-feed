/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/attachToPage.js":
/*!************************************************!*\
  !*** ./src/scripts/components/attachToPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _createMarkUpforEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMarkUpforEvent */ \"./src/scripts/components/createMarkUpforEvent.js\");\n/* harmony import */ var _createSortingNavigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSortingNavigations */ \"./src/scripts/components/createSortingNavigations.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./src/scripts/components/search.js\");\n\n\n\n/* Loop through all eventa  and attach them to page */\n\nfunction attachToPage(eventData, locationsData, element) {\n  /* Remove loading icon*/\n  element.innerHTML = '';\n  const events = eventData.forEach((event, index) => {\n    var singleEventElement = document.createElement(\"div\");\n    singleEventElement.classList.add(\"single-event\");\n    singleEventElement.setAttribute(\"itemscope\", \"\");\n    singleEventElement.setAttribute(\"data-id\", event.id);\n    singleEventElement.setAttribute(\"itemtype\", \"http://schema.org/Event\"); // if (index >= 10) {\n    //   singleEventElement.classList.add(\"hidden\");\n    // }\n\n    /* Add content for each Event */\n\n    singleEventElement.innerHTML = (0,_createMarkUpforEvent__WEBPACK_IMPORTED_MODULE_0__.default)(event);\n    /* Attach Events to the page*/\n\n    element.appendChild(singleEventElement);\n  }); // showMoreEventsButton(element);\n\n  /* Create Sorting Navigation & Activate Search */\n\n  (0,_createSortingNavigations__WEBPACK_IMPORTED_MODULE_1__.default)(locationsData, eventData);\n  (0,_search__WEBPACK_IMPORTED_MODULE_2__.default)(eventData, locationsData);\n}\n\nfunction showMoreEventsButton(element) {\n  var showMoreButton = document.createElement('div');\n  showMoreButton.classList.add('button');\n  showMoreButton.classList.add('more-button');\n  showMoreButton.innerHTML = 'View More';\n  showMoreButton.addEventListener('click', scanHiddenEvents);\n  element.appendChild(showMoreButton);\n}\n\nfunction scanHiddenEvents() {\n  var hiddenEvents = document.querySelectorAll('.hidden');\n  hiddenEvents && hiddenEvents.forEach((event, index) => {\n    if (index < 10) {\n      event.classList.remove('hidden');\n    }\n  });\n  hideButton(hiddenEvents);\n}\n\nfunction hideButton(hiddenEvents) {\n  if (hiddenEvents.length === 0) {\n    var button = document.querySelector('.more-button');\n    button.classList.add('hidden');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attachToPage);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/attachToPage.js?");

/***/ }),

/***/ "./src/scripts/components/createMarkUpforEvent.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/createMarkUpforEvent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMarkUpforEvent\": () => /* binding */ createMarkUpforEvent,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* create a list of all Artists for an event*/\nfunction listArtists(event) {\n  var theArtists = []; // console.log(event);\n\n  for (let a = 0; a < event.artist.length; a++) {\n    for (let b = 0; b < event.artist[a].length; b++) {\n      var singleArtistListingObject = {\n        link: event.artist[a][b].link,\n        name: event.artist[a][b].name\n      };\n      var singleArtist = '<div class=\"artist artist-' + singleArtistListingObject.name + '\">&nbsp;' + // '\">&nbsp;<a href=\"' +\n      // singleArtistListingObject.link +\n      // '\" target=\"_blank\">' +\n      singleArtistListingObject.name + // \"</a></div>\";\n      ' &nbsp;</div>'; // push artists to array\n\n      theArtists += singleArtist;\n    }\n\n    theArtists.toString(','); // theArtists.split(',');\n    // console.log(typeof theArtists, theArtists);\n\n    return theArtists;\n  }\n}\n/*  Checks if Event name exists */\n\n\nfunction checkEventName(event) {\n  if (event.name === null) {\n    return '';\n  } else {\n    return event.name;\n  }\n}\n/*  Match Images to Events --> need to change to artists */\n\n\nfunction matchImageswithEvents(images, id) {\n  for (let i = 0; i < images.length; i++) {\n    if (id === images[i].id) {\n      let artistImage = images[i].url;\n      return artistImage;\n    }\n  }\n}\n\nfunction createShowLocation(event) {\n  var location = '<div class=\"event-location\" itemscope itemtype=\"http://schema.org/PostalAddress\"  itemprop=\"address\" content=\"' + event.venueaddress + '\"><a href=\"https://www.google.com/maps/search/' + event.venuename + ' ' + event.venueaddress + '\" target=_blank><span>' + event.venueaddress + '</span></a></div> \\n';\n  return location;\n} // currently returns 5pm for everything - need to figure out why\n\n\nfunction calcTime(event) {\n  let date = event.schemadate;\n  let time = date.toLocaleString('en-US', {\n    hour: 'numeric',\n    minute: 'numeric',\n    hour12: true\n  });\n  return time;\n} // Format Date\n\n\nfunction formatDate(date) {// do stuff\n}\n/* Create MarkupForEvent */\n\n\nfunction createMarkUpforEvent(event) {\n  var id = event.id; // var showImages = matchImageswithEvents(imageData, id);\n\n  var showArtist = listArtists(event);\n  var showName = checkEventName(event);\n  var showTime = calcTime(event);\n  var showDate = formatDate(event.date);\n  var theEventVenueAddress = '';\n\n  if (event.venueaddress !== null) {\n    theEventVenueAddress = createShowLocation(event);\n  }\n\n  var theEventDate = '<div class=\"event-date\" itemprop=\"startDate\" content=\"' + event.schemadate + '\">' + event.date + '</div> \\n';\n  var theEventTime = '<div class=\"event-time\" itemprop=\"startTime\" content=\"' + showTime + '\">' + showTime + '</div> \\n'; // var theEventImage =\n  //     \"<a href=\" +\n  //     event.link +\n  //     ' target=_blank><div class=\"event-image b-lazy\" data-src=\"' +\n  //     showImages +\n  //     '\"></div></a> \\n';\n\n  var theEventShowName = '<div class=\"event-info\"><div class=\"event-title-artist\"><span class=\"event-title\" itemprop=\"name\">' + showName + '</span> \\n';\n  var theEventArtist = '<span class=\"event-artist\" itemprop=\"name\">' + showArtist + '</span></div> \\n';\n  var EventVenueName = '<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><span itemprop=\"name\">' + event.venuename + '</span> </div>\\n';\n  var theEvenButtonLink = '<div class=\"event-link\"><a href=' + event.link + ' target=\"_blank\">View</a></div> \\n';\n  var singleEventMarkUp = theEventDate + // theEventTime +\n  // theEventImage +\n  theEventShowName + theEventArtist + EventVenueName + theEventVenueAddress + theEvenButtonLink;\n  return singleEventMarkUp;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMarkUpforEvent);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/createMarkUpforEvent.js?");

/***/ }),

/***/ "./src/scripts/components/createSortingNavigations.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/createSortingNavigations.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeDuplicates */ \"./src/scripts/components/removeDuplicates.js\");\n/* harmony import */ var _requestEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestEvents */ \"./src/scripts/components/requestEvents.js\");\n\n\n/* Create Navigations */\n\nfunction createSortingNavigations(locationsData, eventData) {\n  /* Locations */\n  var locationsContainer = document.getElementById(\"city-list\");\n  var locationsArray = [];\n  locationsData.forEach(function (item) {\n    var location = {\n      id: item.id,\n      city: item.city\n    };\n\n    if (location.city) {\n      locationsArray.push(location);\n    }\n  });\n  locationsArray.forEach(function (venue) {\n    var locationsElement = document.createElement(\"div\");\n    locationsElement.innerHTML = venue.city;\n    locationsContainer.appendChild(locationsElement);\n    var ID = venue.id;\n    var theCity = venue.city;\n    locationsElement.addEventListener(\"click\", function (event) {\n      let city = document.getElementById(\"city-list\");\n      let cityName = document.querySelector(\".sort-city #drop-trigger\");\n      cityName.innerHTML = theCity;\n      city.classList.remove(\"visible\");\n      city.parentElement.classList.remove(\"visible\");\n      locationsContainer.innerHTML = '';\n      dateContainer.innerHTML = \"\";\n      (0,_requestEvents__WEBPACK_IMPORTED_MODULE_1__.default)(ID, locationsData);\n    });\n  });\n  /* Venues */\n\n  var venueContainer = document.getElementById(\"venue-list\");\n  venueContainer.innerHTML = \"\";\n  var venueArray = [];\n  eventData.forEach(function (item) {\n    var venue = item.venuename;\n    venueArray.push(venue);\n  });\n  venueArray = (0,_removeDuplicates__WEBPACK_IMPORTED_MODULE_0__.default)(venueArray);\n  venueArray.sort();\n  venueArray.forEach(function (venue) {\n    var venuleElement = document.createElement(\"div\");\n    venuleElement.innerHTML = venue;\n    venueContainer.appendChild(venuleElement);\n    venuleElement.addEventListener(\"click\", manualSearch);\n  });\n  /* Artists */\n\n  var artistContainer = document.getElementById(\"artist-list\");\n  artistContainer.innerHTML = \"\";\n  var artistArray = [];\n  eventData.forEach(function (item) {\n    var artist = item.artist;\n    artist.forEach(function (a) {\n      a.forEach(function (b) {\n        artistArray.push(b.name);\n      });\n    });\n  });\n  artistArray = (0,_removeDuplicates__WEBPACK_IMPORTED_MODULE_0__.default)(artistArray);\n  artistArray.sort();\n  artistArray.forEach(function (artist) {\n    var element = document.createElement(\"div\");\n    element.innerHTML = artist;\n    artistContainer.appendChild(element);\n    element.addEventListener(\"click\", manualSearch);\n  });\n  /* Dates */\n\n  var dateContainer = document.getElementById(\"date-list\");\n  var dateArray = [];\n  eventData.forEach(function (item) {\n    var date = item.date;\n    dateArray.push(date);\n  });\n  dateArray = (0,_removeDuplicates__WEBPACK_IMPORTED_MODULE_0__.default)(dateArray);\n  dateArray.forEach(function (date) {\n    var element = document.createElement(\"div\");\n    element.innerHTML = date;\n    dateContainer.appendChild(element);\n    element.addEventListener(\"click\", manualSearch);\n  });\n  /* Manual Search by populating input and clicking button*/\n\n  function manualSearch() {\n    this.parentElement.classList.remove(\"visible\");\n    this.parentElement.parentElement.classList.remove(\"visible\");\n    var searchInput = document.getElementById(\"input-search\");\n    var searchButton = document.getElementById(\"submit-search\");\n    searchInput.value = this.innerHTML;\n    searchButton.click();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSortingNavigations);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/createSortingNavigations.js?");

/***/ }),

/***/ "./src/scripts/components/navigationDropdowns.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/navigationDropdowns.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction navigationDropdowns() {\n  var venueMenu = document.getElementById(\"venue-list\");\n  var artistMenu = document.getElementById(\"artist-list\");\n  var dateMenu = document.getElementById(\"date-list\");\n  var cityMenu = document.getElementById(\"city-list\");\n\n  function activateNavToggle(menu) {\n    var toggler = menu.previousElementSibling;\n    toggler.addEventListener(\"click\", showHideDropdown);\n\n    function showHideDropdown() {\n      let openItem = document.querySelectorAll('.visible');\n\n      if (openItem.length > 0) {\n        for (let i = 0; i < openItem.length; i++) {\n          openItem[i].classList.remove('visible');\n        }\n      } else {\n        menu.classList.toggle(\"visible\");\n        menu.parentElement.classList.toggle(\"visible\");\n      }\n    }\n  }\n\n  activateNavToggle(venueMenu);\n  activateNavToggle(artistMenu);\n  activateNavToggle(dateMenu);\n  activateNavToggle(cityMenu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationDropdowns);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/navigationDropdowns.js?");

/***/ }),

/***/ "./src/scripts/components/navigationMobile.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/navigationMobile.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction navigationMobile() {\n  let lastKnownScrollPosition = 0;\n  let ticking = false;\n\n  function doSomething(scrollPos) {\n    if (window.innerWidth <= 768) {\n      console.log(scrollPos);\n      var feed = document.getElementById('evenfeed');\n      var navigation = document.querySelector('.navigations');\n\n      if (scrollPos > 95) {\n        navigation.classList.add('fixed-navigation');\n        feed.classList.add('fixed-navigation');\n      }\n\n      if (scrollPos <= 95) {\n        navigation.classList.remove('fixed-navigation');\n        feed.classList.remove('fixed-navigation');\n      }\n    }\n  }\n\n  document.addEventListener('scroll', function (e) {\n    lastKnownScrollPosition = window.scrollY;\n\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        doSomething(lastKnownScrollPosition);\n        ticking = false;\n      });\n      ticking = true;\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationMobile);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/navigationMobile.js?");

/***/ }),

/***/ "./src/scripts/components/removeDuplicates.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/removeDuplicates.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* Remove Duplicates Helper */\nfunction removeDuplicates(array) {\n  return array.filter((a, b) => array.indexOf(a) === b);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeDuplicates);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/removeDuplicates.js?");

/***/ }),

/***/ "./src/scripts/components/requestEvents.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/requestEvents.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _attachToPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachToPage */ \"./src/scripts/components/attachToPage.js\");\n\n\nfunction requestEventsXHR(cityID, locations) {\n  var theFeed = document.getElementById('evenfeed');\n  var eventData = [];\n  var liveStreamData = [];\n  theFeed.innerHTML = '';\n  var http = new XMLHttpRequest();\n  var url = 'https://edmtrain.com/api/events?locationIds=' + cityID + '&client=47211b0d-26f7-424c-b81c-45613a70f865';\n  http.open('GET', url);\n  http.send();\n\n  http.onreadystatechange = function () {\n    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {\n      var PostResponce = JSON.parse(http.responseText);\n      /*Puts the Data into our array*/\n\n      parseData(PostResponce);\n      /*Attaches the data to the page*/\n\n      (0,_attachToPage__WEBPACK_IMPORTED_MODULE_0__.default)(eventData, locations, theFeed);\n    }\n  };\n\n  function parseData(result) {\n    for (var g = 0; g < result.data.length; g++) {\n      /*get date converted to numerical value*/\n      //   console.log(result.data[g].startTime);\n\n      /*convert date to ISO for Schema and Readble Formats*/\n      //   var eventDateParsed = Date.parse(result.data[g].date);\n      var eventDateISO = new Date(result.data[g].date);\n      var readableDate = new Date(result.data[g].date).toDateString(); // Create Event Object\n\n      var singleEventListing = {\n        id: result.data[g].id,\n        name: result.data[g].name,\n        date: readableDate,\n        link: result.data[g].link,\n        venuename: result.data[g].venue.name,\n        venueaddress: result.data[g].venue.address,\n        venuecity: result.data[g].venue.location,\n        venuestate: result.data[g].venue.state,\n        artist: [result.data[g].artistList],\n        image: '',\n        schemadate: eventDateISO,\n        starttime: result.data[g].startTime // image: data[g].eventImage,\n        // age: data[g].ageLabel,\n\n      };\n      /*Push To Event DAta Array if not Live Stream*/\n\n      if (singleEventListing.venuename != 'Live Stream') {\n        eventData.push(singleEventListing);\n      } else {\n        liveStreamData.push(singleEventListing);\n      }\n    }\n  }\n\n  return eventData;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestEventsXHR);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/requestEvents.js?");

/***/ }),

/***/ "./src/scripts/components/requestImages.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/requestImages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction requestImagesXHR() {\n  var http = new XMLHttpRequest();\n  var url = \"images.json\";\n  http.open(\"GET\", url);\n  http.send();\n  var imageData = [];\n\n  http.onreadystatechange = function () {\n    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {\n      var PostResponce = JSON.parse(http.responseText);\n      /*Puts the Data into our array*/\n\n      parseData(PostResponce);\n      /*Attaches the data to the page*/\n      // matchImageswithEvents(imageData);\n    }\n  };\n\n  function parseData(result) {\n    for (var g = 0; g < result.length; g++) {\n      // Create Event Object\n      var singleImageListing = {\n        url: result[g].url,\n        id: result[g].id\n      };\n      imageData.push(singleImageListing);\n    }\n  } // console.log(imageData);\n\n\n  return imageData;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestImagesXHR);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/requestImages.js?");

/***/ }),

/***/ "./src/scripts/components/requestLocations.js":
/*!****************************************************!*\
  !*** ./src/scripts/components/requestLocations.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction requestLocationsXHR() {\n  var http = new XMLHttpRequest();\n  var url = \"locations.json\";\n  http.open(\"GET\", url);\n  http.send();\n  var locationsData = [];\n\n  http.onreadystatechange = function () {\n    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {\n      var PostResponce = JSON.parse(http.responseText);\n      /*Puts the Data into our array*/\n\n      parseLocationsData(PostResponce);\n    }\n  };\n\n  function parseLocationsData(result) {\n    for (var g = 0; g < result.length; g++) {\n      // Create Location Object\n      var singleLocationsListing = {\n        id: result[g].id,\n        city: result[g].city,\n        state: result[g].state\n      };\n      locationsData.push(singleLocationsListing);\n    }\n  }\n\n  return locationsData;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestLocationsXHR);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/requestLocations.js?");

/***/ }),

/***/ "./src/scripts/components/search.js":
/*!******************************************!*\
  !*** ./src/scripts/components/search.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction search(eventData) {\n  // (function (window, document, undefined) {\n  \"use strict\"; //\n  // Variables\n  //\n\n  var form = document.querySelector(\"#form-search\");\n  var input = document.querySelector(\"#input-search\");\n  var resultList = document.querySelector(\"#searchresults\");\n  var clearSeach = document.querySelector(\"#searchresults\");\n  var searchResult = document.querySelector('#clearSearch'); //\n  // Methods\n  //\n\n  /*Clear Search */\n\n  clearSeach.addEventListener(\"click\", function (event) {\n    showAllEvents();\n    searchResult.classList.remove(\"visible\");\n    resultList.innerHTML = \"\";\n    clearSeach.classList.remove(\"visible\");\n  });\n  /* Function to hide all Events on Search click */\n\n  function hideAllEvents() {\n    var allEvents = document.querySelectorAll(\".single-event\");\n    allEvents.forEach(function (e) {\n      e.classList.add(\"hidden\");\n    });\n  }\n\n  function showAllEvents() {\n    var allEvents = document.querySelectorAll(\".single-event\");\n    allEvents.forEach(function (e) {\n      e.classList.remove(\"hidden\");\n    });\n  }\n  /* Show Matched Events */\n\n\n  function showMatchedEvents(events) {\n    var allEvents = document.querySelectorAll(\".single-event\"); // var bLazy = new Blazy({});\n\n    allEvents.forEach(function (e) {\n      var matchedID = e.getAttribute(\"data-id\");\n\n      if (events.id.toString() === matchedID) {\n        e.classList.remove(\"hidden\");\n      }\n    });\n  }\n  /**\n   * Create the markup when no results are found\n   * @return {String} The markup\n   */\n\n\n  var createNoResultsHTML = function () {\n    return \"<p>No events were found. Search again! </p>\";\n  };\n  /**\n   * Create the markup for results\n   * @param  {Array} results The results to display\n   * @return {String}        The results HTML\n   */\n\n\n  var createResultsHTML = function (results) {\n    hideAllEvents();\n    results.map(function (article, index) {\n      // console.log(article,index);\n      showMatchedEvents(article);\n    });\n    var html = \"<p>Found \" + results.length + ' matching events for \"' + input.value + '\"</p>';\n    resultList.innerHTML = html;\n    clearSearch.classList.add(\"visible\");\n  };\n  /**\n   * Search for matches\n   * @param  {String} query The term to search for\n   */\n\n\n  var search = function (query) {\n    // Variables\n    var reg = new RegExp(query, \"gi\");\n    var priority1 = [];\n    var priority2 = [];\n    var priority3 = []; // Search the content\n\n    eventData.forEach(function (article) {\n      // console.log((article.artist.name));\n      if (reg.test(article.date)) return priority1.push(article); // if (reg.test(article.artist)) priority2.push(article);\n\n      article.artist.forEach(function (a) {\n        a.forEach(function (e) {\n          if (reg.test(e.name)) priority2.push(article); // console.log(e.name);\n        });\n      });\n      if (reg.test(article.venuename)) priority3.push(article);\n    }); // Combine the results into a single array\n\n    var results = [].concat(priority1, priority2, priority3); // Display the results\n    // if no results\n\n    if (results.length < 1) {\n      resultList.innerHTML = createNoResultsHTML();\n    } // if have results\n    else {\n        createResultsHTML(results);\n      }\n  };\n  /**\n   * Handle submit events\n   */\n\n\n  var submitHandler = function (event) {\n    event.preventDefault();\n    search(input.value);\n  };\n  /**\n   * Remove site: from the input\n   */\n  // var clearInput = function () {\n  // \tinput.value = input.value.replace('Search Artist, Venue, Event', '');\n  // };\n\n\n  input.addEventListener(\"focusin\", function (event) {\n    input.value = \"\";\n  }); //\n  // Inits & Event Listeners\n  //\n  // Make sure required content exists\n\n  if (!form || !input || !resultList || !eventData) return; // Clear the input field\n  // clearInput();\n  // Create a submit handler\n\n  form.addEventListener(\"submit\", submitHandler, false); // })(window, document);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/components/search.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_requestEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/requestEvents */ \"./src/scripts/components/requestEvents.js\");\n/* harmony import */ var _components_requestLocations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/requestLocations */ \"./src/scripts/components/requestLocations.js\");\n/* harmony import */ var _components_requestImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/requestImages */ \"./src/scripts/components/requestImages.js\");\n/* harmony import */ var _components_navigationDropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigationDropdowns */ \"./src/scripts/components/navigationDropdowns.js\");\n/* harmony import */ var _components_navigationMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navigationMobile */ \"./src/scripts/components/navigationMobile.js\");\n\n\n\n\n // import requestPostsAndAttachtoPage from './components/requestsPosts';\n// Initialize Application\n\nlet locations = (0,_components_requestLocations__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_components_requestEvents__WEBPACK_IMPORTED_MODULE_0__.default)(81, locations);\n(0,_components_requestImages__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_components_navigationDropdowns__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_components_navigationMobile__WEBPACK_IMPORTED_MODULE_4__.default)(); // requestPostsAndAttachtoPage('music', 8);\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/styles/main.scss");
/******/ })()
;