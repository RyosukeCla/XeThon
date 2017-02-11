import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton label="Create Broadcast"/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
