import Actions from './actions';

const initialState = {
  open: false,
  title: "",
  value: "",
  error: "",
  errorTemp: "",
  label: "",
  validation: null,
  callback: null,
}

export default function oneTextFieldDialog(state = initialState, action) {
  switch (action.type) {
    case Actions.OPEN_DIALOG:
      return {
        open: action.open,
        title: action.title,
        value: action.value,
        error: action.error,
        errorTemp: action.errorTemp,
        label: action.label,
        validation: action.validation,
        callback: action.callback,
      };

    case Actions.CLOSE_DIALOG:
      return {
        open: action.open,
      };

    case Actions.OK:
      return {
        open: action.open,
        title: state.title,
        value: state.value,
        error: action.error,
        errorTemp: state.errorTemp,
        label: state.label,
        validation: state.validation,
        callback: state.callback,
      };

    case Actions.CHANGE:
      return {
        open: state.open,
        title: state.title,
        value: action.value,
        error: action.error,
        errorTemp: state.errorTemp,
        label: state.label,
        validation: state.validation,
        callback: state.callback,
      };

    default:
      return state;
  }
}
