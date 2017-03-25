import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  saveTextValueTemporary,
} from './actions';

import CodeMirrorWrapper from './CodeMirrorWrapper';
import performance from '../../modules/performance';
import {remote} from 'electron';
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);

    this.menu = new Menu();
    this.menu.append(new MenuItem({
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C',
      role: 'copy',
    }));
    this.menu.append(new MenuItem({
      label: 'Paste',
      accelerator: 'CmdOrCtrl+V',
      role: 'paste',
    }));
    this.menu.append(new MenuItem({
      label: 'Cut',
      accelerator: 'CmdOrCtrl+X',
      role: 'cut',
    }));
    this.menu.append(new MenuItem({
      label: 'Delete',
      accelerator: 'CmdOrCtrl+Delete',
      role: 'delete',
    }));
  }

  onChange(cm, e) {
    this.props.saveTextValueTemporary(cm.getValue());
  }

  onSave(cm) {
    console.log("onSave");
  }

  onContextMenu(cm, e) {
    this.menu.popup(remote.getCurrentWindow());
  }

  render() {
    performance("CodeEditor");
    return (
      <div className="CodeEditor">
        <CodeMirrorWrapper
          ref="editor"
          onChange={this.onChange}
          onSave={this.onSave}
          onContextMenu={this.onContextMenu} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    textValue: state.codeEditor.textValue,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveTextValueTemporary,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);
