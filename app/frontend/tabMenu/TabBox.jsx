import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './actions';

import { Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export default class TabBox extends Component {
  render() {
    const contentStyle = {
      overflow: "scroll",
      display: "flex",
      width: "100%",
      height: "100%",
    };
    return (
      <div style={contentStyle}>
        {this.props.children}
      </div>
    );
  }
}
