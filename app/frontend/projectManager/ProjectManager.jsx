import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { hoge } from './actions';

class ProjectManager extends Component {

  render() {
    return (
      <div className="ProjectManager"></div>
    );
  }
}

// TODO: 下の形式のjsonを書き換えたり、色々できるやつ。
/**
  project: "Project Name"
  preamble: {
     isSaved: true or false,
     content: "aiueo"
   },
  postamble: {
    isSaved: true or false,
    content: "aiueo"
  },

  tree: {
    module: "Project",
    isSaved: true,
    children: [{
      module: "test",
      isSaved: true,
    }, {
      module: "section 1",
      isSaved: true,
    }],
  },
 */
function mapStateToProps(state, ownProps) {
  return {
    project: state.projectManager.project,
    project_path: state.projectManager.project_path,
    tree: state.projectManager.tree,
  };
}

function mapDispatchToProps(dispatch) {
  return {};//bindActionCreators({ hoge }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectManager);
