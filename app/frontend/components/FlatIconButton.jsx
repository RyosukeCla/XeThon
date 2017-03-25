import React, { Component, PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import ReactTooltip from 'react-tooltip';

import Theme from '../theme/xethonTheme';

export default class FlatIconButton extends Component {

  static get propTypes() {
    return {
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      tooltipStyle: PropTypes.object,
      flatButtonStyle: PropTypes.object,
      iconStyle: PropTypes.object,
      iconClassName: PropTypes.string,
      tooltip: PropTypes.string,
      id: PropTypes.string,
      onTouchTap: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      width: "50px",
      height: "40px",
      iconClassName: "home",
      tooltipStyle: {},
      flatButtonStyle: {},
      iconStyle: {
        color: Theme.topBar.col,
      },
      tooltip: "",
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
    const flatBStyle = Object.assign({
      width: this.props.width,
      height: this.props.height,
      minWidth: this.props.width,
    },this.props.flatButtonStyle);
    return (
      <div className="FlatIconButton">
        <FlatButton
          icon={
            <FontIcon className="material-icons" style={this.props.iconStyle}>
              {this.props.iconClassName}
            </FontIcon>
          }
          style={flatBStyle}
          onTouchTap={this.handleTouchTap}
          data-tip data-for={this.props.id}
          />
        <ReactTooltip id={this.props.id} place="bottom" type="dark" effect="solid">
          {this.props.tooltip}
        </ReactTooltip>
      </div>
    );
  }
}
/*
<Tooltip
  show={this.state.show}
  text={this.props.tooltip}
  style={tooltipStyle}
/>
*/
