import createMarkUpforEvent from './createMarkUpforEvent';
import createSortingNavigations from './createSortingNavigations';
import search from './search';
import trackClickEvent from './trackClickEvent';

/* Loop through all eventa  and attach them to page */
function attachToPage(eventData, locationsData, element, city) {
  /* Remove loading icon*/
  element.innerHTML = '';

  const events = eventData.forEach((event, index) => {
    var singleEventElement = document.createElement('div');
    singleEventElement.classList.add('single-event');
    singleEventElement.classList.add('view-partial');
    singleEventElement.setAttribute('itemscope', '');
    singleEventElement.setAttribute('data-id', event.id);
    singleEventElement.setAttribute('itemtype', 'http://schema.org/Event');
    singleEventElement.addEventListener('click', toToggleView);

    /* Add content for each Event */
    singleEventElement.innerHTML = createMarkUpforEvent(event);

    /* Attach Events to the page*/
    element.appendChild(singleEventElement);
  });

  /* Create Sorting Navigation & Activate Search */
  createSortingNavigations(locationsData, eventData, city);
  search(eventData, locationsData);

  // Track outbound clicks
  const outboundLinks = document.querySelectorAll('a[target="_blank"]');
  for (let i = 0; i < outboundLinks.length; i++) {
    outboundLinks[i].addEventListener('click', e => {
      trackClickEvent('Outbound', 'Click', e.target.href);
    });
  }
}

function toToggleView(event) {
  if (
    event.target.closest('.single-event').classList.contains('view-partial')
  ) {
    event.target.closest('.single-event').classList.add('view-full');
    event.target.closest('.single-event').classList.remove('view-partial');
  } else {
    event.target.closest('.single-event').classList.remove('view-full');
    event.target.closest('.single-event').classList.add('view-partial');
  }
}

export default attachToPage;
