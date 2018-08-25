import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './redux/store';
import { Provider } from 'react-redux';

import { Routes } from './utils/AppConstants';

ReactDOM.render(<Provider store={ store }>
                    <BrowserRouter>
                        <Route path = { Routes.app } component = { AppContainer }/>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
