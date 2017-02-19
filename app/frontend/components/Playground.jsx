import React from 'react'
import ReactDOM from 'react-dom'

import Tree from 'react-ui-tree';
import cx from 'classnames';

const initTree = {
  module: 'section1',
  collapsed: true,
  children: [{
    module: "subsec1",
    leaf: true,
  }, {
    module: "subsec2",
    leaf: true,
  }],
}

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: initTree,
    }

    this.renderNode = this.renderNode.bind(this);
    this.onClickNode = this.onClickNode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderNode(node) {
    return (
      <span className={cx('node', {
        'is-active': node === this.state.active
        })} onClick={this.onClickNode.bind(null, node)}>
        {node.module}
      </span>
    );
  }

  onClickNode(node) {
    this.setState({
      active: node
    });
  }

  handleChange(tree) {
    this.setState({
      tree: tree
    });
  }

  render() {
    return (
      <div>
        <Tree
          paddingLeft={20}              // left padding for children nodes in pixels
          tree={this.state.tree}        // tree object
          onChange={this.handleChange}  // onChange(tree) tree object changed
          renderNode={this.renderNode}  // renderNode(node) return react element
          />

        <style>
        {`
        .tree {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          background-color: #21252B;
        }
        .m-node.placeholder>* {
          visibility: hidden;
        }

        .m-node .inner {
          color: #9DA5B4;
          font-size: 12px;
          font-family: Menlo;
        }

        .m-node .node {
          display: inline-block;
          width: 100%;
          padding: 4px 5px;
        }

        .m-node .node.is-active>* {
          background-color: #31363F;
        }

        *, *:before, *:after {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-size: 100%;
        }

        .inspector {
          margin-left: 400px;
        }

        .inspector pre {
          font-family: Menlo;
          font-size: 13px;
        }

        .f-no-select {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.m-tree {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.m-draggable {
  position: absolute;
  opacity: 0.8;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.m-node.placeholder > * {
  visibility: hidden;
}
.m-node.placeholder {
  border: 1px dashed #ccc;
}
.m-node .inner {
  position: relative;
  cursor: pointer;
  padding-left: 10px;
}
.m-node .collapse {
  position: absolute;
  left: 0;
  cursor: pointer;
}
.m-node .caret-right:before {
  content: '\\25B8';
}
.m-node .caret-down:before {
  content: '\\25BE';
}

        `}
        </style>

      </div>
    );
  }
}
