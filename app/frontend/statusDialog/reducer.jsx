import Actions from './actions';

const initialState = {
  open: false,
}

export default function statusDialog(state = initialState, action) {
  switch (action.type) {
    case Actions.OPEN:
      return { open: action.value };
    case Actions.CLOSE:
      return { open: action.value };
    default:
      return state;
  }
}
