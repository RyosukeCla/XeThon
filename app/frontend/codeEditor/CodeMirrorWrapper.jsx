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
//require("../../modules/autosuggest");
//import { xethonSuggest } from '../../modules/xethonSuggest';
require('../../modules/xethonSuggest');
import xethonSuggestAdder from "../../modules/xethonSuggest";
xethonSuggestAdder(CodeMirror);

require("../../modules/show-invisibles");

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
        showInvisibles: true,
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
      if (49 <= code && code <= 90 || code == 220 || code == 189) {
        cm.showHint({
          completeSingle: false,
          hint: CodeMirror.hint.xethon
        });
      }
    }, 200));
  }

  onCompositionStart(e) {
    console.log(e);
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
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
