const namespace = function(name) {
  return `statusDialog/${name}`;
}

const Actions = {
  OPEN: namespace("open"),
  CLOSE: namespace("close"),
}

export default Actions;

export function statusDialogOpen() {
  return {
    type: Actions.OPEN,
    value: true,
  };
}

export function statusDialogClose() {
  return {
    type: Actions.CLOSE,
    value: false,
  };
}
