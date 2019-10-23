var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  _.extend(someInstance, Queue.queueMethods);

  return someInstance;
};

Queue.queueMethods = {};



