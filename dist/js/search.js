/*! sdhm-event-feed v2.0.0 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */
;(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//

	var form = document.querySelector('#form-search');
	var input = document.querySelector('#input-search');
	var resultList = document.querySelector('#searchresults');


	//
	// Methods
	//


	/* Function to hide unmatched Events on Search */

	function hideUnmatchedEvents(event) {
		var notMatchedEvents = document.querySelectorAll('.single-event');

		console.log(event.id);

		notMatchedEvents.forEach((function(e){
			var matchedID = e.getAttribute('data-id');
			console.log(matchedID)
			// return matchedID;
			e.classList.add('hidden');
			if (event.id.toString() === matchedID ) {
				console.log('found one');
				e.classList.remove('hidden');
			}
		}));
	}


	/**
	 * Create the HTML for each result
	 * @param  {Object} article The article
	 * @param  {Number} id      The result index
	 * @return {String}         The markup
	 */
	var createHTML = function (article, id) {
		
		hideUnmatchedEvents(article);
		// var html = createMarkUpforEvent(article,id);

			// '<div id="search-result-' + id + '">' +
			// 	'<a href="' + article.link + '">' +
			// 		'<aside>' +
			// 			article.date +
			// 		'</aside>' +
			// 		'<h2>' + article.name + '</h2>' +
			// 		// article.summary.slice(0, 150) + '...<br>' +
			// 		article.url +
			// 	'</a>' +
			// '</div>';
		// return html;
	};

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	var createNoResultsHTML = function () {
		return '<p>Sorry, no matches were found.</p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	var createResultsHTML = function (results) {
		var html = '<p>Found ' + results.length + ' matching articles</p>';
		html += results.map((function (article, index) {
			return createHTML(article, index);
		})).join('');
		return html;
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

		// Search the content
		eventData.forEach((function (article) {
			if (reg.test(article.name)) return priority1.push(article);
			if (reg.test(article.content)) priority2.push(article);
		}));

		// Combine the results into a single array
		var results = [].concat(priority1, priority2);

		// Display the results

		if (results.length < 1) {
			resultList.innerHTML = createNoResultsHTML();
		} 
		else {
			createResultsHTML(results);
		}
		// resultList.innerHTML = results.length < 1 ? createNoResultsHTML() : createResultsHTML(results);
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
	var clearInput = function () {
		input.value = input.value.replace(' site:your-domain.com', '');
	};


	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !eventData) return;

	// Clear the input field
	clearInput();

	// Create a submit handler
	form.addEventListener('submit', submitHandler, false);

})(window, document);