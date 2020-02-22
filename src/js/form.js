/*To do*/

// check if date has paseed and don't show past events
// convert date to Schema readable format




/* Create Scope for Events*/
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
				// console.log(PostResponce);
				parseData(PostResponce);
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
			/*Attach Events To Page */
			for ( var i = 0; i < eventData.length; i++) {
				var eventPageElement = document.createElement('div');
				eventPageElement.classList.add('single-event');
				eventPageElement.setAttribute('itemscope', '');
				eventPageElement.setAttribute('itemtype', 'http://schema.org/Event');

				eventPageElement.innerHTML = 

				'<div class=\"event-artist\" itemprop=\"name\">' + eventData[i].artist + '</div> \n' + 
				
				'<div class=\"event-date\" itemprop=\"startDate\">' + eventData[i].date + '</div> \n'  +
				
				'<div class=\"event-venue\" itemprop=\"location\" itemscope itemtype=\"http://schema.org/Place\"><span itemprop="name">' + eventData[i].venue + '</spana></div> \n' + 
				
				// '<div class=event-location>' + eventData[i].location + '</div> \n' + 
				
				'<div class=\"event-link\"><a href=' + eventData[i].ticketlink + ' target=_blank>Learn More</a></div> \n' +
				
				'<div class=\"event-image\" style=\"background-image:url(' + eventData[i].image + ')\"></div> \n'  
				
				;

				theFeed.appendChild(eventPageElement);
			}
		}
	}

	if (theFeed) {
		requestEventsXHR();
	}

})();