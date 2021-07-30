import requestEventsXHR from './components/requestEvents';
import requestLocationsXHR from './components/requestLocations';
import requestImagesXHR from './components/requestImages';
import navigationDropdowns from './components/navigationDropdowns';
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Initialize Application

let locations = requestLocationsXHR();
requestEventsXHR(81, locations);
requestImagesXHR();
navigationDropdowns();
// requestPostsAndAttachtoPage('music', 8);
