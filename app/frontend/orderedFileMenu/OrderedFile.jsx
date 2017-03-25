import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Theme from '../theme/xethonTheme';

export default class OrdredFile extends Component {

  static get propTypes() {
    return {
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
      isSaved: PropTypes.bool,
      onSelect: PropTypes.func,
      onContextMenu: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      isSaved: false,
    };
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, isRight?) {
    e.preventDefault();
    if(isRight){
      this.props.onContextMenu(e, this.props.title);
    } else {
      this.props.onSelect(e, this.props.title);
    }
  }

  render() {
    const bg = (this.props.isSelected)
      ? {backgroundColor: Theme.orderedFileMenu.listBGSelected} : {};
    const style = Object.assign({
      height: "35px",
      display: "flex",
      flexDirection: "row",
      boxSizing: "border-box",
      alignItems: "center",
      position: "relative",
      paddingLeft: "7px",
      fontSize: "11px",
      color: Theme.orderedFileMenu.listNumCol,
    }, bg);


    const titleStyle = {
      marginLeft: "5px",
      borderLeft: `solid 1px ${Theme.orderedFileMenu.listBorderCol}`,
      paddingLeft: "5px",
      fontSize: "11px",
      color: Theme.orderedFileMenu.listCol,
      flexGrow: 1,
    };

    const saveDisplay = (this.props.isSaved) ? "none" : "block";
    const saveStyle = {
      height: "35px",
      //width: "35px",
      alignItems: "center",
      position: "absolute",
      right: "5px",
      top: "12px",
      display: saveDisplay,
      color: Theme.orderedFileMenu.saveCol,
    };

    // Renderer return
    return (
      <div
        className="OrderedFile"
        style={style}
        onClick={(e) => this.handleClick(e)}
        onContextMenu={(e) => this.handleClick(e, true)}>
        {this.props.order}
        <div style={titleStyle}>
          {this.props.title}
        </div>
        <div style={saveStyle}>
          ●
        </div>
      </div>
    );
  }
}
