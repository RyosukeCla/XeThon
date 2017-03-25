import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

class C_NAME extends Component {
  render() {
    return (
      <div className="C_NAME"></div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.S_NAME.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(C_NAME);
