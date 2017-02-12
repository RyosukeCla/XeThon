import { combineReducers } from 'redux';
//reducers import
import resizableLayout from './resizableLayout/resizableLayoutReducer';

const rootReducer = combineReducers({
//reducers
  resizableLayout,
});

export default rootReducer;
