import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';
require("codemirror/addon/selection/active-line");
require("codemirror/addon/fold/foldcode");
require("codemirror/addon/fold/foldgutter");
require("codemirror/addon/fold/indent-fold");
require("../../modules/closebrackets");
require("codemirror/addon/mode/multiplex");
require("codemirror/mode/python/python");
require("codemirror/mode/stex/stex");
import xethonModeAdder from "../../modules/xethonMode";
xethonModeAdder(CodeMirror);

require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/anyword-hint");
require("../../modules/autosuggest");
import { xethonSuggest } from '../../modules/xethonSuggest';

import debounce from 'lodash.debounce';

export default class CodeMirrorWrapper extends Component {

  static get propTypes() {
    return {
      codeMirrorInstance: PropTypes.func,
      options: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      options: {
        mode: "xethon",
        autoCloseBrackets: true,
        lineNumbers: true,
        lineWrapping: true,
        tabindex: 2,
        indentUnit: 2,
        indentWithTabs: 2,
        tabSize: 2,
        inputStyle: "textarea",
        cursorHeight: 1.01,
        theme: "one-dark",
        styleActiveLine: true,
        nonEmpty: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        autoSuggest: xethonSuggest,
        word: /(\b[a-zA-Z][a-zA-Z0-9]*(?= *\()|\b[a-zA-Z][a-zA-Z0-9]*(?= *=))/,
        range: 1000,
        //value: "日本語でもオッケーですか？\nimport Comfortable.",
      },
    };
  }

  getCodeMirrorInstance() {

    return this.props.codeMirrorInstance || CodeMirror;
  }

  componentWillUnmount () {
		if (this.codeMirror) {
			this.codeMirror.toTextArea();
		}
	}

  componentDidMount() {
    const textareaNode = ReactDOM.findDOMNode(this.refs.textarea);
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);

    this.codeMirror.on("keyup", debounce(function(cm, e) {
      var code = e.keyCode;
      if (65 <= code && code <= 90) {
        if (!cm.state.completionActive) {
          CodeMirror.commands.autocomplete(
            cm,
            CodeMirror.hint.anyword,
            {
              completeSingle: false,
            });
        }
      }
    }, 2));
  }

  onCompositionStart(e) {
    console.log(e);
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    console.log("asdf");
    return (
      <div className="CodeMirrorContainer">
        <textarea
          ref="textarea"
          onCompositionStart={this.onCompositionStart.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
