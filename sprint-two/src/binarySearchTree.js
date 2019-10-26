var BinarySearchTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function (target) {
  if (this.value !== target) {
    if (target < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(target);
      } else {
        this.left.insert(target);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(target);
      } else {
        this.right.insert(target);
      }
    }
  }
};
//return boolean
BinarySearchTree.prototype.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  let child = target < this.value ? this.left : this.right;
  if (child === null) {
    return false;
  } else {
    return child.contains(target);
  }
};
//cb = callback function
//recursion
BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */