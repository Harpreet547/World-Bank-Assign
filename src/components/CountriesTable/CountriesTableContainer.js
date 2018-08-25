import { connect } from 'react-redux';
import { fetchCountries, fetchIncomeLevels, fetchReions, fetchLendingTypes } from './CountriesTableActions';
import CountriesTable from './CountriesTable';

const mapDispatchToProps = dispatch => {
    return {
        fetchCountries: (pageNo, incomeLevelFilter, regionFilter, lendingFilter) => dispatch(fetchCountries(pageNo, incomeLevelFilter, regionFilter, lendingFilter)),
        fetchIncomeLevels: () => dispatch(fetchIncomeLevels()),
        fetchRegions: () => dispatch(fetchReions()),
        fetchLendingTypes: () => dispatch(fetchLendingTypes())
    };
}

const mapStateToProps = state => {
    return {
        countries: state.CountriesTableReducer.countries,
        incomeLevels: state.CountriesTableReducer.incomeLevels,
        error:  state.CountriesTableReducer.error,
        pageDetail:  state.CountriesTableReducer.pageDetail,
        regions: state.CountriesTableReducer.regions,
        lendingTypes: state.CountriesTableReducer.lendingTypes
    };
}

const CountriesTableContainer = connect(mapStateToProps, mapDispatchToProps)(CountriesTable);
export default CountriesTableContainer;