import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import TopBar from '../topBar/TopBar';
import Layout from '../layout/Layout';
import StatusDialog from '../statusDialog/StatusDialog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Layout />
        <StatusDialog />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.app.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
