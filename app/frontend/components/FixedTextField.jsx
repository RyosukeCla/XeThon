import React, {PropTypes, Component} from 'react';
import TextField from 'material-ui/TextField';

export default class FixedTextField extends TextField {
  handleInputChange = (event) => {
    if (this.props.onChange) this.props.onChange(event, event.target.value);
  }
}
