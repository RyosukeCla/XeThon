import Immutable from 'immutable';

import { deleteTargetNode } from './utils';

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
  SET_NODE_ACTIVE: namespace("setNodeActive"),
  HANDLE_TREE_CHANGE: namespace("handleTreeChange"),
  GET_SELECTED_FILE: namespace('getSelectedFile'), // get file and change editors text.
  SAVE: namespace("save"),
  SAVE_ALL: namespace("saveAll"),
  CHANGE_FILE: namespace("chageFile"),

  OPEN_CONTEXT_MENU: namespace("openContextMenu"),
  CLOSE_CONTEXT_MENU: namespace("closeContextMenu"),
}

export default Actions;

export function addNewOrderedFile(tree, filename) {
  let newTree = Immutable.Map(tree).toObject();
  newTree.children.push({
    module: filename,
    isSaved: false,
  });
  return {
    type: Actions.ADD,
    value: newTree,
  }
}

export function deleteOrderedFile(tree, targetModule) {
  let newTree = Immutable.Map(tree).toObject();
  newTree = deleteTargetNode(newTree, targetModule);
  return {
    type: Actions.DELETE,
    value: newTree,
  }
}

export function handleTreeChange(tree) {
  let newTree = Immutable.Map(tree).toObject();
  return {
    type: Actions.HANDLE_TREE_CHANGE,
    value: newTree,
  }
}

export function setNodeActive(node) {
  return {
    type: Actions.SET_NODE_ACTIVE,
    value: node,
  }
}

export function openContextMenu(anchorEl, targetModule) {
  return {
    type: Actions.OPEN_CONTEXT_MENU,
    anchorEl: anchorEl,
    isOpenContextMenu: true,
    targetModule: targetModule,
  }
}

export function closeContextMenu() {
  return {
    type: Actions.CLOSE_CONTEXT_MENU,
    isOpenContextMenu: false,
  }
}

// TODO: Actionsにあるやつらを作る。
