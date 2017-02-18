import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import StatusBar from '../components/StatusBar';
import FlatIconButton from '../components/FlatIconButton';

import { toggleLTabFolding, toggleRTabFolding } from '../layout/actions';
import { statusDialogOpen } from '../statusDialog/actions';

import performance from '../../modules/performance';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.handleTouchTapLMenuButton = this.handleTouchTapLMenuButton.bind(this);
    this.handleTouchTapRMenuButton = this.handleTouchTapRMenuButton.bind(this);
    this.openStatusDialog = this.openStatusDialog.bind(this);
  }

  handleTouchTapLMenuButton(e) {
    this.props.toggleLTabFolding(this.props.isLTabFolded);
  }

  handleTouchTapRMenuButton(e) {
    this.props.toggleRTabFolding(this.props.isRTabFolded);
  }

  openStatusDialog() {
    this.props.statusDialogOpen();
  }

  render() {
    performance("TopBar");

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
      <div className="TopBar">
        <Toolbar style={toolbarStyle}>
          <ToolbarGroup firstChild={true}>
            <FlatIconButton
              tooltip="left menu"
              iconClassName="menu"
              id="lm"
              onTouchTap={this.handleTouchTapLMenuButton}
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
              onTouchTap={this.openStatusDialog}
              />
            <div style={blankStyle} />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <FlatIconButton
              tooltip="right menu"
              iconClassName="menu"
              id="rm"
              onTouchTap={this.handleTouchTapRMenuButton}
              />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLTabFolded: state.layout.isLTabFolded,
    isRTabFolded: state.layout.isRTabFolded,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleRTabFolding,
    toggleLTabFolding,
    statusDialogOpen,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
