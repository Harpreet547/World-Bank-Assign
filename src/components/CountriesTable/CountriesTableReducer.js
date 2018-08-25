import { ActionTypes } from '../../utils/AppConstants';

const initalState = {
    countries: [],
    incomeLevels:[],
    pageDetail: {},
    error: {},
    regions: [],
    lendingTypes: []
}

const CountriesTableReducer = (state = initalState, action) => {
    switch(action.type) {
        case ActionTypes.countriesTable.COUNTRIES_PAGE_DETAIL:
            return { 
                ...state, 
                //countries: state.countries, 
                pageDetail: action.payload 
            };
        case ActionTypes.countriesTable.FETCH_COUNTRIES_FAILED:
            return { 
                ...state, 
                //countries: state.countries, 
                error: action.payload 
            };
        case ActionTypes.countriesTable.FETCH_COUNTRIES_SUCCESS:
            return { 
                ...state, 
                error: null, 
                countries: action.payload 
            };
        case ActionTypes.countriesTable.FETCH_INCOME_LEVELS_SUCCESS:
            return {
                ...state,
                //countries: state.countries,
                incomeLevels: action.payload,
                error: null
            }
        case ActionTypes.countriesTable.FETCH_REGION_SUCCESS:
            return {
                ...state,
                //countries: state.countries,
                //incomeLevels: state.incomeLevels,
                error: null,
                regions: action.payload
            }
        case ActionTypes.countriesTable.FETCH_LENDING_TYPE_SUCCESS:
            return {
                ...state,
                error: null,
                lendingTypes: action.payload
            }
        default:
            return state;
    }
}

export default CountriesTableReducer;