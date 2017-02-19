import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { statusDialogClose } from './actions';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Theme from '../theme/xethonTheme';

class StatusDialog extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.statusDialogClose();
  }
  render() {
    const buttonStyle = {
      color: Theme.statusDialog.buttonCol,
    };

    const actions = [
      <FlatButton
        label="Cancel"
        style={buttonStyle}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        style={buttonStyle}
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
