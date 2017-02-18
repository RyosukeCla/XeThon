import { arrayMove } from 'react-sortable-hoc';

const namespace = function(name) {
  return `orderedFileMenu/${name}`;
}

const Actions = {
  ADD: namespace("add"),
  DUPLICATE: namespace("duplicate"),
  DELETE: namespace("delete"),
  RENAME: namespace("rename"),
  COPY: namespace("copy"),
  CUT: namespace("cut"),
  PASTE: namespace("paste"),
  SELECT: namespace("select"),
  SORTEND: namespace("sortend"),
  GET_SELECTED_FILE: namespace('getSelectedFile'), // get file and change editors text.
}

export default Actions;

// TODO: 実装
export function addNewOrderedFile(items, file) {
  return {
    type: Actions.ADD,
    value: {},
  }
}

// TODO: こっちを使う
export function handleItemsSortEnd(items, {oldIndex, newIndex}) {
  return {
    type: Actions.SORTEND,
    value: arrayMove(items, oldIndex, newIndex),
  }
}


// TODO: Actionsにあるやつらを作る。
