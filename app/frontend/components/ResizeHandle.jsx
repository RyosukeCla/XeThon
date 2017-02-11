import React, {PropTypes} from 'react';
import ResizeFlexBoxAction from '../actions/ResizeFlexBoxAction';

export default class ResizeHandle extends React.Component {
  static get propTypes() {
    return {
      box: PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
  }

  startResize() {
    //ResizeFlexAction.startResize(this.props.object.state.width);
  }

  render() {
    return (
      <div
        className="ResizeHandle"
        onMouseDown={this.startResize()}
      />
    );
  }
}
