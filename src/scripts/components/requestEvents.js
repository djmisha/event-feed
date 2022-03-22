import { apikeys } from '../vars';
import { parseData } from './utilities';
import attachToPage from './attachToPage';

const requestEvents = async (cityID, locations) => {
  const data = [];
  const { API_URL_EDMTRAIN, API_KEY_EDMTRAIN } = apikeys;
  var url = API_URL_EDMTRAIN + cityID + '&client=' + API_KEY_EDMTRAIN;

  await fetch(url)
    .then(function (response) {
      response.json().then(jsonData => {
        parseData(jsonData, data);
        attachToPage(data, locations);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  return data;
};

export default requestEvents;
