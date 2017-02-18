import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ReactTooltip from 'react-tooltip';
import LinearProgress from 'material-ui/LinearProgress';

export default class StatusBar extends Component {
  static get propTypes() {
    return {
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      status: PropTypes.string,
      statusStyle: PropTypes.object,
      style: PropTypes.object,
      progressStyle: PropTypes.object,
      isProgressing: PropTypes.bool,
      tooltip: PropTypes.string,
      id: PropTypes.string,
      onTouchTap: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      width: "50vw",
      height: "40px",
      status: "",
      statusStyle: {},
      style: {},
      progressStyle: {},
      isProgressing: false,
      tooltip: "",
      id: "status"
    };
  }

  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap(e) {
    this.props.onTouchTap(e);
  }

  render() {
    const style = Object.assign({
      width: this.props.width,
      height: this.props.height,
      overflow: "hidden",
      position: "relative",
    } ,this.props.style);

    const statusStyle = Object.assign({
      overflow: "hidden",
    }, this.props.statusStyle);

    const progressStyle = Object.assign({
      position: "absolute",
      bottom: "0",
    } ,this.props.progressStyle);

    const mode = (this.props.isProgressing) ? "indeterminate" : "determinate";
    return (
      <div>
        <FlatButton
          style={style}
          data-tip data-for={this.props.id}
          onTouchTap={this.handleTouchTap}>
          <div style={statusStyle}>{this.props.status}</div>
          <LinearProgress mode={mode} style={progressStyle}/>
        </FlatButton>
        <ReactTooltip id={this.props.id} place="bottom" type="dark" effect="solid">
          {this.props.tooltip}
        </ReactTooltip>
      </div>
    );
  }
}
