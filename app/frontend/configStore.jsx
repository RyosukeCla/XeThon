import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configStore(initialState) {
  const store = createStore(rootReducer, initialState);
  return store;
}
