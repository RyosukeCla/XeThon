const namespace = function(name) {
  return `oneTextFieldDialog/${name}`;
}

const Actions = {
  OPEN_DIALOG: namespace("openDialog"),
  CLOSE_DIALOG: namespace("closeDialog"),
  OK: namespace("ok"),
  CHANGE: namespace("change"),
}

export default Actions;

export function openOneTextFieldDialog({callback, title, label, value, error, validation}) {
  let errorTemp = error;
  if (validation(value)) {
    errorTemp = "";
  }
  return {
    type: Actions.OPEN_DIALOG,
    open: true,
    title: title,
    value: value,
    error: errorTemp,
    errorTemp: error,
    label: label,
    validation: validation,
    callback: callback,
  };
}

export function closeOneTextFieldDialog() {
  return {
    type: Actions.CLOSE_DIALOG,
    open: false,
  };
}

export function okOneTextFieldDialog({callback, validation, value, errorTemp}) {
  let open = true;
  let error = errorTemp;
  if (validation(value)) {
    callback(value);
    open = false;
    error = "";
  }
  return {
    type: Actions.OK,
    open: open,
    error: error,
  };
}

export function changeOneTextFieldDialog({validation, value, errorTemp}) {
  let error = errorTemp;
  if (validation(value)) {
    error = "";
  }
  return {
    type: Actions.CHANGE,
    error: error,
    value: value,
  }
}
