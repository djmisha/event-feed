/*! sdhm-event-feed v0.0.1 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */

/* Create Scope for Events*/

/*To do*/

// connect to API data source
// add venue addresses to schema
// add dropdown with more info and links
// create search and/or sort by month?
// use fetch instead of XHR

;(function() {

	/*Get todays date*/
	var todaysDate = Date.now();
	/*Where we'll attach our app */
	var theFeed = document.getElementById('evenfeed');
	/*Array to hold event data*/
	var eventData = [];

	function requestEventsXHR() {

		var http = new XMLHttpRequest();
		var url = 'events.json';
		http.open('GET', url);
		http.send();

		http.onreadystatechange= function() {
			if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
				var PostResponce = JSON.parse(http.responseText);
				/*Puts the Data into our array*/
				parseData(PostResponce);
				/*Attaches the data to the page*/
				attachToPage();

				// console.log(PostResponce);
			}
		};
		

		function parseData(result) {
			for ( var g = 0; g < result.data.length; g++) {
				// console.log(result.data[g]);
				/*get date*/
				// var eventDateParsed = Date.parse(data[g].date);
				/*convert date to ISO for Schema*/
				// var eventDateISO = new Date(data[g].date);
				// console.log(eventDateISO);
				/*Check the date for past events*/
				// console.log(data[g]);
				// if (eventDateParsed > todaysDate) {
					// Create Event Object
					var singleEventListing = {
						name: result.data[g].name,
						date: result.data[g].date,
						link: result.data[g].link,
						venuename: result.data[g].venue.name,
						venueaddress: result.data[g].venue.address,
						venuecity: result.data[g].venue.location,
						venuestate: result.data[g].venue.state,
						artist: [result.data[g].artistList],
						// schemadate: eventDateISO,
						// image: data[g].eventImage,
						// age: data[g].ageLabel,
					};

					// singleEventListing.schemadate = eventDateISO;
					/*Push To Array*/
					eventData.push(singleEventListing);
					// console.log(singleEventListing.artist);

					for (a = 0; a < singleEventListing.artist.length; a++) {
						for (b = 0; b < singleEventListing.artist[a].length; b++) {

							var theartist = {
								artistname: singleEventListing.artist[a][b].name,
								artistlink: singleEventListing.artist[a][b].link,
								artistid: singleEventListing.artist[a][b].id,
							};

							console.log(theartist);
							// return theartist;
							// eventData.push(theartist);
							// console.log(singleEventListing.artist[a][b]);
						}
					}

				// }
			}
			console.log(eventData);
		}

		function attachToPage() {

			/* Init Lazy Loading Images for faster performance */

			var bLazy = new Blazy({
			    // Options
			});

			/* creates the HTML markup for each event */

			function createMarkUpforEvent(event) {

				var singleEventMarkUp = 
				
				'<div class=\"event-artist\" itemprop=\"name\">' + event.name + '</div> \n' + 

				// '<div class=\"event-artist\" itemprop=\"name\">' + theartist.name + '</div> \n' + 
				
				'<div class=\"event-date\" itemprop=\"startDate\" content=\"' + event.schemadate + '\">' + event.date + '</div> \n'  +
			
				'<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><span itemprop="name">' + event.venuename + '</spana></div> \n' + 
				
				'<div class=event-location>' + event.venueaddress + '</div> \n' + 
				
				'<div class=\"event-link\"><a href=' + event.link + ' target=\"_blank\">Learn More</a></div> \n' +
				
				// '<a href=' + event.ticketlink + ' target=_blank><div class=\"event-image\" style=\"background-image:url(' + event.image + ')\"></div></a> \n'  

				'<a href=' + event.link + ' target=_blank><div class=\"event-image b-lazy\" data-src=\"' + event.image + '\"></div></a> \n'  
				
				;

				return singleEventMarkUp;
			}
			
			/* loop through events and attach them to page */

			for ( var i = 0; i < eventData.length; i++) {
				var eventPageElement = document.createElement('div');
				eventPageElement.classList.add('single-event');
				eventPageElement.setAttribute('itemscope', '');
				eventPageElement.setAttribute('itemtype', 'http://schema.org/Event');

				eventPageElement.innerHTML = createMarkUpforEvent(eventData[i]);

				theFeed.appendChild(eventPageElement);
			}
		}
	}

	if (theFeed) {
		requestEventsXHR();
	}

})();