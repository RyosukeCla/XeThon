import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import performance from '../../modules/performance';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import OrderedFile from './OrderedFile';

import Tree from 'react-ui-tree';

import Theme from '../theme/xethonTheme';

function calcAllNodeNumber(node) {
  if (node.children == null) return 1;
  let index = 1;
  for (var i in node.children) {
    index = index + calcAllNodeNumber(node.children[i]);
  }
  return index;
}

class OrderedFileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null,
      tree: {
        module: "Project",
        isSaved: false,
        children: [{
          module: "extreme value theorem",
          isSaved: false,
          children: [{
            module: "subsecasdfasdf",
            isSaved: false,
          }],
        }, {
          module: "sec2",
          isSaved: false,
        }],
      },
    }

      this.renderNode = this.renderNode.bind(this);
      this.onClickNode = this.onClickNode.bind(this);
      this.handleChange = this.handleChange.bind(this);

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
        isSelected={ node === this.state.active }
        onSelect={this.onClickNode.bind(null, node)}
        index={node.isSaved}
        title={node.module}
        />
    );
    /*
    return (
      <span className={cx('node', {
        'is-active': node === this.state.active
        })} onClick={this.onClickNode.bind(null, node)}>
        {node.module}
      </span>
    );
    */
  }

  onClickNode(node) {
    this.setState({
      active: node,
    });
  }

  handleChange(tree) {
    this.setState({
      tree: tree,
    });
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
          />
        <Divider />
        <div className="TreeContainer" style={treeContainerStyle}>
          <Tree
            paddingLeft={10}
            tree={this.state.tree}
            onChage={this.handleChange}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
            />
        </div>

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
            }
          `}
        </style>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.orderedFileMenu.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedFileMenu);
