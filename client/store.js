// TODO: cleanup

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

// import data
import news from './data/news';
import filter from './data/filter';
import authors from './data/authors';
import hoods from './data/hoods';

// create an object for the default data
// there should be a key for each reducer
const defaultState = {
  news,
  filter,
  authors,
  hoods
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
