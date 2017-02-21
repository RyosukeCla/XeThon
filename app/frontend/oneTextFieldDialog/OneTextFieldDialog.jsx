import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  closeOneTextFieldDialog,
  okOneTextFieldDialog,
  changeOneTextFieldDialog,
} from './actions';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class OneTextFieldDialog extends Component {

  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleOK = this.handleOK.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOK() {
    this.props.okOneTextFieldDialog({
      callback: this.props.callback,
      value: this.props.value,
      validation: this.props.validation,
      errorTemp: this.props.errorTemp,
    });
  }

  handleCancel() {
    this.props.closeOneTextFieldDialog();
  }

  handleChange(e) {
    this.props.changeOneTextFieldDialog({
      value: e.target.value,
      validation: this.props.validation,
      errorTemp: this.props.errorTemp,
    });
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
      <div className="OneTextFieldDialog">
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleCancel}>
          <div style={{height: "80px"}}>
            <TextField
              id="one-text-field"
              errorText={this.props.error}
              floatingLabelText={this.props.label}
              fullWidth={true}
              defaultValue={this.props.value || null}

              onChange={this.handleChange}
              />
          </div>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    open: state.oneTextFieldDialog.open,
    title: state.oneTextFieldDialog.title,
    value: state.oneTextFieldDialog.value,
    error: state.oneTextFieldDialog.error,
    errorTemp: state.oneTextFieldDialog.errorTemp,
    label: state.oneTextFieldDialog.label,
    validation: state.oneTextFieldDialog.validation,
    callback: state.oneTextFieldDialog.callback,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeOneTextFieldDialog,
    okOneTextFieldDialog,
    changeOneTextFieldDialog,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneTextFieldDialog);
