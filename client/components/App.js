// TODO: cleanup
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  // return filteredNews if there's at least one match, else return all the news data
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// will take state and action functions via props in our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
