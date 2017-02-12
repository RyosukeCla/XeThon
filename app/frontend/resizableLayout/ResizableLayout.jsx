import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './resizableLayoutActions';

class ResizableLayout extends Component {
  render() {
    return (
      <div className="ResizableLayout"></div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizableLayout);
