/*! sdhm-event-feed v0.0.1 | (c) 2020 San Diego House Music | MIT License | https://github.com/djmisha/event-feed */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);