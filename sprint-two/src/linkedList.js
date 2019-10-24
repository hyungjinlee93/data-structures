var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tempNode = new Node(value);
    if(this.tail === null){
      this.head = tempNode;
      this.tail = tempNode;
    } else {
      this.tail.next = tempNode;
      this.tail = tempNode;
    }
  };

  list.removeHead = function() {
    if(this.head === null && this.tail === null){
      return null;
    }
    let tempValue = this.head.value;
    if(this.head.next === null){
      this.head = null;
      this.tail = null;
      return tempValue;
    }
    this.head = this.head.next;
    return tempValue;

  };

  list.contains = function(target) {
    if(this.head === null && this.tail === null){
      return false;
    }
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
