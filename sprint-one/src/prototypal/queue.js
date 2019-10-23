var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function (){
  return Object.keys(this.storage).length;
};

queueMethods.dequeue = function (){
  let temp = this.storage[0];
  delete this.storage[0];
  let counter = 0;
  for (let keys in this.storage){
    this.storage[counter] = this.storage[keys];
    counter++;
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return temp;
};

queueMethods.enqueue = function (value){
  this.storage[Object.keys(this.storage).length] = value;
};