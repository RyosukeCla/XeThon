const namespace = function(name) {
  return `tabMenu/${name}`;
}


const Actions = {
  CHANGE_MENU: namespace("changeMenu")
}

export default Actions;

export function changeMenu(value) {
  return {
    type: Actions.CHANGE_MENU,
    value: value,
  };
}
