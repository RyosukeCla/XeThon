import { combineReducers } from 'redux';
//reducers imports
import projectManager from './projectManager/reducer';
import confirmationDialog from './confirmationDialog/reducer';
import oneTextFieldDialog from './oneTextFieldDialog/reducer';
import statusDialog from './statusDialog/reducer';
import orderedFileMenu from './orderedFileMenu/reducer';
import codeEditor from './codeEditor/reducer';
import app from './app/reducer';
import topBar from './topBar/reducer';
import layout from './layout/reducer';

const rootReducer = combineReducers({
//reducers
  projectManager,
  confirmationDialog,
  oneTextFieldDialog,
  statusDialog,
  orderedFileMenu,
  codeEditor,
  app,
  topBar,
  layout,
});

export default rootReducer;
