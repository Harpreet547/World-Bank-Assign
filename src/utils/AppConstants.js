export const AppConstants = {
    baseAPIURL: 'http://api.worldbank.org/v2/'
};

export const Routes = {
    app: '/',
    countriesTable: '/countries'
};

export const ActionTypes = {
    countriesTable: {
        FETCH_COUNTRIES_SUCCESS: 'FETCH_COUNTRIES_SUCCESS',
        FETCH_COUNTRIES_FAILED: 'FETCH_COUNTRIES_FAILED',
        COUNTRIES_PAGE_DETAIL: 'COUNTRIES_PAGE_DETAIL',
        FETCH_INCOME_LEVELS_SUCCESS: 'FETCH_INCOME_LEVELS_SUCCESS',
        FETCH_REGION_SUCCESS: 'FETCH_REGION_SUCCESS',
        FETCH_LENDING_TYPE_SUCCESS: 'FETCH_LENDING_TYPE_SUCCESS'
    }
};

export const APIEndPoints = {
    countriesTable: {
        fetchCountries: '/countries',
        fetchIncomeLevels: '/incomeLevels',
        fetchRegion: '/region',
        fetchLendingType: '/lendingTypes'
    }
}