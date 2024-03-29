import getIPAddress from './components/getIPAddress';
import setLocationID from './components/setLocationID';
import navigationDropdowns from './components/navigationDropdowns';
// import requestPostsAndAttachtoPage from './components/requestsPosts';

// Register Service Worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(serviceWorker => {
      console.log('Service Worker registered: ', serviceWorker);
    })
    .catch(error => {
      console.error('Error registering the Service Worker: ', error);
    });
}

console.log(process.env.NODE_ENV);
// Initialize Application

const setUserLocation = async () => {
  await getIPAddress();
};

// If return user. use local storage location

const isReturnUser = () => {
  var city = localStorage.getItem('city', city);
  var state = localStorage.getItem('state', state);
  if (city && state) {
    setLocationID(city, state);
  } else {
    setUserLocation();
  }
};

isReturnUser();

navigationDropdowns();

// requestPostsAndAttachtoPage('music', 8);
