import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class CodeMirror extends Component {

  static get propTypes() {
    return {
      codeMirrorInstance: PropTypes.func,
      options: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      options: {
        lineNumbers: true,
        tabindex: 2,
        inputStyle: "contenteditable",
        cursorHeight: 2.5,
        theme: "dracula",
        value: "日本語でもオッケーですか？\n import Comfortable.",
        nonEmpty: true,
      },
    };
  }

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || require('codemirror');
  }

  componentWillUnmount () {
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	}

  componentDidMount() {
    const textareaNode = ReactDOM.findDOMNode(this.refs.container);
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance(textareaNode, this.props.options);
  }

  render() {
    console.log("asdf");
    return (
      <div className="CodeMirrorContainer" ref="container">
      </div>
    );
  }
}
