;(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//

	var form = document.querySelector('#form-search');
	var input = document.querySelector('#input-search');
	var resultList = document.querySelector('#searchresults');
	var clearSeach = document.querySelector('#clearSearch');

	//
	// Methods
	//


	/*Clear Search */
	
	clearSeach.addEventListener('click', function() {
		showAllEvents();
		resultList.innerHTML = '';
		clearSeach.classList.remove('visible');
	});

	/* Function to hide all Events on Search click */

	function hideAllEvents() {
		var allEvents = document.querySelectorAll('.single-event');
		allEvents.forEach(function(e){
			e.classList.add('hidden');
		});
	}

	function showAllEvents() {
		var allEvents = document.querySelectorAll('.single-event');
		allEvents.forEach(function(e){
			e.classList.remove('hidden');
		});
	}

	/* Show Matched Events */

	function showMatchedEvents(events) {
			var allEvents = document.querySelectorAll('.single-event');
			var bLazy = new Blazy({});

			allEvents.forEach(function(e){
				var matchedID = e.getAttribute('data-id');
				if (events.id.toString() === matchedID ) {

					e.classList.remove('hidden');
				}
			});
	}

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	var createNoResultsHTML = function () {
		return '<p>No events were found. Search again! </p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	var createResultsHTML = function (results) {
		hideAllEvents();
		results.map(function (article, index) {
			// console.log(article,index);
			showMatchedEvents(article);
		});
		var html = '<p>Found ' + results.length + ' matching events for \"' + input.value + '\"</p>';
		resultList.innerHTML = html;
		clearSearch.classList.add('visible');
	};

	

	/**
	 * Search for matches
	 * @param  {String} query The term to search for
	 */
	var search = function (query) {

		// Variables
		var reg = new RegExp(query, 'gi');
		var priority1 = [];
		var priority2 = [];
		var priority3 = [];

		// Search the content
		eventData.forEach(function (article) {
			// console.log((article.artist.name));
			if (reg.test(article.date)) return priority1.push(article);
			// if (reg.test(article.artist)) priority2.push(article);
			article.artist.forEach(function(a){
				a.forEach(function(e) {
					if (reg.test(e.name)) priority2.push(article);
					// console.log(e.name);
				});
			});
			if (reg.test(article.venuename)) priority3.push(article);
		});

		// Combine the results into a single array
		var results = [].concat(priority1, priority2, priority3);

		// Display the results
		// if no results
		if (results.length < 1) { 
			resultList.innerHTML = createNoResultsHTML();
		} 
		// if have results
		else {
			createResultsHTML(results);
		}
	};

	/**
	 * Handle submit events
	 */
	var submitHandler = function (event) {
		event.preventDefault();
		search(input.value);
	};

	/**
	 * Remove site: from the input
	 */
	// var clearInput = function () {
	// 	input.value = input.value.replace('Search Artist, Venue, Event', '');
	// };

	input.addEventListener('focusin', function (event) {
		input.value = '';
	});



	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !eventData) return;

	// Clear the input field
	// clearInput();

	// Create a submit handler
	form.addEventListener('submit', submitHandler, false);

})(window, document);