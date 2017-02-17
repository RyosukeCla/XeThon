import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './resizableLayoutAction';

class ResizableBox extends Component {
  static get propTypes() {
    return {
      flexGrow: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      flexGrow: 0,
    };
  }

  render() {
    const style = {
      width: this.props.width,
      flexGrow: this.props.flexGrow,
    };
    return (
      <div className="ResizableBox" style={style}>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    width: state.resizableBox.width,
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
)(ResizableBox);
