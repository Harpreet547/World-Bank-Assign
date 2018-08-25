import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import CountriesTableContainer from './components/CountriesTable/CountriesTableContainer';
import { Routes } from './utils/AppConstants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path = { Routes.countriesTable } component = { CountriesTableContainer } />
          <Redirect exact = { true } from = { Routes.app } to = { Routes.countriesTable } />
        </Switch>
      </div>
    );
  }
}

export default App;
