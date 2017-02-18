import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { statusDialogClose } from './actions';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class StatusDialog extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.statusDialogClose();
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="StatusDialog">
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    open: state.statusDialog.open,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ statusDialogClose }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusDialog);
