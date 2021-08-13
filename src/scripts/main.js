import requestEventsByIP from './components/requestEventsByIP';
import requestLocationsXHR from './components/requestLocations';
import navigationDropdowns from './components/navigationDropdowns';
import navigationMobile from './components/navigationMobile';
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Initialize Application

let locations = requestLocationsXHR();
requestEventsByIP(locations);
navigationDropdowns();
navigationMobile();

// requestPostsAndAttachtoPage('music', 8);