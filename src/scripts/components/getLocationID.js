import locations from '../../locations';
import requestEvents from './requestEvents';

const getLocationID = (city, state) => {
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

  requestEvents(userLocation, locations)
}

export default getLocationID;