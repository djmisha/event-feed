import createMarkUpforEvent from './createMarkUpforEvent'
import createSortingNavigations from './createSortingNavigations'
import search from './search'

/* Loop through all eventa  and attach them to page */
function attachToPage(eventData, locationsData, element) {

  /* Remove loading icon*/
  element.innerHTML = '';

  const events = eventData.forEach(event => {
    var singleEventElement = document.createElement("div");
    singleEventElement.classList.add("single-event");
    singleEventElement.setAttribute("itemscope", "");
    singleEventElement.setAttribute("data-id", event.id);
    singleEventElement.setAttribute("itemtype", "http://schema.org/Event");

    /* Add content for each Event */
    singleEventElement.innerHTML = createMarkUpforEvent(event);

    /* Attach Events to the page*/
    element.appendChild(singleEventElement);
  });
  // console.log(element)

  /* Create Sorting Navigation & Activate Search */
  createSortingNavigations(locationsData, eventData);
  search(eventData, locationsData);
}

export default attachToPage;