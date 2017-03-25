const namespace = function(name) {
  return `codeEditor/${name}`;
}

const Actions = {
  SAVE_TEXT_VALUE: namespace("saveTextValue"),
  SET_TEXT_VALUE: namespace("set"),
}

export default Actions;

export function saveTextValueTemporary(textValue) {
  return {
    type: Actions.SAVE_TEXT_VALUE,
    textValue: textValue,
  };
}

export function setTextValue(textValue) {
  return {
    type: Actions.hoge,
    textValue: textValue,
  };
}
