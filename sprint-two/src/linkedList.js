var linkedListNode = function (target) {
  this.value = target;
  this.prev = null;
  this.next = null;
};

var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function (value) {
    let newNode = new linkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  list.addToTail = function (value) {
    let newNode = new linkedListNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function () {
    //no node exists
    if (this.head === null && this.tail === null) {
      return null;
    }
    let tempValue = this.head.value;
    //if only one node exists
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return tempValue;
    }
    //more than one node exists
    this.head = this.head.next;
    this.head.prev = null;
    return tempValue;
  };

  list.removeTail = function () {
    //no node exists
    if (this.head === null && this.tail === null) {
      return null;
    }
    let tempValue = this.tail.value;
    //if only one node exists
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return tempValue;
    }
    //more than one node exists
    this.tail = this.tail.prev;
    this.tail.next = null;
    return tempValue;
  }

  list.contains = function (target) {
    if (this.head === null && this.tail === null) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
