import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './codeEditorActions';

import CodeMirrorWrapper from './CodeMirrorWrapper';

class CodeEditor extends Component {
  constructor(props) {
    super(props);

  }

  updateCode(newCode) {
    this.setState({
      code : newCode,
    });
  }


  render() {
    const options = {
      lineNumbers: true,
    };
    return (
      <div className="CodeEditor">
        <CodeMirrorWrapper />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.hoge,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);
