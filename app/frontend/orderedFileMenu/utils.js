export const calcAllNodeNumber = function(node) {
  if (node.children == null || node.children.length == 0) return 1;
  let index = 1;
  for (var i in node.children) {
    index = index + calcAllNodeNumber(node.children[i]);
  }
  return index;
}

export const isExistSameFilename = function(node, filename) {
  if (node.module == filename) return true;
  if (node.children == null || node.children.length == 0) return false;
  for (var i in node.children) {
    if (isExistSameFilename(node.children[i], filename)) {
      return true;
    }
  }
  return false;
}

function temp(parent, children, targetModule) {
  if (children == null || children.length == 0) {
    return false;
  }
  for (var i in children) {
    if (children[i].module == targetModule) {
      parent.children.splice(i, 1);
      return false;
    } else {
      temp(children, children[i].children, targetModule);
    }
  }
}

export const deleteTargetNode = function(tree, targetModule) {
  temp(tree, tree.children, targetModule);
  return tree;
}
