import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

class StatusDialog extends Component {
  render() {
    return (
      <div className="StatusDialog"></div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.statusDialog.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusDialog);
