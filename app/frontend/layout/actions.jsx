const namespace = function(name) {
  return `layout/${name}`;
};

const Actions = {
  TOGGLE_L_TAB_FOLDING: namespace("toggleLTabFolding"),
  TOGGLE_R_TAB_FOLDING: namespace("toggleRTabFolding"),
};

export default Actions;

export function toggleLTabFolding(isFolded) {
  const res = !isFolded;
  return {
    type: Actions.TOGGLE_L_TAB_FOLDING,
    value: res,
  }
}

export function toggleRTabFolding(isFolded) {
  const res = !isFolded;
  return {
    type: Actions.TOGGLE_R_TAB_FOLDING,
    value: res,
  }
}
