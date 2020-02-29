/*! sdhm-event-feed v0.0.1 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */

/* Create Scope for Events*/

/*To do*/

// find source for images 	
// convert date to readable 

// remove comma in artists array
// random color bg event
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

	/* Array to hold Image Data*/
	var imageData = [];

	function requestImagesXHR() {

		var http = new XMLHttpRequest();
		var url = 'images.json';
		http.open('GET', url);
		http.send();

		http.onreadystatechange= function() {
			if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
				var PostResponce = JSON.parse(http.responseText);
				/*Puts the Data into our array*/
				parseData(PostResponce);
				/*Attaches the data to the page*/
				// attachToPage();
				matchImageswithEvents(imageData);

			}
		};
		

		function parseData(result) {
			for ( var g = 0; g < result.length; g++) {

					// Create Event Object
					var singleImageListing = {
						url: result[g].url,
						id: result[g].id,
					};

					// singleImageListing.schemadate = eventDateISO;
					/*Push To Array*/
					imageData.push(singleImageListing);
				// }
			}
			// console.log(imageData);
		}
	}

	requestImagesXHR();



	function requestEventsXHR() {

		var http = new XMLHttpRequest();
		var url = 'https://edmtrain.com/api/events?locationIds=81&client=' + config.apiKey;
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
				/*get date*/
				var eventDateParsed = Date.parse(result.data[g].date);
				/*convert date to ISO for Schema*/
				var eventDateISO = new Date(result.data[g].date);
				// console.log(eventDateISO);
				// Check the date for past events
				// Need to add one more day so that todays events show !!!!!!!
				// if (eventDateParsed > todaysDate) {
					// Create Event Object
					var singleEventListing = {
						id: result.data[g].id,
						name: result.data[g].name,
						date: result.data[g].date,
						link: result.data[g].link,
						venuename: result.data[g].venue.name,
						venueaddress: result.data[g].venue.address,
						venuecity: result.data[g].venue.location,
						venuestate: result.data[g].venue.state,
						artist: [result.data[g].artistList],
						image: '',
						// schemadate: eventDateISO,
						// image: data[g].eventImage,
						// age: data[g].ageLabel,
					};

					// singleEventListing.schemadate = eventDateISO;
					/*Push To Array*/
					eventData.push(singleEventListing);
				// }
			}
			// console.log(eventData);
		}

		function listArtists(event){
			var theArtists = [];
			for (a = 0; a < event.artist.length; a++) {
				for (b = 0; b < event.artist[a].length; b++) {

					var theartist = 

					'<div class=\"artist artist-' + b +'\">&nbsp;<a href=\"'+ event.artist[a][b].link +'\" target=\"_blank\">' + event.artist[a][b].name + '</a></div>'
					;

					// push artists to array
					theArtists.push(theartist);

				}
				return theArtists;
			}
		}


		function attachToPage() {

			/* Init Lazy Loading Images for faster performance */

			var bLazy = new Blazy({
			    // Options
			});

			/* Check for Event name*/

			function checkEventName(event) {
				if (!event.name === false) {
					return event.name;
				}
				else {
					return '';
				}
			}


			/* creates the HTML markup for each event */

			function createMarkUpforEvent(event) {
				var id = event.id;
				var singleEventMarkUp = 

				'<a href=' + event.link + ' target=_blank><div class=\"event-image b-lazy\" data-src=\"' + matchImageswithEvents(imageData, id) + '\"></div></a> \n'  +

				
				'<div class=\"event-title\" itemprop=\"name\">' + checkEventName(event) + '</div> \n' + 

				'<div class=\"event-artist\" itemprop=\"name\">' + listArtists(event) + '</div> \n' + 
			
				'<div class=\"event-date\" itemprop=\"startDate\" content=\"' + event.schemadate + '\">' + event.date + '</div> \n'  +
				
				'<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><span itemprop="name">' + event.venuename + '</spana></div> \n' + 
				
				'<div class=event-location>' + event.venueaddress + '</div> \n' + 
				
				'<div class=\"event-link\"><a href=' + event.link + ' target=\"_blank\">Learn More</a></div> \n' 

				
				;

				return singleEventMarkUp;
			}
			
			/* loop through events and attach them to page */

			for ( var i = 0; i < eventData.length; i++) {
				var eventPageElement = document.createElement('div');
				eventPageElement.classList.add('single-event');
				eventPageElement.setAttribute('itemscope', '');
				eventPageElement.setAttribute('itemtype', 'http://schema.org/Event');

				/*Set Content for each Event*/
				eventPageElement.innerHTML = createMarkUpforEvent(eventData[i]);

				/*Attach To the page*/
				theFeed.appendChild(eventPageElement);
			}
		}
	}


	function matchImageswithEvents(images, id) {
		for (i = 0; i < images.length; i++) {
			if( id === images[i].id) {
			artistImage = images[i].url;
			// console.log(id);
			return artistImage;
			}
		}
	}


	if (theFeed) {
		requestEventsXHR();
	}




})();