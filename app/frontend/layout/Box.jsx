import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './actions';

export default class Box extends Component {
  static get propTypes() {
    return {
      flexGrow: PropTypes.number,
      flexShrink: PropTypes.number,
      isFolded: PropTypes.bool,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };
  }

  static get defaultProps() {
    return {
      flexGrow: 0,
      flexShrink: 0,
      idFolded: false,
      width: "200px",
    };
  }

  render() {
    const display = (this.props.isFolded) ? {display:"none"} : {};
    const style = Object.assign({
      flexGrow: this.props.flexGrow,
      height: "inherit",
      flexShrink: this.props.flexShrink,
      width: this.props.width,
    }, display);
    return (
      <div className="Box" style={style}>
        {this.props.children}
      </div>
    );
  }
}
