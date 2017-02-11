import React from 'react';

export default class FlexContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FlexContainer" >
        {this.props.children}
      </div>
    );
  }
}
