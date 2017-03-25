import Actions from './actions';

const initialState = {
  open: false,
  message: "",
  callback: null,
}

export default function confirmationDialog(state = initialState, action) {
  switch (action.type) {
    case Actions.OPEN_DIALOG:
      return {
        open: action.open,
        title: action.title,
        message: action.message,
        callback: action.callback,
      };

    case Actions.CLOSE_DIALOG:
      return {
        open: action.open,
      };

    case Actions.OK:
      return {
        open: action.open,
      };
    default:
      return state;
  }
}
