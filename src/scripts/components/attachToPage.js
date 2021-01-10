import createMarkUpforEvent from './createMarkUpforEvent'
import createSortingNavigations from './createSortingNavigations'
import search from './search'

function attachToPage(eventData, locationsData, element) {
    /* loop through all event data and attach them to page */
    
    // remove loading icon 
    element.innerHTML = '';
    
    for (var i = 0; i < eventData.length; i++) {
        var singleEventElement = document.createElement("div");
        singleEventElement.classList.add("single-event");
        singleEventElement.setAttribute("itemscope", "");
        singleEventElement.setAttribute("data-id", eventData[i].id);
        singleEventElement.setAttribute("itemtype", "http://schema.org/Event");

        /*Set Content for each Event*/
        singleEventElement.innerHTML = createMarkUpforEvent(eventData[i]);

        /*Attach Events to the page*/
        element.appendChild(singleEventElement);
    }

    /* Create Sorting Navigation & Activate Search */
    createSortingNavigations(locationsData, eventData);
    search(eventData, locationsData);
}

export default attachToPage;