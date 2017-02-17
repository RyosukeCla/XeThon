import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

import Box from './Box';
import CodeEditor from '../codeEditor/CodeEditor';

class Layout extends Component {

  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "calc(100vh - 40px)",
    };
    return (
      <div className="Layout" style={style}>
        <Box isFolded={this.props.isLTabFolded} width="200px" />
        <Box flexGrow={1} flexShrink={1} folded={false}>
          <CodeEditor />
        </Box>
        <Box isFolded={this.props.isRTabFolded} width="200px" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // hoge: state.layout.hoge,
    isLTabFolded: state.layout.isLTabFolded,
    isRTabFolded: state.layout.isRTabFolded,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
