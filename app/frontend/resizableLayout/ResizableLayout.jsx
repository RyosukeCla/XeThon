import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './resizableLayoutActions';

import ResizableBox from './ResizableBox';

import CodeEditor from '../codeEditor/CodeEditor';

class ResizableLayout extends Component {
  render() {
    return (
      <div className="ResizableLayout">
        <ResizableBox flexGrow={0} />
        <ResizableBox flexGrow={1}>
          <CodeEditor />
        </ResizableBox>
        <ResizableBox flexGrow={0} />
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
)(ResizableLayout);
