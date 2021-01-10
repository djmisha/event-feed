import requestEventsXHR from './components/requestEvents'
import requestLocationsXHR from './components/requestLocations'
import requestImagesXHR from './components/requestImages'
import navigationDropdowns from './components/navigationDropdowns'
import requestPostsAndAttachtoPage from './components/requestsPosts'


let locations = requestLocationsXHR(); 

requestEventsXHR(81, locations); 
requestImagesXHR();
navigationDropdowns();

// console.log(data);
requestPostsAndAttachtoPage('music', 8);

