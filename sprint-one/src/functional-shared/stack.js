var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  _.extend(someInstance, Stack.stackMethods);

  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.size = function(){
  return Object.keys(this.storage).length;
};

Stack.stackMethods.pop = function(){
  var temp = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return temp;
};

Stack.stackMethods.push = function(value){
  this.storage[Object.keys(this.storage).length] = value;
};