import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';
import performance from '../../modules/performance';

import Box from './Box';
import CodeEditor from '../codeEditor/CodeEditor';

import TabMenu from '../tabMenu/TabMenu';
import TabBox from '../tabMenu/TabBox';

import OrderedFileMenu from '../orderedFileMenu/OrderedFileMenu';

import uuid from '../../modules/uuidGen';

class Layout extends Component {

  render() {
    performance("Layout");

    const style = {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "calc(100vh - 40px)",
    };
    return (
      <div className="Layout" style={style}>
        <Box isFolded={this.props.isLTabFolded} width="200px">
          <TabMenu tabIcons={["description", "extension"]}>
            <TabBox>
              <OrderedFileMenu />
            </TabBox>
            <TabBox>
              aiueo 4
            </TabBox>
          </TabMenu>
        </Box>
        <Box flexGrow={1} flexShrink={1} folded={false}>
          <CodeEditor />
        </Box>
        <Box isFolded={this.props.isRTabFolded} width="200px"/>
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
