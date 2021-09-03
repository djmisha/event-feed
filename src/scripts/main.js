import navigationDropdowns from './components/navigationDropdowns';
import navigationMobile from './components/navigationMobile';
import getIPAddress from './components/getIPAddress'
import getLocationID from './components/getLocationID';
import activateNav from './components/navigation'
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Initialize Application

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

const setUserLocation = async () => {
  await getIPAddress();
}

isReturnUser();

navigationDropdowns();
navigationMobile();

activateNav();

// requestPostsAndAttachtoPage('music', 8);