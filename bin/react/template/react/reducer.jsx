// import Actions from './actions';

const initialState = {}

export default function S_NAME(state = initialState, action) {
  switch (action.type) {
    case 'HOGE': // case Actions.hoge:
      return {};
    default:
      return state;
  }
}
