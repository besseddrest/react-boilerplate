import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

// import data

// create an object for the default data
// there should be a key for each reducer
const defaultState = {};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
