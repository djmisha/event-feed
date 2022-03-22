import locations from '../../locations';
import requestEvents from './requestEvents';

const setLocationID = (city, state) => {
  var userLocation;

  locations.forEach(function (item) {
    if (city === item.city) {
      userLocation = item.id;
      return userLocation;
    }
    if (!userLocation && state === item.stateCode) {
      userLocation = item.id;
      return userLocation;
    }
  });

  // If location is not set, use CA
  if (!userLocation) {
    requestEvents(10, locations);
  }

  requestEvents(userLocation, locations);
};

export default setLocationID;
