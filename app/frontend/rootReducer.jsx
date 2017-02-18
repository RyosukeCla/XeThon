import { combineReducers } from 'redux';
//reducers imports
import statusDialog from './statusDialog/reducer';
import orderedFileMenu from './orderedFileMenu/reducer';
import tabMenu from './tabMenu/reducer';
import codeEditor from './codeEditor/reducer';
import app from './app/reducer';
import topBar from './topBar/reducer';
import layout from './layout/reducer';

const rootReducer = combineReducers({
//reducers
  statusDialog,
  orderedFileMenu,
  tabMenu,
  codeEditor,
  app,
  topBar,
  layout,
});

export default rootReducer;
