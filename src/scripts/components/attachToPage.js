import createMarkUpforEvent from './createMarkUpforEvent'
import createSortingNavigations from './createSortingNavigations'
import search from './search'

/* Loop through all eventa  and attach them to page */
function attachToPage(eventData, locationsData, element, city) {

  /* Remove loading icon*/
  element.innerHTML = '';

  const events = eventData.forEach((event, index) => {
    var singleEventElement = document.createElement("div");
    singleEventElement.classList.add("single-event");
    singleEventElement.setAttribute("itemscope", "");
    singleEventElement.setAttribute("data-id", event.id);
    singleEventElement.setAttribute("itemtype", "http://schema.org/Event");

    // singleEventElement.classList.add('view-small');
    singleEventElement.addEventListener('click', toToggleView);

    // if (index >= 10) {
    //   singleEventElement.classList.add("hidden");
    // }

    /* Add content for each Event */
    singleEventElement.innerHTML = createMarkUpforEvent(event);

    /* Attach Events to the page*/
    element.appendChild(singleEventElement);

  });


  // showMoreEventsButton(element);

  /* Create Sorting Navigation & Activate Search */
  createSortingNavigations(locationsData, eventData, city);
  search(eventData, locationsData);
}

function toToggleView(event) {
  // if(event.classList.contains('small-view') {
  console.log(event.target.closest('.single-event').classList);
  event.target.closest('.single-event').classList.toggle('view-full');
  // });
}

function showMoreEventsButton(element) {
  var showMoreButton = document.createElement('div')
  showMoreButton.classList.add('button');
  showMoreButton.classList.add('more-button');
  showMoreButton.innerHTML = 'View More';
  showMoreButton.addEventListener('click', scanHiddenEvents);
  element.appendChild(showMoreButton);
}

function scanHiddenEvents() {
  var hiddenEvents = document.querySelectorAll('.hidden');

  hiddenEvents && hiddenEvents.forEach((event, index) => {
    if (index < 10) {
      event.classList.remove('hidden')
    }
  });

  hideButton(hiddenEvents);
}

function hideButton(hiddenEvents) {
  if (hiddenEvents.length === 0) {
    var button = document.querySelector('.more-button')
    button.classList.add('hidden')
  }
}

export default attachToPage;