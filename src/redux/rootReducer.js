import { combineReducers } from 'redux'
import AppReducer from '../AppReducer';
import CountriesTableReducer from '../components/CountriesTable/CountriesTableReducer';

var rootReducer = combineReducers({
    AppReducer,
    CountriesTableReducer
});

export default rootReducer;