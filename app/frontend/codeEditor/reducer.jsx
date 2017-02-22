import Actions from './actions';

const initialState = {
  textValue: "",
}

export default function codeEditor(state = initialState, action) {
  switch (action.type) {
    case Actions.SAVE_TEXT_VALUE:
      return {
        textValue: action.textValue,
      };
    default:
      return state;
  }
}
