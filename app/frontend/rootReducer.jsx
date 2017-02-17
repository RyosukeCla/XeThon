import { combineReducers } from 'redux';
//reducers import
import header from './header/headerReducer';
import codeEditor from './codeEditor/codeEditorReducer';
import resizableLayout from './resizableLayout/resizableLayoutReducer';
import resizableBox from './resizableLayout/resizableBoxReducer';

const rootReducer = combineReducers({
//reducers
  header,
  codeEditor,
  resizableLayout,
  resizableBox,
});

export default rootReducer;
