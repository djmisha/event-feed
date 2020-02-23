/*! sdhm-event-feed v0.0.1 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */

/* Create Scope for Events*/

/*To do*/

// check if date has paseed and don't show past events
// convert date to Schema readable format

;(function() {

	var theFeed = document.getElementById('evenfeed');

	function requestEventsXHR() {

		var eventData = [];

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
			}
		};
		
		function parseData(data) {
			for ( var g = 0; g < data.length; g++) {
				var singleEventListing = {
					artist: data[g].eventArtist,
					location: data[g].eventLocation,
					date: data[g].date,
					venue: data[g].eventVenue,
					image: data[g].eventImage,
					age: data[g].ageLabel,
					ticketlink: data[g]['button href'],
				};
				eventData.push(singleEventListing);
			}
			
		}

		function attachToPage() {

			/* Init Lazy Loading Images */

			var bLazy = new Blazy({
			    // Options
			});

			/*Attach Events To Page */
			
			for ( var i = 0; i < eventData.length; i++) {
				var eventPageElement = document.createElement('div');
				eventPageElement.classList.add('single-event');
				eventPageElement.setAttribute('itemscope', '');
				eventPageElement.setAttribute('itemtype', 'http://schema.org/Event');

				eventPageElement.innerHTML = 

				'<div class=\"event-date\" itemprop=\"startDate\">' + eventData[i].date + '</div> \n'  +
				
				'<div class=\"event-artist\" itemprop=\"name\">' + eventData[i].artist + '</div> \n' + 
				
				'<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><span itemprop="name">' + eventData[i].venue + '</spana></div> \n' + 
				
				// '<div class=event-location>' + eventData[i].location + '</div> \n' + 
				
				'<div class=\"event-link\"><a href=' + eventData[i].ticketlink + ' target=_blank>Learn More</a></div> \n' +
				
				// '<a href=' + eventData[i].ticketlink + ' target=_blank><div class=\"event-image\" style=\"background-image:url(' + eventData[i].image + ')\"></div></a> \n'  

				'<a href=' + eventData[i].ticketlink + ' target=_blank><div class=\"event-image b-lazy\" data-src=\"' + eventData[i].image + '\"></div></a> \n'  
				
				;

				theFeed.appendChild(eventPageElement);
			}
		}
	}

	if (theFeed) {
		requestEventsXHR();


	}

})();