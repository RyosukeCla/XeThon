// import Actions from './actions';

const initialState = {}

export default function topBar(state = initialState, action) {
  switch (action.type) {
    case 'HOGE': // case Actions.hoge:
      return {};
    default:
      return state;
  }
}
