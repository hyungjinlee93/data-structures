var Tree = function (value) {

  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

//O(1)
treeMethods.addChild = function (value) {
  let childTree = Tree(value);
  childTree.parent = this;
  this.children.push(childTree);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target) === false) {
      continue;
    } else {
      return true;
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
