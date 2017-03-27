import Actions from './actions';

const initialState = {
  active: null,
  tree: {
    module: "Project",
    isSaved: true,
    children: [{
      module: "test",
      isSaved: true,
    }, {
      module: "section1",
      isSaved: true,
    }],
  },
  anchorEl: null,
  isOpenContextMenu: false,
  targetModule: "",
}

export default function orderedFileMenu(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD:
      return {
        active: state.active,
        tree: action.value,
        anchorEl: state.anchorEl,
        isOpenContextMenu: false,
        targetModule: state.targetModule,
      };

    case Actions.DELETE:
      return {
        active: state.active,
        tree: action.value,
        anchorEl: state.anchorEl,
        isOpenContextMenu: false,
        targetModule: state.targetModule,
      };

    case Actions.HANDLE_TREE_CHANGE:
      return {
        active: state.active,
        tree: action.value,
        anchorEl: state.anchorEl,
        isOpenContextMenu: state.isOpenContextMenu,
        targetModule: state.targetModule,
      };
    case Actions.SET_NODE_ACTIVE:
      return {
        active: action.value,
        tree: state.tree,
        anchorEl: state.anchorEl,
        isOpenContextMenu: state.isOpenContextMenu,
        targetModule: state.targetModule,
      };

    case Actions.OPEN_CONTEXT_MENU:
      console.log(action.targetModule);
      return {
        active: state.active,
        tree: state.tree,
        anchorEl: action.anchorEl,
        isOpenContextMenu: action.isOpenContextMenu,
        targetModule: action.targetModule,
      };

    case Actions.CLOSE_CONTEXT_MENU:
      return {
        active: state.active,
        tree: state.tree,
        anchorEl: state.anchorEl,
        isOpenContextMenu: action.isOpenContextMenu,
        targetModule: state.targetModule,
      }
    default:
      return state;
  }
}
