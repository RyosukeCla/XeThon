import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import FlatIconButton from './FlatIconButton';
import LinearProgress from 'material-ui/LinearProgress';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import StatusBar from './StatusBar';

export default class Header extends React.Component {
  render() {
    const size = {
      fontSize: "30px",
    };
    const height = {
      height: "40px",
    }
    const toolbarStyle = {
      height: "40px",
      padding: "0px 24px 0px 24px",
    };
    const iconButtonStyle = {
      height: "40px",
      width: "50px",
      minWidth: "50px",
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
          <div style={iconButtonStyle} />
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
