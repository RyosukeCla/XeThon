import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  closeConfirmationDialog,
  okConfirmationDialog,
} from './actions';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ConfirmationDialog extends Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleOK = this.handleOK.bind(this);
  }

  handleOK() {
    this.props.okConfirmationDialog({
      callback: this.props.callback
    });
  }

  handleCancel() {
    this.props.closeConfirmationDialog();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleOK}
      />,
    ];

    return (
      <div className="ConfirmationDialog">
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleCancel}>
          <div>
            {this.props.message}
          </div>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    open: state.confirmationDialog.open,
    title: state.confirmationDialog.title,
    message: state.confirmationDialog.message,
    callback: state.confirmationDialog.callback,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeConfirmationDialog,
    okConfirmationDialog,
   }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationDialog);
