// TODO: cleanup

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  // when we filter we don't actually want to remove data from news,
  // just make a copy of everything that matches and return that
  var filteredNews = [],
      searchText = state.filter.bySearch.toLowerCase(),
      neighborhood = state.filter.byHood;

  // filter by search text
  if (state.filter.type === 'search') {
    for (var i = 0; i < state.news.length; i++) {
      var titleText = state.news[i].title.toLowerCase(),
          teaserText = state.news[i].teaser.toLowerCase();

      // if the searchText appears in the title or the teaser
      if ((titleText.indexOf(searchText) > -1) || (teaserText.indexOf(searchText) > -1)) {
        filteredNews.push(state.news[i]);
      }
    }
  }

  // filter by single neighborhood
  if (state.filter.type === 'hood') {
    for (var i = 0; i < state.news.length; i++) {
      if (state.news[i].neighborhoods.indexOf(neighborhood) > -1) {
        filteredNews.push(state.news[i]);
      }
    }
  }

  // return filteredNews if there's at least one match, else return all the news data
  return {
    news: (filteredNews.length > 0) ? filteredNews : state.news,
    filter: (filteredNews.length > 0) ? state.filter : {type: '', bySearch: '', byHood: ''},
    authors: state.authors,
    hoods: state.hoods
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will take state and action functions via props in our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
