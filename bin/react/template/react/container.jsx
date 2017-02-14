import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//import * as Actions from './S_NAMEAction';
import C_NAME from './C_NAME';

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
)(C_NAME);
