import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import debounce from 'lodash.debounce';

import {
  addNewOrderedFile,
  deleteOrderedFile,
  handleTreeChange,
  setNodeActive,
  openContextMenu,
  closeContextMenu,
} from './actions';

import {
  openOneTextFieldDialog,
} from '../oneTextFieldDialog/actions';

import {
  openConfirmationDialog,
} from '../confirmationDialog/actions';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import performance from '../../modules/performance';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import OrderedFile from './OrderedFile';
import Tree from 'react-ui-tree';
import Theme from '../theme/xethonTheme';

import { calcAllNodeNumber, isExistSameFilename } from './utils';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class OrderedFileMenu extends Component {
  constructor(props) {
    super(props);

    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.renderNode = this.renderNode.bind(this);
    this.onClickNode = this.onClickNode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  renderNode(node) {
    if (this.index == null) {
      this.maxNumber = calcAllNodeNumber(node);
    }
    let index = (this.index == null) ? 0 : this.index + 1;
    this.index = index;
    if (this.index == this.maxNumber - 1) this.index = null;

    return (
      <OrderedFile
        className="node"
        order={index + 1}
        isSelected={node === this.props.active}
        onSelect={this.onClickNode.bind(null, node)}
        onContextMenu={this.handleContextMenu}
        isSaved={node.isSaved}
        title={node.module}
        />
    );
  }

  handleContextMenu(e, title) {
    console.log(e.currentTarget);
    this.props.openContextMenu(e.currentTarget, title);
  }

  handleAddButton() {
    this.props.closeContextMenu();
    const addNewFile = this.props.addNewOrderedFile;
    const tree = this.props.tree;
    this.props.openOneTextFieldDialog({
      callback: function(value) {
        const val = value.trim();
        addNewFile(tree, val);
      },
      title: "Add new file",
      label: "filename",
      value: "",
      error: "fill at least 1 charactor or already exists",
      validation: function(value) {
        const val = value.trim();
        if (val.length < 1) return false;
        if (isExistSameFilename(tree, val)) return false;
        return true;
      }
    });
  }

  handleDeleteButton() {
    this.props.closeContextMenu();

    const del = this.props.deleteOrderedFile;
    const tree = this.props.tree;
    const targetModule = this.props.targetModule;
    const debDelete = debounce(function() {
      del(tree, targetModule);
    }, 200);

    this.props.openConfirmationDialog({
      callback: debDelete,
      title: "Are you sure you want to delete the selected file?",
      message: `The file : "${targetModule}"`,
    });
  }

  onClickNode(node) {
    this.props.setNodeActive(node);
  }

  handleChange(tree) {
    this.props.handleTreeChange(tree);
  }

  render() {
    performance("OrderedFileMenu");

    const style = { width: "100%" };
    const addButtonStyle = { width: "100%", height: "35px" };
    const iconStyle = {top: "-2px", fontSize: "25px"};
    const treeContainerStyle = {
      background: Theme.orderedFileMenu.bg,
    };
    return (
      <div className="OrderedFileMenu" style={style}>
        <Divider />
        <FlatButton
          style={addButtonStyle}
          label="Add"
          labelStyle={{top:"-2px"}}
          secondary={true}
          icon={<FontIcon className="material-icons" style={iconStyle}>add_box</FontIcon>}
          onTouchTap={this.handleAddButton}
          />
        <Divider />
        <div className="TreeContainer" style={treeContainerStyle}>
          <Tree
            paddingLeft={14}
            tree={this.props.tree}
            onChange={this.handleChange}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
            />
        </div>

        <Popover
          open={this.props.isOpenContextMenu}
          anchorEl={this.props.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.props.closeContextMenu}
          >
          <Menu desktop={true}>
            <MenuItem primaryText="Save" />
            <MenuItem primaryText="Save All" />
            <MenuItem primaryText="Rename" />
            <MenuItem primaryText="Duplicate" />
            <MenuItem primaryText="Delete" onTouchTap={this.handleDeleteButton}/>
            <Divider />
            <MenuItem primaryText="Add" onTouchTap={this.handleAddButton}/>
          </Menu>
        </Popover>

        <style>
          {`
            .OrderedFile {
              cursor: pointer;
              cursor: hand;
            }
            .OrderedFile:hover {
              background: ${Theme.orderedFileMenu.listBGHover};
              transition: background-color 0.15s linear;
            }
            .m-node.placeholder {
              background: ${Theme.orderedFileMenu.listPlaceholderBG};
              margin-left: 0px;
            }
            .m-node .inner {
              color: ${Theme.orderedFileMenu.listArrowCol}
            }
          `}
        </style>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: state.orderedFileMenu.active,
    tree: state.orderedFileMenu.tree,
    isOpenContextMenu: state.orderedFileMenu.isOpenContextMenu,
    anchorEl: state.orderedFileMenu.anchorEl,
    targetModule: state.orderedFileMenu.targetModule,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNewOrderedFile,
    deleteOrderedFile,
    handleTreeChange,
    setNodeActive,
    openOneTextFieldDialog,
    openContextMenu,
    closeContextMenu,
    openConfirmationDialog,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedFileMenu);
