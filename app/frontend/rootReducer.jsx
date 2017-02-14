import { combineReducers } from 'redux';
//reducers import
import codeEditor from './codeEditor/codeEditorReducer';
import resizableLayout from './resizableLayout/resizableLayoutReducer';
import resizableBox from './resizableLayout/resizableBoxReducer';

const rootReducer = combineReducers({
//reducers
  codeEditor,
  resizableLayout,
  resizableBox,
});

export default rootReducer;
