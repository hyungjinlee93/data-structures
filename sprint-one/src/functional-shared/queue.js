var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function (){
  return Object.keys(this.storage).length;
}

queueMethods.dequeue = function (){
  let temp = this.storage['0'];
  delete this.storage['0'];
  let counter = 0;
  for (let key in this.storage){
    this.storage[counter] = this.storage[key];
    counter++;
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return temp;
}

queueMethods.enqueue = function (value){
  this.storage[Object.keys(this.storage).length] = value;
}