/*! sdhm-event-feed v2.0.0 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */

/* Create Scope for Events*/

;(function() {

	/* Get todays date*/
	var todaysDate = Date.now();

	/* Where we'll attach our app */
	var theFeed = document.getElementById('evenfeed');
	
	/* Array to hold event data */
	var eventData = [];

	/* Array to hold Image Data */
	var imageData = [];

	/* Request Images JSON */
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
				
				imageData.push(singleImageListing);
			}
		}
	}

	/* Request Events JSON */

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
					image: '',
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


		/* creates the HTML markup for each event */

		function createMarkUpforEvent(event) {
			var id = event.id;
			var showImages = matchImageswithEvents(imageData, id);
			var showArtist = listArtists(event);
			var showName = checkEventName(event);
			var singleEventMarkUp = 

			'<div class=\"event-date\" itemprop=\"startDate\" content=\"' + event.schemadate + '\">' + event.date + '</div> \n'  +
			
			'<a href=' + event.link + ' target=_blank><div class=\"event-image b-lazy\" data-src=\"' + showImages + '\"></div></a> \n'  +
			'<div class=\"event-title\" itemprop=\"name\">' + showName + '</div> \n' + 

			'<div class=\"event-artist\" itemprop=\"name\">' + showArtist + '</div> \n' + 
			
			'<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><a href=\"https://www.google.com/maps/search/' + event.venuename + event.venueaddress + '\" target=_blank><span itemprop="name">' + event.venuename + '</span></a></div> \n' + 
			
			'<div class=\"event-location\"  itemscope itemtype=\"http://schema.org/PostalAddress\"  itemprop=\"address\"><a href=\"https://www.google.com/maps/search/' + event.venuename + ' ' + event.venueaddress + '\" target=_blank><span>' + event.venueaddress + '</span></div> \n' + 
			
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

	/* function to list out all Artists*/

	function listArtists(event){
		var theArtists = [];
		for (a = 0; a < event.artist.length; a++) {
			for (b = 0; b < event.artist[a].length; b++) {

				var theartist = 

				'<div class=\"artist artist-' + b +'\"><a href=\"'+ event.artist[a][b].link +'\" target=\"_blank\">' + event.artist[a][b].name + '</a>&nbsp;</div>'
				;

				// push artists to array
				theArtists.push(theartist);

			}
			return theArtists;
		}
	}

	/* function to Check for Event name*/

	function checkEventName(event) {
		if (!event.name === false) {
			return event.name;
		}
		else {
			return '';
		}
	}

	/* function to Match Images to Events */

	function matchImageswithEvents(images, id) {
		for (i = 0; i < images.length; i++) {
			if( id === images[i].id) {
			artistImage = images[i].url;
			return artistImage;
			}
		}
	}


	/* Initialize our App */
	if (theFeed) {
		requestImagesXHR();
		requestEventsXHR();
	}


})();