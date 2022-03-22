import createMarkUpforEvent from './createMarkUpforEvent';
import createSortingNavigations from './createSortingNavigations';
import search from './search';
import trackClickEvent from './trackClickEvent';
import { feedBody, sidebar } from './elements';

/* Loop through all eventa  and attach them to page */
function attachToPage(eventData, locationsData) {
  /* Remove loading icon & show sidebar*/
  feedBody.innerHTML = '';
  sidebar.classList.remove('isloading');

  eventData.forEach(event => {
    var singleEventEl = document.createElement('div');
    singleEventEl.classList.add('single-event');
    singleEventEl.classList.add('view-partial');
    singleEventEl.setAttribute('itemscope', '');
    singleEventEl.setAttribute('data-id', event.id);
    singleEventEl.setAttribute('itemtype', 'http://schema.org/Event');
    singleEventEl.addEventListener('click', toToggleView);

    /* Add content for each Event */
    singleEventEl.innerHTML = createMarkUpforEvent(event);

    /* Attach Events to the page*/
    feedBody.appendChild(singleEventEl);
  });

  /* Create Sorting Navigation & Activate Search */
  createSortingNavigations(locationsData, eventData);
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
