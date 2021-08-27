import locations from '../../locations';
import requestLocationsXHR from './requestLocations';
import requestEvents from './requestEvents';

let alsolocations = requestLocationsXHR();

const getLocationID = (city, state) => {
  var userLocation;

  locations.forEach(function (item) {
    if (city === item.city) {
      userLocation = item.id;
      return userLocation;
    }
    if (!userLocation && state === item.stateCode) {
      userLocation = item.id;
    }
  });

  requestEvents(userLocation, alsolocations)
}

export default getLocationID;