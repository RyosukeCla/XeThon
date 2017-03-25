const namespace = function(name) {
  return `confirmationDialog/${name}`;
}

const Actions = {
  OPEN_DIALOG: namespace("openDialog"),
  CLOSE_DIALOG: namespace("closeDialog"),
  OK: namespace("ok"),
}

export default Actions;

export function openConfirmationDialog({callback, title, message}) {
  return {
    type: Actions.OPEN_DIALOG,
    open: true,
    title: title,
    message: message,
    callback: callback,
  };
}

export function closeConfirmationDialog() {
  return {
    type: Actions.CLOSE_DIALOG,
    open: false,
  };
}

export function okConfirmationDialog({callback}) {
  callback();
  return {
    type: Actions.OK,
    open: false,
  };
}
