import React, { Component } from 'react';

export default class CodeBlock extends Component {
  render() {
    const {block, contentState} = this.props;
    // const {foo} = this.props.blockProps;
    const data = "";
    console.log(contentState);
    // Return a <figure> or some other content using this data.

    return (
      <div className="CodeBlock">{data}</div>
    );
  }
}
