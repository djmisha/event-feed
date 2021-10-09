import navigationDropdowns from './components/navigationDropdowns';
import navigationMobile from './components/navigationMobile';
import getIPAddress from './components/getIPAddress'
import getLocationID from './components/getLocationID';
import activateNav from './components/navigation'
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Initialize Application

// redirect to new location, remove after a while
const redirect = () => {
  let loc = location.host;
    if (loc === 'events.sandiegohousemusic.com') {
    window.location.href = 'https://sandiegohousemusic.com/events'
  }
}

redirect();

const setUserLocation = async () => {
  await getIPAddress();
}

// If return user. use local storage location 

const isReturnUser = () => {
  var city = localStorage.getItem("city", city);
  var state = localStorage.getItem("state", state);
  if (city && state) {
    getLocationID(city, state);
  }
  else {
   setUserLocation();
  }
}

isReturnUser();
setUserLocation();
navigationDropdowns();
navigationMobile();
activateNav();

// requestPostsAndAttachtoPage('music', 8);