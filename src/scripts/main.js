import getIPAddress from './components/getIPAddress';
import getLocationID from './components/getLocationID';
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Register Service Worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/public/sw.js')
    .then(serviceWorker => {
      // console.log('Service Worker registered: ', serviceWorker);
    })
    .catch(error => {
      console.error('Error registering the Service Worker: ', error);
    });
}

// Initialize Application

const setUserLocation = async () => {
  await getIPAddress();
};

// If return user. use local storage location

const isReturnUser = () => {
  var city = localStorage.getItem('city', city);
  var state = localStorage.getItem('state', state);
  if (city && state) {
    getLocationID(city, state);
  } else {
    setUserLocation();
  }
};

isReturnUser();

// requestPostsAndAttachtoPage('music', 8);
