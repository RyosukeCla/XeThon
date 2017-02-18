import Actions from './actions';

const initialState = {
  slideIndex: 0,
}

export default function tabMenu(state = initialState, action) {
  switch (action.type) {
    case Actions.CHANGE_MENU:
      return { slideIndex: action.value };
    default:
      return state;
  }
}
