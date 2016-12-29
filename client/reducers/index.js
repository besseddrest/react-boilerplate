// TODO: cleanup
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import news from './news';
import filter from './filter';
import authors from './authors';
import hoods from './hoods';

const rootReducer = combineReducers({
  news,
  filter,
  authors,
  hoods,
  routing: routerReducer
});

export default rootReducer;
