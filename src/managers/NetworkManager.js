import axios from 'axios';
import { AppConstants } from '../utils/AppConstants';

class NetworkManager {

    performGetRequest(url, params, callback) {
        let completeURL = AppConstants.baseAPIURL + url;
        let completeParams = {
            ...params,
            format: 'json'
        }
        axios.get(completeURL, {
            params: completeParams
        }).then((response) => {
            callback(null, response);
        }).catch((error) => {
            callback(error, null);
        });
    }
}

let networkManager = new NetworkManager();
export default networkManager;