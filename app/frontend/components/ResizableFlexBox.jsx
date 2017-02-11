import React, {PropTypes} from 'react';

export default class ResizableFlexBox extends React.Component {
  static get propTypes() {
    return {
      flexGrow: PropTypes.number,
      minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    };
  }

  static get defaultProps() {
    return {
      flexGrow: 0,
      minWidth: 10,
      maxWidth: 300,
      width: "50%",
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      width: 300,
    }

    this.getStyle = this.getStyle.bind(this);
  }

  getStyle() {
    return {
      width: this.state.width,
      flexGrow: this.props.flexGrow,
    };
  }

  render() {
    return (
      <div
        className="ResizableFlexBox"
        style={this.getStyle()}
      >
        {this.props.children}
      </div>
    );
  }
}
