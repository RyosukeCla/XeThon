import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './headerActions';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import StatusBar from '../components/StatusBar';
import FlatIconButton from '../components/FlatIconButton';

class Header extends Component {
  render() {
    const toolbarStyle = {
      height: "40px",
      padding: "0px 24px 0px 24px",
    };
    const blankStyle = {
      height: "40px",
      width: "50px",
    };
    const statusStyle = {
      height: "40px",
      width: "50vw",
      minWidth: "100px",
      maxWidth: "500px",
      marginLeft: "0",
    }
    return (
      <Toolbar style={toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <FlatIconButton
            tooltip="left menu"
            iconClassName="menu"
            id="lm"
            />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatIconButton
            tooltip="typeset"
            iconClassName="play_circle_filled"
            id="typeset"
            />
          <StatusBar
            style={statusStyle}
            status="editing : セクション1"
            isProgressing={false}
            tooltip="check status"
            id="main status"
            />
          <div style={blankStyle} />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <FlatIconButton
            tooltip="right menu"
            iconClassName="menu"
            id="rm"
            />
        </ToolbarGroup>
      </Toolbar>
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
)(Header);
