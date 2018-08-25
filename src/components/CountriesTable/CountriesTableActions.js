import { ActionTypes, APIEndPoints } from '../../utils/AppConstants';
import networkManager from '../../managers/NetworkManager';


export const fetchCountriesFailed = (error) => {
    return {
        type: ActionTypes.countriesTable.FETCH_COUNTRIES_FAILED,
        payload: error
    }
}
//Contries actions
export const fetchCountriesSuccess = (countries) => {
    return {
        type: ActionTypes.countriesTable.FETCH_COUNTRIES_SUCCESS,
        payload: countries
    }
}

export const countriesPageDetail = (pageDetail) => {
    return {
        type: ActionTypes.countriesTable.COUNTRIES_PAGE_DETAIL,
        payload: pageDetail
    }
}

export const fetchCountries = (pageNo, incomeLevelFilter, regionFilter, lendingFilter) => {
    return (dispatch) => {
        networkManager.performGetRequest(
            APIEndPoints.countriesTable.fetchCountries, 
            {
                page: pageNo,
                incomeLevel: incomeLevelFilter,
                region: regionFilter,
                lendingType: lendingFilter
            }, 
            (error, response) => {
                if(error) {
                    dispatch(fetchCountriesFailed(error));
                } else {
                    console.log(response.data[1]);
                    dispatch(countriesPageDetail(response.data[0]));
                    dispatch(fetchCountriesSuccess(response.data[1]));
                }
            }
        );
    }
}
//IncomeLevelActions

export const fetchIncomeLevelSuccess = (incomeLevels) => {
    return {
        type: ActionTypes.countriesTable.FETCH_INCOME_LEVELS_SUCCESS,
        payload: incomeLevels
    }
}

export const fetchIncomeLevels = () => {
    return (dispatch) => {
        networkManager.performGetRequest(
            APIEndPoints.countriesTable.fetchIncomeLevels, 
            {}, 
            (error, response) => {
                if(error) {
                    dispatch(fetchCountriesFailed(error));
                } else {
                    dispatch(fetchIncomeLevelSuccess(response.data[1]));
                }
            }
        );
    };
}

//REGION
export const fetchRegionSuccess = (regions) => {
    return {
        type: ActionTypes.countriesTable.FETCH_REGION_SUCCESS,
        payload: regions
    };
}


export const fetchReions = () => {
    return (dispatch) => {
        networkManager.performGetRequest(
            APIEndPoints.countriesTable.fetchRegion,
            {},
            (error, response) => {
                if(error) {
                    dispatch(fetchCountriesFailed(error));
                } else {
                    dispatch(fetchRegionSuccess(response.data[1]));
                }
            }
        );
    }
}

//Lending Actions
export const fetchLendingTypeSuccess = (lendingTypes) => {
    return {
        type: ActionTypes.countriesTable.FETCH_LENDING_TYPE_SUCCESS,
        payload: lendingTypes
    }
}

export const fetchLendingTypes = () => {
    return (dispatch) => {
        networkManager.performGetRequest(
            APIEndPoints.countriesTable.fetchLendingType,
            {},
            (error, response) => {
                console.log('lending type');
                console.log(response);
                if(error) {
                    dispatch(fetchCountriesFailed(error));
                } else {
                    dispatch(fetchLendingTypeSuccess(response.data[1]));
                }
            }
        );
    }
}