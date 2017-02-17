import { combineReducers } from 'redux';
//reducers imports
import app from './app/reducer';
import topBar from './topBar/reducer';
import layout from './layout/reducer';
import codeEditor from './codeEditor/codeEditorReducer';

const rootReducer = combineReducers({
//reducers
  app,
  topBar,
  layout,
  codeEditor,
});

export default rootReducer;
