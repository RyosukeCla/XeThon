import Actions from './actions';

const initialState = {
  isLTabFolded: false,
  isRTabFolded: true,
}

export default function layout(state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_L_TAB_FOLDING:
      return { isLTabFolded: action.value, isRTabFolded: state.isRTabFolded };
    case Actions.TOGGLE_R_TAB_FOLDING:
      return { isLTabFolded: state.isLTabFolded, isRTabFolded: action.value };
    default:
      return state;
  }
}
